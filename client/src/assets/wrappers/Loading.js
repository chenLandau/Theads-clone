import styled from "styled-components";
const Wrapper = styled.section`
  .page-center {
    height: 100vh;
    width: 100%;
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
    width: 60vw;
    display: flex;
    .page-center {
      width: 60vw;
      justify-content: center;
    }
  }
`;

export default Wrapper;
