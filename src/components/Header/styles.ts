import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 18.5rem;
  background-color: ${(props) => props.theme.baseProfile};
`

export const HeaderContent = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 18.5rem;

  background-image: radial-gradient(
      circle at top left,
      ${(props) => props.theme.brand}20,
      transparent 25%
    ),
    radial-gradient(
      circle at top right,
      ${(props) => props.theme.brand}20,
      transparent 25%
    ),
    radial-gradient(
      ellipse at bottom,
      ${(props) => props.theme.brand}30,
      transparent 70%
    );

  > img {
    display: flex;
  }

  > a > img {
    margin-top: -5rem;
    margin-left: -3rem;
  }

  a:hover {
    border-bottom: 1px solid transparent;
  }
`
