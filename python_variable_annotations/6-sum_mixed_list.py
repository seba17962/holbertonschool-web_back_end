#!/usr/bin/env python3
"""_summary_
"""
from typing import Union, List
list_type = Union[int, float]


def sum_mixed_list(mxd_lst: List[list_type]) -> float:
    """_summary_

    Args:
        mxd_lst (List[int, float]): _description_
    """
    add: float = sum(mxd_lst)
    return add
