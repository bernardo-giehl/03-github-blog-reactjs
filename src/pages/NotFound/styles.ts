import styled from 'styled-components'

import { fonts } from '../../styles/fonts'

export const NotFoundContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem auto;
  flex-direction: column;
`

export const NotFoundContentCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: -7rem;
  padding: 2rem;
  background-color: ${(props) => props.theme.baseProfile};
  border-radius: 10px;
  filter: drop-shadow(0 0 0.75rem #00000028);
`

export const NotFoundNavegation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    ${fonts.link};
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    text-transform: uppercase;
  }
`

export const NotFoundTitle = styled.h2`
  ${fonts.titleL};
  color: ${(props) => props.theme.baseTitle};
  margin-top: 1.25rem;
`
