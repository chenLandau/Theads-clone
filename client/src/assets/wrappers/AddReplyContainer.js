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
  .container {
    background: rgba(255, 255, 255, 1);
    position: fixed;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
    width: 90vw;
    justify-content: center;
    height: min-content;
    border-radius: 0.5rem;
  }
  .card-container {
    display: flex;
    height: min-content;
    border-bottom: 1px solid lightgray;
    padding: 0.5rem;
  }
  .reply-body {
    justify-content: start;
    align-items: start;
    h5 {
      justify-self: start;
    }
  }

  .container-1 {
    box-shadow: var(--white);
    position: fixed;
    bottom: 0;
    left: 0;
    padding-top: 5vh;
    justify-content: center;
    display: flex;
    width: 100%;
    height: 0;
  }

  .card-container {
    border: none;
  }
  .reply-header {
    display: flex;
    height: 3rem;
    border-bottom: 1px solid lightgray;
  }
  .thread-header {
    display: flex;
    height: min-content;
    //grid-column: auto 1fr;
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

  @keyframes slide-up {
    to {
      height: 100%;
    }
  }
  .followers-body {
    display: grid;
    width: 80vw;
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
