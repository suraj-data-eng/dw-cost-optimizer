"""
Test suite for backend
"""

import pytest
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)


def test_health_check():
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json()["status"] == "healthy"


def test_root_endpoint():
    response = client.get("/")
    assert response.status_code == 200
    assert "status" in response.json()


def test_costs_endpoint():
    response = client.get("/api/costs")
    assert response.status_code == 200


def test_recommendations_endpoint():
    response = client.get("/api/recommendations")
    assert response.status_code == 200
