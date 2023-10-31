import styled from "styled-components";

const Wrapper = styled.section`
  transition: var(--transition);
  .icon-container {
    height: var(--icon-height);
    position: fixed;
    background: var(--white);
    justify-content: center;
    width: 100vw;
    top: 0;
    padding: 0.5rem;
    z-index: 9999;
    display: flex;
    .icon {
      font-size: 30px;
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
    .icon-container {
      position: fixed;
      margin-left: var(--sidebar-width);
      width: calc(100vw - var(--sidebar-width));
    }
  }
`;
export default Wrapper;
