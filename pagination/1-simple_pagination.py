#!/usr/bin/env python3
"""_summary_
"""
import csv
import math
from typing import List


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


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        assert len(page) > 0
        assert len(page_size) > 0
        if page > page_size:
            return []
        else:
            return List(index_range(page, page_size))
