import React from "react";
import { useSubmit } from "react-router-dom";
import Wrapper from "../assets/wrappers/Header";
import { Form } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { useSearchUsersContext } from "../pages/mainPages/Search";

const SearchHeader = () => {
  const { searchValue } = useSearchUsersContext();
  const submit = useSubmit();
  const debounce = (onChange) => {
    let timeout;
    return (e) => {
      const form = e.currentTarget.form;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        onChange(form);
      }, 500);
    };
  };
  return (
    <Wrapper>
      <header className="header">
        <Form className="form-header">
          <h1>Search</h1>
          <div className="search-input">
            <GoSearch className="form-icon" />
            <input
              type="search"
              id="search"
              name="search"
              defaultValue={searchValue.search}
              className="search-form-input"
              placeholder="Search"
              autoFocus
              onChange={debounce((form) => {
                submit(form);
              })}
            />
          </div>
        </Form>
      </header>
    </Wrapper>
  );
};

export default SearchHeader;
