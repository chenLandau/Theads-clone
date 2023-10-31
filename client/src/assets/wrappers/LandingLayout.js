import styled from "styled-components";

const Wrapper = styled.section`
  transition: var(--transition);
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    .page {
      height: 100vh;
      display: grid;
      align-items: center;
      grid-template-columns: 65vw 1fr;
    }
    .main-img {
      /* width: 65vw; */
      /* border-radius: 15%; */
      display: block;
    }
  }
`;
export default Wrapper;
