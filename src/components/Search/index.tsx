import { useContext, useEffect, useState } from 'react'

import { PostContext } from '../../context/PostsContext'

import { SearchTitle, SearchPost } from './styles'

export function SearchComp() {
  const { posts, fetchPosts } = useContext(PostContext)

  const [inputValue, setInputValue] = useState('')
  const [auxInputValue, setAuxInputValue] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  /* Search clear */
  useEffect(() => {
    setAuxInputValue('force_clear')
  }, [])

  /* debounce */
  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (inputValue !== auxInputValue) {
        await fetchPosts(inputValue)
        setAuxInputValue(inputValue)
      }
    }, 500)

    return () => clearTimeout(timeoutId)
  }, [inputValue, fetchPosts, auxInputValue, setAuxInputValue])

  return (
    <>
      <SearchTitle>
        <h3>Publicações</h3>
        <span>{posts.length} publicações</span>
      </SearchTitle>
      <SearchPost
        type="text"
        placeholder="Buscar conteúdo"
        value={inputValue}
        onChange={handleInputChange}
      />
    </>
  )
}
