#!/usr/bin/env python3
"""_summary_
"""
import pymongo


def insert_school(mongo_collection, **kwargs):
    """_summary_

    Args:
        mongo_collection (_type_): _description_

    Returns:
        _type_: _description_
    """
    if mongo_collection is not None:
        return mongo_collection.insert_one(kwargs).inserted_id
