import styled from "styled-components";
const Wrapper = styled.section`
  .card-container {
    top: 0;
    display: flex;
    height: min-content;
    /* border-bottom: 1px solid lightgray; */
    padding: 1rem;
    padding-top: 0.5rem;
    border-bottom: 1px solid lightgrey;
    /* padding-bottom: 1rem; */
  }

  .thread-header {
    /* padding-top: 0.5rem; */
    display: flex;
    justify-content: space-between;
  }
  .post-data {
    display: flex;
    align-items: center;
    gap: 1rem;
    p {
      padding-bottom: 0.2rem;
      color: darkgray;
    }
  }
  .profile-link {
    color: black;
  }
  .profile-link:hover {
    text-decoration: underline;
  }
  .reply-body {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  .container-3 {
    width: 100%;
    padding-left: 0.5rem;
    justify-content: space-between;
  }
  .thread-body {
    /* border: 1px solid red; */
    /* padding-top: 0.5rem; */
  }
  .container-4 {
    display: flex;
    gap: 1rem;
    p {
      color: darkgray;
    }
    .icon {
      padding-bottom: 0.5rem;
    }
    .icon:hover {
      cursor: pointer;
    }
  }
  .card-btn {
    color: darkgray;
    font-weight: 300;
    background: transparent;
    /* border: transparent; */
  }
  .card-btn:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  .small-heart-icon:hover,
  .small-liked-icon:hover {
    cursor: pointer;
  }
  .small-heart-icon {
    width: 10px;
    height: 10px;
  }
  .small-liked-icon {
    width: 10px;
    height: 10px;
    color: red;
    fill: red;
  }
  .links-container {
    display: flex;
    width: min-content;
    padding-top: 1rem;
    padding-bottom: 0.3rem;
    gap: 1rem;
    .icon {
      width: 16px;
      height: 16px;
    }
    .liked-icon {
      width: 16px;
      height: 16px;
      color: red;
      fill: red;
    }
    .icon:hover,
    .liked-icon:hover {
      cursor: pointer;
    }
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
    height: 60%;
    max-height: 100%;
    margin: 1.3rem;
    background-color: lightgray;
  }
  .small-thread-card-bar {
    position: absolute;
    bottom: 0.5rem;
    top: 1.5rem;
    width: 4%;

    max-height: 80%;
    margin: 1.3rem;
    background-color: lightgray;
  }
  .text-area {
    resize: none; /* Prevents resizing */
    height: 150px; /* Set the desired height */
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
    align-self: flex-end;
    border: none;
  }

  .post-btn-disabled {
    background: lightgrey;
  }
  @media (min-width: 992px) {
    .card-container {
      padding: 0.5rem;
      width: calc(100vw - var(--sidebar-width));
    }
  }
`;

export default Wrapper;
