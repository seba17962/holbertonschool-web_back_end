#!/usr/bin/env python3
"""_summary_
"""
import time
wait_n = __import__('1-concurrent_coroutines').wait_n


async def measure_time(n: int, max_delay: int) -> float:
    """_summary_

    Args:
        n (int): _description_
        max_delay (int): _description_

    Returns:
        float: _description_
    """
    total_time = await time.process_time(wait_n(n, max_delay))
    return total_time / n
