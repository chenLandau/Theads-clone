import React, { useEffect } from "react";
import { SearchContainer, SearchHeader } from "../../components";
import customFetch from "../../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import { useContext, createContext } from "react";
import { toast } from "react-toastify";
import Wrapper from "../../assets/wrappers/Page";
export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  try {
    const { data } = await customFetch.get("/users/all-users", {
      params,
    });
    return { data, searchValue: params };
  } catch (error) {
    toast.error(error?.response?.data?.massage);
    return error;
  }
};
const SearchUsersContext = createContext();
const Search = () => {
  const { data, searchValue } = useLoaderData();

  return (
    <SearchUsersContext.Provider value={{ data, searchValue }}>
      <Wrapper>
        <section className="container">
          <SearchHeader />
          <SearchContainer />
        </section>
      </Wrapper>
    </SearchUsersContext.Provider>
  );
};
export const useSearchUsersContext = () => useContext(SearchUsersContext);
export default Search;
