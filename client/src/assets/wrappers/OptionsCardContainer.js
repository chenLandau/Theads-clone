import styled from "styled-components";
const Wrapper = styled.section`
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
  .new-thread-container {
    box-shadow: var(--white);
    position: fixed;
    bottom: 0;
    left: 0;
    justify-content: center;
    //align-items: center;
    padding-top: 20vh;

    display: flex;
    width: 100%;
    height: 0;
  }
  .show-container {
    animation: slide-up 0.5s forwards;
  }

  @keyframes slide-up {
    to {
      height: 100%;
    }
  }

  .card-container {
    /* justify-content: space-between; */
    background: rgba(255, 255, 255, 1);
    position: fixed;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
    width: 55vw;
    height: 30vh;
    display: grid;
    padding: 0;
    // align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
  }
  .btn-container {
    display: grid;
    padding: 0;
    .btn {
      cursor: pointer;
      //margin-left: 1rem;
      color: black;
      background: white;
      border: none;
      border-top: 1px solid lightgray;
      width: 55vw;
      font-weight: 500;
      transition: var(--transition);
      text-transform: capitalize;
    }
    .delete-btn {
      color: red;
    }
  }
  .text-container {
    padding-top: 1rem;
    display: grid;

    justify-content: center;
    p {
      text-align: center;
      color: black;
      text-transform: capitalize;
    }
    .text {
      line-height: 1.5rem;
      color: gray;
    }
  }
  @media (min-width: 992px) {
    /* .new-thread-container {
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
    } */
  }
`;

export default Wrapper;
