#!/usr/bin/env python3
"""_summary_
"""


def index_range(page, page_size):
    """_summary_

    Args:
        page (_type_): _description_
        page_size (_type_): _description_

    Returns:
        _type_: _description_
    """
    start_index = page_size * (page - 1)
    end_index = page_size * page
    tuple = (start_index, end_index)
    return tuple
