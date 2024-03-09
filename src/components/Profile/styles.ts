import styled from 'styled-components'

import { fonts } from '../../styles/fonts'

export const ProfileCard = styled.div`
  height: 13.25rem;
  display: flex;
  margin-top: -7rem;
  background-color: ${(props) => props.theme.baseProfile};
  border-radius: 10px;
  filter: drop-shadow(0 0 0.75rem #00000028);

  > img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
    margin: 2rem 2rem 2rem 2.5rem;
  }
`

export const ProfileDescription = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const ProfileTitle = styled.div`
  width: 38.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2.5rem 2rem 0 0;

  h2 {
    ${fonts.titleL};
    color: ${(props) => props.theme.baseTitle};
  }

  a {
    ${fonts.link};
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    text-transform: uppercase;
  }
`

export const ProfileSubtitle = styled.div`
  margin-top: 0.5rem;
`

export const ProfileInfo = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.baseProfile};
  border-radius: 10px;
  margin-top: 1.5rem;
  gap: 1.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  span:first-child > svg {
    border-radius: 999px;
    color: ${(props) => props.theme.baseProfile};
    background-color: ${(props) => props.theme.baseLabel};
  }

  span > svg {
    color: ${(props) => props.theme.baseLabel};
    background-color: ${(props) => props.theme.baseProfile};
  }
`
