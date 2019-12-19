import React, { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";

const SearchInput = () => {
  const { handleSearchSubmit, searchQuery, handleSearchChange } = useContext(
    SearchContext
  );

  return (
    <React.Fragment>
      <section className="search">
        <div className="container">
          <form
            onSubmit={e => {
              handleSearchSubmit();
              e.preventDefault();
            }}
            className="search__form"
          >
            <span className="search__icon-container">
              <i className="fa fa-2x fa-user search__icon"></i>
              <span className="search__label-text">Username</span>
            </span>
            <input
              name="search"
              type="text"
              value={searchQuery}
              onChange={e => {
                handleSearchChange(e);
                e.preventDefault();
              }}
              className="search__input "
            />
          </form>
        </div>
      </section>
    </React.Fragment>
  );
};

export default SearchInput;
