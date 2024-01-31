import { useDispatch } from "react-redux";
import { setPage } from "../../../../utils/redux/moviesSlice";
import { setSearchPage } from "../../../../utils/redux/searchSlice";
import {
  Button,
  Pagination,
  StyledLeftIcon,
  StyledRightIcon,
  Text,
  WrapperContent,
} from "./styled";

export const PaginationMovies = ({
  page,
  totalPages,
  searchPage,
  searchTotalPages,
  searchQuery,
}) => {
  const dispatch = useDispatch();

  const prevPageHandler = () => {
    if (page !== 1) {
      dispatch(setPage(page - 1));
    }
  };

  const prevSearchPageHandler = () => {
    if (searchPage !== 1) {
      dispatch(setSearchPage(searchPage - 1));
    }
  };

  const nextPageHandler = () => {
    if (page !== totalPages) {
      dispatch(setPage(page + 1));
    }
  };

  const nextSearchPageHandler = () => {
    if (searchPage !== searchTotalPages) {
      dispatch(setSearchPage(searchPage + 1));
    }
  };

  const firstPageHandler = () => {
    if (page !== 1) {
      dispatch(setPage(1));
    }
  };

  const firstSearchPageHandler = () => {
    if (searchPage !== 1) {
      dispatch(setSearchPage(1));
    }
  };

  const lastPageHandler = () => {
    if (page !== totalPages) {
      dispatch(setPage(totalPages));
    }
  };

  const lastSearchPageHandler = () => {
    if (searchPage !== searchTotalPages) {
      dispatch(setSearchPage(searchTotalPages));
    }
  };

  return (
    <>
      <Pagination>
        {page === 1 && searchPage === 1 ? (
          <>
            <Button disabled>
              <StyledLeftIcon />
              <StyledLeftIcon />
              <p>First</p>
            </Button>
            <Button disabled>
              <StyledLeftIcon />
              <p>Previous</p>
            </Button>
          </>
        ) : (
          <>
            <Button
              onClick={!searchQuery ? firstPageHandler : firstSearchPageHandler}
            >
              <StyledLeftIcon />
              <StyledLeftIcon />
              <p>First</p>
            </Button>
            <Button
              onClick={!searchQuery ? prevPageHandler : prevSearchPageHandler}
            >
              <StyledLeftIcon />
              <p>Previous</p>
            </Button>
          </>
        )}
        {searchQuery ? (
          <WrapperContent>
            <Text>Page</Text> <strong>{searchPage}</strong> <Text>of</Text>{" "}
            <strong>{searchTotalPages}</strong>
          </WrapperContent>
        ) : (
          <WrapperContent>
            <Text>Page</Text> <strong>{page}</strong> <Text>of</Text>{" "}
            <strong>{totalPages}</strong>
          </WrapperContent>
        )}
        {page === totalPages && searchPage === searchTotalPages ? (
          <>
            <Button disabled>
              <p>Next</p>
              <StyledRightIcon disabled />
            </Button>
            <Button disabled>
              <p>Last</p>
              <StyledRightIcon />
              <StyledRightIcon />
            </Button>
          </>
        ) : (
          <>
            <Button
              onClick={!searchQuery ? nextPageHandler : nextSearchPageHandler}
            >
              <p>Next</p>
              <StyledRightIcon />
            </Button>
            <Button
              onClick={!searchQuery ? lastPageHandler : lastSearchPageHandler}
            >
              <p>Last</p>
              <StyledRightIcon />
              <StyledRightIcon />
            </Button>
          </>
        )}
      </Pagination>
    </>
  );
};
