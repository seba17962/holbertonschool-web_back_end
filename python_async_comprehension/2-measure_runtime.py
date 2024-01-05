#!/usr/bin/env python3
"""_summary_
"""
import time
from asyncio import Task, gather

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """_summary_

    Returns:
        float: _description_
    """
    start = time.monotonic()
    tasks = [Task(async_comprehension()) for _ in range(4)]
    await gather(*tasks)

    return (time.monotonic() - start)
