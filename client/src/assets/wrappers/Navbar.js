import styled from "styled-components";
const Wrapper = styled.section`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--white);
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 9999;

  .nav-center {
    /* padding-bottom: 0.5rem; */
    display: flex;
    width: 100vw;
    align-items: center;
    justify-content: space-between;
  }

  .icon {
    font-size: 2rem;
    color: lightgray;
  }
  .nav-icon-container,
  .nav-link {
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20vw;
    height: var(--nav-height);
    background: transparent;
    .active {
      .icon {
        color: black;
      }
    }
  }
  .nav-icon-container:hover {
    cursor: pointer;
    border: none;
    border-radius: 0.25rem;
    background: var(--lightgray);
    /* .icon {
      color: white;
    } */
  }

  /* .icon:hover {
    cursor: pointer;
    font-size: 30px;
    color: var(--black);
  } */
  @media (min-width: 992px) {
    display: none;
  }
`;

export default Wrapper;
