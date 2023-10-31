import styled from "styled-components";
const Wrapper = styled.section`
  padding-top: var(--nav-height);

  .header {
    display: grid;
    align-items: center;
    justify-content: center;
    position: relative;
    /* border-bottom: 0.5px solid gray; */
    /* height: 15vh; */
  }
  h1 {
    text-align: left;
    padding: 1rem;
  }
  .activity-btn {
    /* text-align: center; */
    color: black;
    width: calc(100vw / 4.5);
    height: 1.5rem;
    font-weight: 500;
    cursor: pointer;
    background: white;
    margin-left: 0.5rem;
    border-radius: var(--border-radius);
    transition: var(--transition);
    text-transform: capitalize;
  }
  .search-input {
    display: flex;
    width: 98vw;
  }
  .search-form-input {
    width: 98vw;
    height: 2rem;
    padding-left: 2rem;
  }
  .search-form-input::placeholder {
    cursor: none;
    font-family: inherit;
    color: var(--primary-400);
  }
  .form-icon {
    color: gray;
    height: 2rem;
    margin-left: 0.5rem;
    position: absolute;
  }
  .activity-btn:hover {
    background-color: black;
    color: white;
  }
  .btn-container {
    gap: 3rem;
  }
  @media (min-width: 992px) {
    width: calc(100vw - var(--sidebar-width));
    h1 {
      font-size: xx-large;
    }
    .activity-btn {
      /* text-align: center; */
      width: calc((100vw - var(--sidebar-width)) / 4.5);
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
    }
    width: calc(100vw - var(--sidebar-width));
    position: fixed;
    right: 0;
    top: 0;
  }
`;
export default Wrapper;
