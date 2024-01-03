#!/usr/bin/env python3
"""_summary
"""
import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """_summary_

    Args:
        max_delay (int, optional): _description_. Defaults to 10.

    Returns:
        float: delay
    """
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
