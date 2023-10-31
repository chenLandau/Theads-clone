import styled from "styled-components";
const Wrapper = styled.section`
  .main-container {
    display: flex;
    padding-top: 1rem;
    justify-content: center;
    align-items: center;
  }
  .icon {
    margin: 0 auto;
    color: black;
    font-size: 4rem;
  }
  p {
    color: var(--text-secondary-color);
    font-weight: 600;
    font-size: 1rem;
    max-width: 35em;
  }
  .main-img {
    display: none;
  }

  @media (min-width: 992px) {
    .main-container {
      width: min-content;
    }
    .main-img {
      display: block;
    }
  }
`;

export default Wrapper;
