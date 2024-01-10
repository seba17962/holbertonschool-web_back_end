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
        return mongo_collection.find({"topics": topic},
                                     {"_id": 1, "name": 1, "topics": 1} )
