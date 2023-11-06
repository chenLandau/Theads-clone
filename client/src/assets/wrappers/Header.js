import styled from "styled-components";
const Wrapper = styled.section`
  padding-top: var(--icon-height);
  .header {
    width: 100vw;
  }

  .header-btn-container {
    border-bottom: gray;
    display: flex;
    width: min-content;
  }
  .header-btn {
    cursor: pointer;
    color: gray;
    background: var(--white);
    border: none;
    font-weight: 600;
    padding: 0.5rem;
    border-bottom: 1px solid lightgray;
    transition: var(--transition);
    width: 49vw;
    text-transform: capitalize;
  }
  .active {
    color: black;
    border-bottom: 1px solid black;
  }

  //** PROFILE **//
  .user-container {
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
  }
  .details {
    padding-top: 0.5rem;
    display: grid;
    justify-items: start;
    gap: 0.5rem;
    h3 {
      font-size: xx-large;
    }
    h4 {
      font-size: small;
      font-weight: 300;
    }
    h5 {
      font-weight: 300;
      font-size: small;
      color: #616161;
    }
  }
  .profile-pic {
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
    object-fit: cover;
  }
  .card-btn {
    display: flex;
    color: darkgray;
    font-weight: 300;
    background: transparent;
    border: transparent;
  }

  .card-btn:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  //**SEARCH**//
  h1 {
    text-align: left;
    padding: 1rem;
  }
  .form-header {
    width: 100vw;
    padding: 2%;
  }
  .search-input {
    border: none;
    display: flex;
    width: 100%;
  }
  .search-form-input {
    border-radius: 0.25rem;
    border: 0.5rem;
    padding: 1rem;
    background: #f2f2f2;
    width: 100%;
    height: 2rem;
    padding-left: 2rem;
  }
  .search-form-input::placeholder {
    cursor: none;
    font-family: inherit;
    color: var(--primary-400);
  }
  .btn-container-1 {
    padding: 1rem;
    display: flex;
    justify-content: center;
    gap: 2rem;
    .black-btn,
    .white-btn,
    .grey-btn {
      width: 80vw;
    }
  }
  .form-icon {
    color: gray;
    height: 2rem;
    margin-left: 0.5rem;
    position: absolute;
  }
  .activity-btn:hover {
    background-color: black;
    color: white;
  }
  .btn-container {
    gap: 3rem;
  }
  @media (min-width: 992px) {
    .form-header {
      width: var(--large-page-width);
    }
    .header-btn {
      width: 30vw;
    }
    .header,
    .btn-container-1,
    .user-container,
    .header-btn-container {
      width: var(--large-page-width);
    }
    .btn-container-1 {
      padding: 1rem;
      display: flex;
      justify-content: center;
      gap: 2rem;
      .black-btn,
      .white-btn,
      .grey-btn {
        width: 50vw;
      }
    }
  }
`;
export default Wrapper;
