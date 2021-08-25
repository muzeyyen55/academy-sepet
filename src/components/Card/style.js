import styled from "styled-components";

export const StyledCard = styled.div`
  background-color: aliceblue;
  border-radius: 6px;
  padding: 1rem;
  margin: 0.5rem auto;
`;

export const StyledCard2 = styled(StyledCard)`
  background-color: pink;
`;
