import styled from "styled-components";
const Wrapper = styled.section`
  display: flex;
  width: 100vw;
  .home-body {
    padding-bottom: var(--nav-height);
  }

  .post-page {
    padding-top: var(--icon-height);
    /* margin: 1rem; */
  }
  .activity-title {
    text-align: left;
    padding-top: var(--icon-height);
    padding-bottom: 1rem;
  }
  .loading-spinner {
    position: fixed;
    width: 6rem;
    height: 6rem;
    /* border: 5px solid var(--grey-400); */
    border-radius: 50%;
    border-top-color: var(--primary-500);
    animation: spinner 0.6s linear infinite;
  }
  @media (min-width: 992px) {
    .container {
      width: calc(97vw - var(--sidebar-width));
      margin-left: var(--sidebar-width);
    }
    .profile-body,
    .home-body {
      width: min-content;
      display: grid;
      padding-bottom: 0%;
      width: calc(97vw - var(--sidebar-width));
    }
  }
`;
export default Wrapper;
