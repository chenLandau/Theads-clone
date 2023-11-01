import styled from "styled-components";

const Wrapper = styled.section`
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
    .bars-icon {
      margin-right: 4px;
      font-size: 35px;
      color: lightgray;
    }
    .bars-icon:hover {
      cursor: pointer;
      rotate: 90deg;
      transition: var(--transition);
      color: black;
    }
  }
  .dashboard {
    width: 100vw;
    height: 100vh;
    position: relative;
    margin: 0 0;
    /* margin: 0 0;
    width: 100vw;
    grid-template-columns: auto 1fr; */
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
  }
`;
export default Wrapper;
