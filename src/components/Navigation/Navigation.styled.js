import styled from "@emotion/styled";

export const StyledNavigation = styled.nav`
display: flex;
gap: 10px;
height: 40px;

a {
  padding: 10px;

  &:activ {
    color: red;
  }
}
`