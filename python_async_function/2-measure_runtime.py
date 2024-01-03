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
    start_time = time.process_time()
    await wait_n(n, max_delay)
    end_time = time.process_time()

    total_time = end_time - start_time
    return total_time / n
