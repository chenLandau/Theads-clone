import styled from "styled-components";
const Wrapper = styled.section`
  .card-container {
    /* border: 1px solid red; */
    width: 98%;
    display: flex;
    height: min-content;
    border-bottom: 1px solid lightgray;
    padding: 0.5rem;
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

  .container-3 {
    width: 100%;
    padding-left: 0.5rem;
    justify-content: space-between;
  }
  .thread-body {
    display: grid;
    gap: 1rem;
    padding-top: 0.5rem;
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
    font-family: -apple-system, system-ui;
    color: darkgray;
    font-weight: 400;
    background: transparent;
    border: transparent;
  }
  .card-btn:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  .links-container {
    display: flex;
    width: min-content;
    padding-top: 0.7rem;
    padding-bottom: 0.3rem;

    /* padding: 0.3rem; */
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
  .uploaded-img {
    /* border: 1px solid red; */
    border-radius: 0.5rem;
    max-width: 100%;
    max-height: 200px;
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
  @media (min-width: 992px) {
    .card-btn {
      font-family: -apple-system, system-ui;
      color: darkgray;
      font-weight: 400;
      background: transparent;
      border: transparent;
    }
    .thread-card-container {
      padding: 0.5rem;
      width: calc(97vw - var(--sidebar-width));
    }
  }
`;

export default Wrapper;
