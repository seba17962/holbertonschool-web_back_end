#!/usr/bin/env python3
"""_summary_
"""
import pymongo

def list_all(mongo_collection):
    """_summary_

    Args:
        mongo_collection (database): 

    Returns:
        list: documents in mongo_collection
    """
    if mongo_collection is None:
        return []
    else:
        return list(mongo_collection.find())
