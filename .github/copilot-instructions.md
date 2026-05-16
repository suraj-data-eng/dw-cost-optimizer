# Data Warehouse Cost Optimizer - Copilot Instructions

## Project Overview
Data Warehouse Cost Optimizer is a comprehensive platform for analyzing and optimizing cloud data warehouse costs across Azure Synapse, Snowflake, and BigQuery.

## Architecture
- **Backend**: Python FastAPI server with cost analysis engines
- **Frontend**: React with TypeScript for interactive dashboards
- **Database**: PostgreSQL for historical data and recommendations

## Key Directories
- `/backend` - FastAPI application, cost analyzers, API endpoints
- `/frontend` - React TypeScript application, dashboards, components
- `/docker` - Docker configurations for services
- `/docs` - API documentation and guides

## Development Guidelines
- Follow Python PEP 8 conventions for backend code
- Use TypeScript strict mode for frontend components
- Run tests before committing: `npm test` (frontend) and `pytest` (backend)
