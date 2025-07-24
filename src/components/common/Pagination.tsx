import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

interface PaginationButtonProps {
  currentPage: number;
  className?: string;
  disabled?: boolean;
  onClick: (page: number) => void;
  children: React.ReactNode;
}

const PaginationButton: React.FC<PaginationButtonProps> = ({currentPage, onClick, disabled, children,className}) => {
  return (
        <button
            onClick={() => onClick(currentPage - 1)}
            disabled={disabled}
            className={"px-3 py-2 text-gray-500 hover:text-black disabled:text-gray-300 "+className}>
            {children}
          </button>
  );
}

const Pagination: React.FC<PaginationProps> = ({currentPage,totalPages,onPageChange}) => {
    return (
        <div className="flex justify-end mt-6">
        <div className="flex flex-wrap items-center text-sm">
          <PaginationButton currentPage={currentPage} className='lg:mr-[42px]' onClick={onPageChange} disabled={currentPage === 1}>
            ← Previous
          </PaginationButton>

          {Array.from({ length: totalPages }, (_, i) => {
            const page = i + 1;
            const isActive = page === currentPage;

            return (
              <button
                key={page}
                onClick={() => onPageChange(page)}
                className={`px-3 py-2 rounded-md transition ${
                  isActive
                    ? "bg-indigo-100 text-[#7F56D9] font-semibold"
                    : "text-gray-500 hover:bg-indigo-50 hover:text-[#7F56D9]"
                }`}
              >
                {page}
              </button>
            );
          })}

          <PaginationButton className='lg:ml-[42px]' currentPage={currentPage} onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
            Next →
          </PaginationButton>
        </div>
      </div>
    );
}

export default Pagination;
