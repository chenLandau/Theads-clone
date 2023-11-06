import styled from "styled-components";

const Wrapper = styled.section`
  .dashboard {
    width: 100vw;
    height: 100vh;
    position: relative;
    margin: 0 0;
  }
  .nav-header {
    height: var(--icon-height);
    position: fixed;
    background: var(--white);
    width: 98vw;
    top: 0;
    padding-top: 0.5rem;
    z-index: 9999;
    display: flex;
    .thread-icon {
      padding-left: 20px;
      font-size: 30px;
      width: 100%;
    }
    .dropdown-menu-container {
      margin-right: 4px;
      font-size: 35px;
      color: lightgray;
    }
  }

  /* Logout Container */
  .bars-icon:hover {
    cursor: pointer;
    rotate: 90deg;
    transition: var(--transition);
    color: black;
  }
  .logout-btn-container {
    display: grid;
    right: 0.2rem;
    width: max-content;
    position: fixed;
    border-radius: 0.25rem;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
    .btn {
      font-weight: 550;
      border-radius: 0.25rem;
      cursor: pointer;
      padding: 0.5rem;
      width: 10rem;
      color: black;
      background: white;
      border: none;
      border-top: 1px solid lightgray;
      text-transform: capitalize;
    }
  }
  @media (min-width: 992px) {
    margin-left: 20vw;
    margin-right: 20vw;
    width: 60vw;
    .dashboard {
      width: 60vw;
      height: 100vh;
      position: relative;
      margin-right: 7vw;
      margin: 0 0;
    }
    .nav-header {
      width: 60vw;
    }
    .logout-btn-container {
      right: 18.5vw;
    }
  }
`;
export default Wrapper;
