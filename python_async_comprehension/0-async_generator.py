#!/usr/bin/env python3
"""_summary_
"""
import asyncio
from random import uniform


async def async_generator():
    """_summary_

    Yields:
        _type_: _description_
    """
    for _ in range(0, 10):
        await asyncio.sleep(1)
        yield uniform(0, 10)
