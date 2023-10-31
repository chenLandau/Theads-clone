import styled from "styled-components";
const Wrapper = styled.section`
  .page-center {
    height: 100vh;
    /* height: calc(100vh - var(--nav-height)); */
    display: flex;
    align-self: center;
    justify-content: center;
    align-items: center;
  }
  .icon {
    animation: spin 1s infinite linear;
    margin: 1rem;
    font-size: 40px;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @media (min-width: 992px) {
    width: calc(100vw - var(--sidebar-width));
    display: flex;
    margin-left: 0;
    .page-center {
      justify-content: center;
      width: calc(100vw - var(--sidebar-width));
      margin-left: var(--sidebar-width);
    }
  }
`;

export default Wrapper;
