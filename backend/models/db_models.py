"""
Database Models
"""

from sqlalchemy import Column, Integer, String, Float, DateTime, Boolean
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime

Base = declarative_base()

class CostRecord(Base):
    """Cost data record"""
    __tablename__ = "cost_records"
    
    id = Column(Integer, primary_key=True)
    provider = Column(String(50))  # azure, snowflake, bigquery
    date = Column(DateTime, default=datetime.utcnow)
    cost_amount = Column(Float)
    service = Column(String(100))
    resource_group = Column(String(100), nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)


class Recommendation(Base):
    """Cost optimization recommendation"""
    __tablename__ = "recommendations"
    
    id = Column(Integer, primary_key=True)
    title = Column(String(200))
    description = Column(String(1000))
    provider = Column(String(50))
    potential_savings = Column(Float)
    priority = Column(String(20))  # high, medium, low
    applied = Column(Boolean, default=False)
    created_at = Column(DateTime, default=datetime.utcnow)
