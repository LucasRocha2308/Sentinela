import styled from "styled-components";

export const ProposalsCarouselContainer = styled.div`
  width: 100%;
  padding: 1rem 0 2rem 0;
  left: 0;
  section {
    background: var(--dark-blue);
    padding: 1.5rem 1rem;
    margin: 0 0.5rem;
    display: flex;
    gap: 10px;
    flex-direction: column;
    border-radius: 7px;
    color: var(--white);
  }

  h4 {
    text-transform: uppercase;
  }
  b {
    color: var(--light-blue);
  }
  a > span {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
`;
