#!/usr/bin/env python3
"""_summary_
"""
import pymongo


def schools_by_topic(mongo_collection, topic):
    """_summary_

    Args:
        mongo_collection (_type_): _description_
        topic (_type_): _description_

    Returns:
        _type_: _description_
    """
    if mongo_collection is not None:
        return list(mongo_collection.find( {"topic": topic} ))
