import styled from "styled-components";

export const Container = styled.div`
  color: ${({ theme }) => theme.colors.whiteAlpha[900]};
  width: 100%;
  height: 5rem;
  background: ${({ theme }) => theme.colors.whiteAlpha[50]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;

export const Logo = styled.div`
  font-size: ${({ theme }) => theme.sizes[10]};
  color: ${({ theme }) => theme.colors.purple[500]};
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  p {
    font-size: ${({ theme }) => theme.sizes[5]};
    color: ${({ theme }) => theme.colors.whiteAlpha[900]};
  }
`;
