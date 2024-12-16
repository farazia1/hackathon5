import React from "react";
interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  }
  
  const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
    const pagesPerBlock = 10; // 1-10 pages in one block
    const currentBlock = Math.ceil(currentPage / pagesPerBlock); // Determine the current block
    const startPage = (currentBlock - 1) * pagesPerBlock + 1; // First page of the current block
    const endPage = Math.min(startPage + pagesPerBlock - 1, totalPages); // Last page of the block
  
    return (
      <div className="flex justify-center ml-[100px] items-center mt-4 space-x-2">
        {/* Previous Block Button */}
        <button
          className={`px-4 py-2 border rounded-md ${
            currentBlock === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-white"
          }`}
          onClick={() => onPageChange(startPage - 1)}
          disabled={currentBlock === 1}
        >
          Previous
        </button>
  
        {/* Page Numbers */}
        {Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index).map(
          (page) => (
            <button
              key={page}
              className={`px-4 py-2 border rounded-md ${
                page === currentPage ? "bg-black text-white" : "bg-white"
              }`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          )
        )}
  
        {/* Next Block Button */}
        <button
          className={`px-4 py-2 border rounded-md ${
            endPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-white"
          }`}
          onClick={() => onPageChange(endPage + 1)}
          disabled={endPage === totalPages}
        >
          Next
        </button>
      </div>
    );
  };
  
  export default Pagination;
  