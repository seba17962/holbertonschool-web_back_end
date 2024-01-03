#!/usr/bin/env python3
"""_summary_
"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """_summary_

    Args:
        multiplier (float): _description_

    Returns:
        Callable[[float], float]: _description_
    """
    def multiplier_function(x: float) -> float:
        return x * multiplier

    return multiplier_function