"""
Generate optimization recommendations based on data analysis
"""
from data_loader import get_all_data
import pandas as pd

class RecommendationEngine:
    @staticmethod
    def analyze_idle_clusters():
        """Recommend removing idle clusters"""
        data = get_all_data()
        clusters = data["clusters"]
        
        # Find clusters with high idle time
        idle_clusters = clusters[clusters["idle_hours"] > 2.5]
        
        if len(idle_clusters) > 0:
            idle_cost = idle_clusters["daily_cost_usd"].sum() * 30
            return {
                "id": "rec_idle_clusters",
                "title": "Reduce Idle Cluster Time",
                "description": f"Found {len(idle_clusters)} clusters with high idle time (>2.5 hrs/day). Consider auto-termination policies.",
                "savings": float(round(idle_cost * 0.4, 2)),  # 40% savings potential
                "priority": "high",
                "details": f"{len(idle_clusters)} idle clusters using ${idle_cost:.2f}/month"
            }
        return None
    
    @staticmethod
    def analyze_failed_jobs():
        """Recommend optimizing failed jobs"""
        data = get_all_data()
        jobs = data["jobs"]
        
        failed_jobs = jobs[jobs["failed"] == True]
        
        if len(failed_jobs) > 0:
            return {
                "id": "rec_failed_jobs",
                "title": "Optimize Failed Job Execution",
                "description": f"Detected {len(failed_jobs)} failed jobs. Retries are wasting compute resources.",
                "savings": float(round(len(failed_jobs) * 50, 2)),  # Estimated savings per job
                "priority": "high",
                "details": f"{len(failed_jobs)} failed jobs detected"
            }
        return None
    
    @staticmethod
    def analyze_query_performance():
        """Recommend query optimization"""
        data = get_all_data()
        queries = data["queries"]
        
        slow_queries = queries[queries["execution_time_sec"] > 100]
        
        if len(slow_queries) > 0:
            slow_cost = slow_queries["compute_cost_usd"].sum() * 30
            return {
                "id": "rec_slow_queries",
                "title": "Optimize Long-Running Queries",
                "description": f"Found {len(slow_queries)} queries taking >100 seconds. Optimization could reduce execution time by 30%.",
                "savings": float(round(slow_cost * 0.3, 2)),
                "priority": "medium",
                "details": f"{len(slow_queries)} slow queries, avg {slow_queries['execution_time_sec'].mean():.1f}s"
            }
        return None
    
    @staticmethod
    def analyze_storage():
        """Recommend storage optimization"""
        data = get_all_data()
        storage = data["storage"]
        
        # Find tables not accessed recently
        old_tables = storage[storage["last_accessed_days_ago"] > 180]
        
        if len(old_tables) > 0:
            archive_cost = old_tables["storage_cost_monthly_usd"].sum()
            return {
                "id": "rec_archive",
                "title": "Archive Cold Data",
                "description": f"Found {len(old_tables)} tables not accessed in 6+ months. Archive to cheaper storage.",
                "savings": float(round(archive_cost * 0.7, 2)),  # 70% savings from archival
                "priority": "medium",
                "details": f"{len(old_tables)} tables eligible for archiving"
            }
        return None
    
    @staticmethod
    def analyze_small_files():
        """Recommend compacting small files"""
        data = get_all_data()
        storage = data["storage"]
        
        small_file_issues = storage[storage["small_file_issue_detected"] == True]
        
        if len(small_file_issues) > 0:
            return {
                "id": "rec_compact",
                "title": "Compact Small Files",
                "description": f"{len(small_file_issues)} tables have small file issues. Compaction improves query performance.",
                "savings": float(round(len(small_file_issues) * 15, 2)),
                "priority": "low",
                "details": f"{len(small_file_issues)} tables with small file fragmentation"
            }
        return None
    
    @staticmethod
    def generate_all_recommendations():
        """Generate all recommendations"""
        recommendations = []
        
        for analyzer in [
            RecommendationEngine.analyze_idle_clusters,
            RecommendationEngine.analyze_failed_jobs,
            RecommendationEngine.analyze_query_performance,
            RecommendationEngine.analyze_storage,
            RecommendationEngine.analyze_small_files
        ]:
            rec = analyzer()
            if rec:
                recommendations.append(rec)
        
        return sorted(recommendations, key=lambda x: x["savings"], reverse=True)
