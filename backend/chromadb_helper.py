import chromadb
from chromadb.config import Settings
import os
from typing import List, Dict
import requests

CHROMA_PERSIST_DIRECTORY = os.getenv("CHROMA_PERSIST_DIRECTORY", "./chroma_data")
OLLAMA_BASE_URL = os.getenv("OLLAMA_BASE_URL", "http://localhost:11434")

# Initialize ChromaDB client
client = chromadb.Client(Settings(
    persist_directory=CHROMA_PERSIST_DIRECTORY,
    anonymized_telemetry=False
))

def get_embedding(text: str) -> List[float]:
    """Get embedding from Ollama"""
    try:
        response = requests.post(
            f"{OLLAMA_BASE_URL}/api/embeddings",
            json={
                "model": "nomic-embed-text",
                "prompt": text
            },
            timeout=30
        )
        if response.status_code == 200:
            return response.json().get("embedding", [])
        return []
    except:
        return []

def add_document_to_vectordb(doc_id: str, text: str, metadata: Dict):
    """Add document to vector database"""
    try:
        collection = client.get_or_create_collection(name="documents")
        
        # Chunk text into smaller pieces
        chunks = chunk_text(text, 500)
        
        for i, chunk in enumerate(chunks):
            embedding = get_embedding(chunk)
            if embedding:
                collection.add(
                    embeddings=[embedding],
                    documents=[chunk],
                    metadatas=[{**metadata, "chunk": i}],
                    ids=[f"{doc_id}_chunk_{i}"]
                )
        return True
    except Exception as e:
        print(f"ChromaDB error: {e}")
        return False

def search_documents(query: str, n_results: int = 5) -> List[Dict]:
    """Search for relevant documents"""
    try:
        collection = client.get_or_create_collection(name="documents")
        query_embedding = get_embedding(query)
        
        if not query_embedding:
            return []
        
        results = collection.query(
            query_embeddings=[query_embedding],
            n_results=n_results
        )
        
        documents = []
        if results and results.get("documents"):
            for i, doc in enumerate(results["documents"][0]):
                documents.append({
                    "text": doc,
                    "metadata": results["metadatas"][0][i] if results.get("metadatas") else {}
                })
        
        return documents
    except Exception as e:
        print(f"Search error: {e}")
        return []

def chunk_text(text: str, chunk_size: int = 500) -> List[str]:
    """Split text into chunks"""
    words = text.split()
    chunks = []
    current_chunk = []
    current_size = 0
    
    for word in words:
        current_chunk.append(word)
        current_size += 1
        
        if current_size >= chunk_size:
            chunks.append(" ".join(current_chunk))
            current_chunk = []
            current_size = 0
    
    if current_chunk:
        chunks.append(" ".join(current_chunk))
    
    return chunks
