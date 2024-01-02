#!/usr/bin/env python3
"""_summary_
"""


def sum_list(input_list: list[float]) -> float:
    """_summary_

    Args:
        input_list (list[float]): _description_

    Returns:
        float: _description_
    """
    add: float = 0
    for num in input_list:
        add = add + num
    return add
