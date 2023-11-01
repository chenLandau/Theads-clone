import styled from "styled-components";
const Wrapper = styled.section`
  z-index: 9999;

  .card-layout {
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: 100%;
    background: gray;
    opacity: 0.5;
  }
  .followers-container {
    box-shadow: var(--white);
    position: fixed;
    bottom: 0;
    left: 0;
    padding-top: 20vh;
    justify-content: center;
    //align-items: center;
    display: flex;
    width: 100%;
    height: 0;
  }
  .thread-header {
    cursor: default;
    display: flex;
    height: 3rem;
    width: 80vw;
    grid-column: auto 1fr;
    border-bottom: 1px solid lightgray;
    /* align-items: center;
    justify-content: center; */
  }
  .header-btn-container {
    width: 80vw;
    .header-btn {
      border-top-right-radius: 0.5rem;
      border-top-left-radius: 0.5rem;
      width: 40vw;
    }
  }
  .cancel-btn {
    cursor: pointer;
    margin-left: 1rem;
    color: black;
    background: transparent;
    border: transparent;
    font-weight: 500;
    transition: var(--transition);
    text-transform: capitalize;
  }
  .title {
    padding-right: 2rem;
    width: 100%;
    font-size: medium;
    font-weight: 700;
    justify-content: center;
    display: flex;
    align-items: center;
  }
  .show-container {
    animation: slide-up 0.5s forwards;
  }
  .loading-spinner {
    position: fixed;
    border: 1px solid red;
    width: 6rem;
    height: 6rem;
    border: 5px solid var(--grey-400);
    border-radius: 50%;
    border-top-color: var(--primary-500);
    animation: spinner 0.6s linear infinite;
  }
  .header-container {
    padding-top: 0.5rem;
    height: 2rem;
    border-bottom: 1px solid lightgrey;
  }
  @keyframes slide-up {
    to {
      height: 100%;
    }
  }
  .followers-body {
    display: grid;
    width: 80vw;
    /* border: 1px solid red; */
  }
  .container {
    background: rgba(255, 255, 255, 1);
    position: fixed;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
    width: 80vw;
    min-height: 46vh;
    max-height: 70vh;
    border-radius: 0.5rem;
  }

  .followers-body {
    display: grid;
  }
  .text {
    padding-top: 1rem;
  }
  @media (min-width: 992px) {
    .new-thread-container {
      background: whitesmoke;
      box-shadow: var(--white);

      bottom: 0;
      justify-content: center;
      display: flex;
      width: 100vw;
      height: 0;
      overflow: hidden;
    }
    .text-area {
      width: 65vw;
    }
    .content {
      width: 70vw;
      height: 80vh;
    }
  }
`;

export default Wrapper;
