import styled from 'styled-components'

import { fonts } from '../../styles/fonts'

export const PostBlog = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem auto;
  flex-direction: column;
`

export const PostCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: -7rem;
  padding: 2rem;
  background-color: ${(props) => props.theme.baseProfile};
  border-radius: 10px;
  filter: drop-shadow(0 0 0.75rem #00000028);
`

export const PostNavegation = styled.div`
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

export const PostTitle = styled.h2`
  ${fonts.titleL};
  color: ${(props) => props.theme.baseTitle};
  margin-top: 1.25rem;
`

export const PostInfo = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.baseProfile};
  border-radius: 10px;
  margin-top: 0.5rem;
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

export const PostDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  word-break: break-word;
  padding: 2.5rem 2rem 2.5rem 2rem;
  gap: 1.5rem;

  img {
    max-width: 100%;
  }

  > blockquote {
    max-width: 100%;
    word-break: break-word;
  }

  ul {
    margin-left: 2rem;
  }

  ol {
    margin-left: 2rem;
  }

  li:has(input) {
    list-style: none;
  }

  blockquote {
    padding-left: 0.5rem;
    border-left: 4px solid ${(props) => props.theme.baseSpan};
    color: ${(props) => props.theme.baseSpan};
  }

  pre:has(code) {
    padding: 1rem;
    background-color: ${(props) => props.theme.basePost};
  }

  th {
    background-color: ${(props) => props.theme.basePost};
  }

  tr:nth-child(even) {
    background-color: ${(props) => props.theme.basePost};
  }

  tr:nth-child(odd) {
  }
`
