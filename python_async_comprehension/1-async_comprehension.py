#!/usr/bin/env python3
"""_summary_
"""
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension():
    """_summary_

    Returns:
        _type_: _description_
    """
    result = []
    async for i in async_generator():
        result.append(i)
    return result
