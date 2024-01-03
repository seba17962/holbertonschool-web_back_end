#!/usr/bin/env python3
"""_summary_
"""
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """_summary_

    Args:
        n (int): _description_
        max_delay (int): _description_

    Returns:
        List[float]: _description_
    """
    dictionary = []
    for _ in range(0, n):
        delay = await wait_random(max_delay)
        dictionary.append(delay)
    return sorted(dictionary)
