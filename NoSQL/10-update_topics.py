#!/usr/bin/env python3
"""_summary_
"""
import pymongo


def update_topics(mongo_collection, name, topics):
    """_summary_

    Args:
        mongo_collection (_type_): _description_
        name (_type_): _description_
        topics (_type_): _description_

    Returns:
        _type_: _description_
    """
    if mongo_collection is not None:
        return mongo_collection.update_many({ "name": name },
                                       { "$set": { "topics": topics } }
                                       )
