import styled from "styled-components";
const Wrapper = styled.section`
  .card {
    height: min-content;
    display: flex;
    border-bottom: 1px solid lightgray;
    padding-left: 1rem;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    /* overflow: auto; */
    align-items: center;
  }
  .card-container {
    display: flex;
    padding-left: 1rem;
    width: 100%;
    height: 3rem;

    align-items: center;
    /* border: 1px solid red; */
  }
  .activity-type {
    cursor: default;

    padding: 0;
    line-height: normal;
    color: gray;
    font-weight: 400;
    font-size: 15px;
    padding-left: 0.5rem;
  }
  .user-avatar {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: 1px solid gray;
    object-fit: cover;
  }
  .post-avatar {
    width: 2.5rem;
    height: 2.5rem;
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
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: 1px solid gray;
    overflow: hidden;
  }
  .big-img img .small-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .button-container {
    display: flex;
    padding-right: 1rem;
    justify-content: end;
    /* width: 50%; */
  }
  .btn {
    color: lightgray;
    height: 1.5rem;
    font-weight: 500;
    width: min-content;
    padding: 0;
    padding-left: 1rem;
    padding-right: 1rem;
    cursor: pointer;
    background: white;
    margin-left: 0.5rem;
    border-radius: var(--border-radius);
    border: 2px solid lightgray;
    transition: var(--transition);
    text-transform: capitalize;
  }
  .btn:hover {
    background-color: lightgray;
    color: white;
  }
  .card-btn {
    color: darkgray;
    font-weight: 300;
    background: transparent;
    border: transparent;
  }
  /* .card-btn:hover {
    cursor: pointer;
    text-decoration: underline;
  } */
`;

export default Wrapper;
