# Data Warehouse Cost Optimizer

A comprehensive platform for analyzing and optimizing cloud data warehouse costs across multiple providers.

## Supported Platforms
- Azure Synapse
- Snowflake
- BigQuery

## Features
- **Cost Analysis**: Detailed breakdown of data warehouse spending
- **Workload Analytics**: Query performance and cost correlation
- **Optimization Recommendations**: AI-driven cost-saving suggestions
- **Historical Tracking**: Track costs and metrics over time
- **Alerting**: Budget and anomaly alerts
- **Capacity Planning**: Forecast future costs and requirements

## Quick Start

### Prerequisites
- Python 3.9+
- Node.js 16+
- Docker & Docker Compose (optional)

### Backend Setup
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

### Docker Compose
```bash
docker-compose up
```

## Project Structure
```
.
├── backend/              # FastAPI backend
│   ├── app/
│   ├── analyzers/        # Cost analysis engines
│   ├── models/           # Data models
│   └── requirements.txt
├── frontend/             # React TypeScript frontend
│   ├── src/
│   ├── public/
│   └── package.json
├── docker/               # Docker configurations
├── docs/                 # Documentation
└── README.md
```

## API Documentation
Once the backend is running, visit `http://localhost:8000/docs` for interactive API docs.

## Contributing
1. Create a feature branch
2. Make changes
3. Run tests: `pytest` (backend) and `npm test` (frontend)
4. Submit a pull request

## License
MIT
