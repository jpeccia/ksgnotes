import styled from "styled-components";

export const Container = styled.button`
  background: none;
  color: ${({ theme, isActive }) =>
    isActive ? theme.COLORS.PURPLE : theme.COLORS.GRAY_100};

  border: none;
  font-size: 16px;
`;
