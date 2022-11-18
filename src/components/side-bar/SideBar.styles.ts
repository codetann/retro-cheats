import styled, { css } from "styled-components";

interface LabelProps {
  active?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 18rem;
  height: 100vh;
  background: ${({ theme }) => theme.colors.whiteAlpha[50]};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  color: ${({ theme }) => theme.colors.whiteAlpha[900]};
`;

export const Label = styled.p<LabelProps>`
  background: ${({ theme, active }) =>
    active ? theme.colors.purple[700] : "transparent"};
  color: ${({ theme, active }) =>
    active ? theme.colors.whiteAlpha[900] : theme.colors.whiteAlpha[600]};
  width: 100%;
  padding: 1rem;
  font-size: 0.8rem;
  cursor: pointer;

  ${({ active }) =>
    !active &&
    css`
      &:hover {
        background: ${({ theme }) => theme.colors.whiteAlpha[50]};
      }
    `};
`;
