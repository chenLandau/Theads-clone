import styled from "styled-components";
const Wrapper = styled.section`
  .new-thread-container {
    background: whitesmoke;
    box-shadow: var(--white);
    position: fixed;
    bottom: 0;
    left: 0;
    justify-content: center;
    display: flex;
    width: 100%;
    height: 100vh;
    align-self: center;
    height: 0;
    overflow: hidden;
    padding: 2rem;
  }
  .show-container {
    z-index: 9999;
    animation: slide-up 0.5s forwards;
  }

  .card-container {
    padding-top: 0.5rem;
    display: flex;
    height: max-content;
  }

  @keyframes slide-up {
    to {
      height: 100%;
    }
  }

  .container-3 {
    width: 100%;
    padding: 0.5rem;
  }
  .body-header {
    width: 100%;
    display: grid;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    /* padding-top: 1rem; */
  }
  p {
    padding-top: 1rem;
    padding-bottom: 1rem;
    color: lightgray;
  }
  .img-container {
    display: grid;
    justify-content: center;
    position: relative;
    padding: 0.1rem;
    gap: 1rem;
    justify-content: space-around;
  }
  .big-img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    border: 1px solid gray;
    overflow: hidden;
  }
  .big-img img .small-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .small-img {
    border: 1px solid gray;
    margin-left: 0.5rem;
    width: 1.5rem;
    height: 1.5rem;
    align-self: flex-end;
    overflow: hidden;
    border-radius: 50%;
  }
  .thread-card-bar {
    position: absolute;
    bottom: 0.5rem;
    top: 1.5rem;
    width: 4%;
    max-height: 80%;
    margin: 1.3rem;
    background-color: lightgray;
  }
  .content {
    /* gap: 0.5rem; */
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
    margin-top: 1rem;
    width: 90vw;
    height: 80vh;
    padding: 0.5rem;
    background: white;
    /* display: grid; */
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
  }
  .thread-header {
    cursor: default;
    display: flex;
    height: 3rem;
    /* grid-column: auto 1fr; */
    border-bottom: 1px solid lightgray;
    /* align-items: center;
    justify-content: center; */
  }
  .thread-body {
    display: grid;
    padding-bottom: 1rem;
    margin-right: 0;

    /* justify-content: space-between; */
    /* justify-content: baseline;
    align-items: start;  */
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
  .user-title {
    font-size: 1rem;
    font-weight: 700;
  }
  .media-icon {
    color: gray;
    width: min-content;
    // border: 1px solid red;
  }
  .uploaded-img-container {
    margin-top: 1rem;
    width: max-content;
    position: relative;
    display: inline-block;
  }
  .uploaded-img {
    /* border: 1px solid red; */
    border-radius: 0.5rem;
    max-width: 100%;
    max-height: 200px;
  }
  .delete-icon {
    /* opacity: 0.7; */
    color: gray;
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.3rem;
    font-size: 24px;
    cursor: pointer;
  }
  .text-area {
    max-height: 80%;
    resize: none; /* Prevents resizing */
    height: 100px;
    width: 90%;
  }
  .post-btn {
    cursor: pointer;
    color: white;
    font-weight: 500;
    transition: var(--transition);
    text-transform: capitalize;
    background: black;
    height: min-content;
    padding: 0.5rem;
    border-radius: 0.5rem;
    margin-left: 88%;
    margin-top: 65%;
    border: none;
  }

  .post-btn-disabled {
    background: lightgrey;
  }

  .title {
    padding-right: 1rem;
    width: 100%;
    font-size: medium;
    font-weight: 700;
    justify-content: center;
    display: flex;
    align-items: center;
  }
  @media (min-width: 992px) {
    .new-thread-container {
      background: whitesmoke;
      box-shadow: var(--white);
      //position: fixed;
      //padding-left: 1rem;

      bottom: 0;
      /* left: 0; */
      justify-content: center;
      display: flex;
      width: 100vw;
      height: 0;
      overflow: hidden;
    }
    /* .post-btn {
      right: 16vw;
    } */
    .text-area {
      width: 65vw;
    }
    .content {
      width: 70vw;
      /* height: 80vh; */
    }
  }
`;

export default Wrapper;
