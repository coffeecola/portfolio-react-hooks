import React, { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";

const SearchInput = () => {
  const { handleSearchSubmit, searchQuery, handleSearchChange } = useContext(
    SearchContext
  );
  return (
    <React.Fragment>
      <section className="py-4 bg-light">
        <div className="container">
          <form
            onSubmit={e => {
              handleSearchSubmit();
              e.preventDefault();
            }}
            className="form-inline"
          >
            <span className="col-xs-3 col-md-3 d-flex align-items-center">
              <i className="fa fa-user"></i>
              <span className="ml-3">Username</span>
            </span>
            <input
              name="search"
              type="text"
              value={searchQuery}
              onChange={e => {
                handleSearchChange(e);
                e.preventDefault();
              }}
              className="col-xs-6 col-md-6 form-control"
            />
          </form>
        </div>
      </section>
    </React.Fragment>
  );
};

export default SearchInput;
