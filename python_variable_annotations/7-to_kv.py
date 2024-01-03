#!/usr/bin/env python3
"""_summary_
"""
from typing import Union, List, Tuple
list_type = Union[int, float]


def to_kv(k: str, v: list_type) -> Tuple[str, float]:
    """_summary_

    Args:
        k (str): _description_
        v (list_type): _description_

    Returns:
        tuple: _description_
    """
    return tuple[k, v*v]
