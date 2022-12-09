function Pagination({ totalPages, currentPage, handelPage }) {
  const page = new Array(totalPages).fill(0).map((a, i) => {
    return (
      <button
        onClick={() => {
          handelPage(i + 1);
        }}
        disabled={currentPage === i + 1}
      >
        {i + 1}
      </button>
    );
  });

  return <div>{page}</div>;
}
export default Pagination;
