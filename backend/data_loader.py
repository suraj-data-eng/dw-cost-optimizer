"""
Data loader for sample Azure data files
"""
import pandas as pd
from pathlib import Path

SAMPLE_DATA_DIR = Path("C:/Users/LENOVO/Downloads/testing")

class AzureDataLoader:
    @staticmethod
    def load_cluster_usage():
        """Load cluster usage data"""
        path = SAMPLE_DATA_DIR / "azure_cluster_usage.csv"
        return pd.read_csv(path)
    
    @staticmethod
    def load_query_history():
        """Load query history data"""
        path = SAMPLE_DATA_DIR / "azure_query_history.csv"
        return pd.read_csv(path)
    
    @staticmethod
    def load_spark_jobs():
        """Load Spark job metrics"""
        path = SAMPLE_DATA_DIR / "azure_spark_job_metrics.csv"
        return pd.read_csv(path)
    
    @staticmethod
    def load_storage_metrics():
        """Load storage metrics"""
        path = SAMPLE_DATA_DIR / "azure_storage_metrics.csv"
        return pd.read_csv(path)

def get_all_data():
    """Load all data"""
    return {
        "clusters": AzureDataLoader.load_cluster_usage(),
        "queries": AzureDataLoader.load_query_history(),
        "jobs": AzureDataLoader.load_spark_jobs(),
        "storage": AzureDataLoader.load_storage_metrics(),
    }
