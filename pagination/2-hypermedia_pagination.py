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
        """_summary_

        Args:
            page (int, optional): _description_. Defaults to 1.
            page_size (int, optional): _description_. Defaults to 10.

        Returns:
            List[List]: _description_
        """
        assert isinstance(page, int)
        assert isinstance(page_size, int)
        assert page > 0
        assert page_size > 0

        start_index, end_index = index_range(page, page_size)
        dataset = self.dataset()

        if start_index >= len(dataset) or start_index < 0:
            return []
        else:
            return dataset[start_index:end_index]

    def get_hyper(self, page: int = 1, page_size: int = 10) -> dict:
        """
        Get hyper information about the dataset based on pagination.

        Args:
            page (int): Current page number.
            page_size (int): Number of rows per page.

        Returns:
            dict: Hyper information containing page_size,
            page, data, next_page, prev_page, and total_pages.
        """
        data = self.get_page(page, page_size)
        total_pages = math.ceil(len(self.dataset()) / page_size)

        if page * page_size < len(self.dataset()):
            next_page = page + 1
        else:
            None
        prev_page = page - 1 if page > 1 else None

        return {
            "page_size": len(data),
            "page": page,
            "data": data,
            "next_page": next_page,
            "prev_page": prev_page,
            "total_pages": total_pages
        }
