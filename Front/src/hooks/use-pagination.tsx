"use client";

import { useState } from "react";

import { Pagination } from "@/types/page.types";

export type UsePaginationReturn = Pagination;

export type UsePaginationProps = {
  initialPageNumber?: number;
  initialPageSize?: number;
};

const usePagination = (props?: UsePaginationProps): UsePaginationReturn => {
  const { initialPageNumber = 1, initialPageSize = 5 } = props || {};
  const [pageNumber, setPageNumber] = useState(initialPageNumber);
  const [pageSize, setPageSize] = useState(initialPageSize);

  const next = () => {
    setPageNumber((prevPage) => prevPage + 1);
  };
  const previous = () => {
    setPageNumber((prevPage) => prevPage - 1);
  };
  const extend = (pageLimit: number) => {
    setPageSize(pageLimit);
  };

  const changePage = (_pageNumber: number) => {
    if (_pageNumber > pageNumber - 1) {
      next();
    } else {
      previous();
    }
  };
  return {
    next,
    previous,
    extend,
    pageSize,
    pageNumber,
    changePage,
  };
};

export default usePagination;
