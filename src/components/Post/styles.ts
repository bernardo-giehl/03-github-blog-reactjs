import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { fonts } from '../../styles/fonts'

export const PostCard = styled(Link)`
  width: 26rem;
  min-height: 15rem;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: ${(props) => props.theme.basePost};
  padding: 2rem;
  gap: 1rem;
  border: 2px solid transparent;

  &:hover {
    cursor: pointer;
    border: 2px solid ${(props) => props.theme.baseLabel};
    transition: 1s;
  }
`

export const PostTitle = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 1rem;

  h3 {
    ${fonts.titleM};
    color: ${(props) => props.theme.baseTitle};
  }

  time {
    margin-top: 0.375rem;
    white-space: nowrap;
    ${fonts.textS};
    color: ${(props) => props.theme.baseSpan};
  }
`

export const PostDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.25rem;
  ${fonts.textM};
  color: ${(props) => props.theme.baseText};

  blockquote {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: wrap;
  }
`
