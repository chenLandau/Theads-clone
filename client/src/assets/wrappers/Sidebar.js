import styled from "styled-components";
const Wrapper = styled.section`
  display: none;
  @media (min-width: 992px) {
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
    background: black;
    min-height: 100%;
    height: 100vh;
    width: var(--sidebar-width);
    position: fixed;
    .links-container {
      display: flex;
      flex-direction: column;
      height: 100vh;
      padding-top: 2rem;
      /* justify-content: center; */
    }
    .nav-link,
    .new-thread-btn {
      display: flex;
      align-items: center;
      background: transparent;
      border: transparent;
      padding: 1rem 0;
      height: 50px;
      font-size: medium;
      /* font-weight: 400; */
      gap: 0.5rem;
      color: white;
      padding-left: 1rem;
      text-transform: capitalize;
    }
    .nav-link:hover,
    .new-thread-btn:hover {
      cursor: pointer;
      padding-left: 2rem;
      transition: var(--transition);
    }
    .icon {
      font-size: 30px;
      color: white;
      place-items: center;
    }
    .icon:hover {
      font-size: 30px;
      /* fill: black; */
      /* color: var(--black); */
    }
  }
`;

export default Wrapper;
