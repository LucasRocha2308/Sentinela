import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  color: var(--white);
  margin: 5rem 0;
  display: flex;
  flex-direction: column;
  max-height: 180px;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    margin: 6rem 0 2rem;
  }
  h1 {
    text-transform: uppercase;
  }
  p {
    margin: 1rem 0;
    max-width: 35rem;
    font-size: 1rem;
  }
  a {
    color: var(--light-blue);
    font-weight: 700;
  }
  margin-bottom: 7rem;
`;
