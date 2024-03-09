import styled from 'styled-components'

import { fonts } from '../../styles/fonts'

export const SearchTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4.5rem;

  h3 {
    ${fonts.titleS};
    color: ${(props) => props.theme.baseSubtitle};
  }

  span {
    ${fonts.textS};
    color: ${(props) => props.theme.baseSpan};
  }
`

export const SearchPost = styled.input`
  width: 100%;
  height: 3.125rem;
  padding: 0.75rem 1rem;
  display: flex;

  ${fonts.textM};
  color: ${(props) => props.theme.baseLabel};
  background-color: ${(props) => props.theme.baseInput};
  border: 1px solid ${(props) => props.theme.baseBorder};
  border-radius: 6px;
  margin-top: 0.75rem;

  &::placeholder {
    color: ${(props) => props.theme.baseLabel};
  }
`
