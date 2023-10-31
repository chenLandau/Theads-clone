import styled from "styled-components";
const Wrapper = styled.section`
  .main-container {
    padding-top: 2rem;
    padding-left: 5rem;
  }
  .links-container {
    display: grid;
    gap: 1rem;
    padding: 2rem;
  }
  .icon {
    color: black;
    font-size: 120px;
    margin-bottom: 1.5rem;
  }
  h1 {
    text-align: left;
    display: grid;
    font-weight: 600;
    font-size: 2rem;
    span {
      font-weight: 700;
      font-size: 3rem;
    }
    padding: 1rem;
    /* margin-bottom: 1rem; */
  }
  p {
    padding: 1rem;
    color: var(--text-secondary-color);
    font-weight: 600;
    font-size: 1rem;
  }

  @media (min-width: 992px) {
    .main-container {
      padding-top: 5rem;
      height: 100vh;
      width: 35vw;
    }
  }
`;

export default Wrapper;
