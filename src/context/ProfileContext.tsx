import { ReactNode, createContext, useEffect, useState } from 'react'

import { api } from '../lib/axios'

export interface ProfileType {
  id: number
  login: string
  name: string
  bio: string
  avatar_url: string
  followers: number
  following: number
  html_url: string
  company: string
  created_at: Date
}

interface ProfileContextType {
  profile: ProfileType
}

interface ProfileContextProviderProps {
  children: ReactNode
}

export const ProfileContext = createContext({} as ProfileContextType)

export function ProfileContextProvider({
  children,
}: ProfileContextProviderProps) {
  const [profile, setProfile] = useState<ProfileType>({
    id: 0,
    login: '',
    name: '',
    bio: '',
    avatar_url: '',
    followers: 0,
    following: 0,
    html_url: '',
    company: '',
    created_at: new Date(),
  })

  async function fetchProfile() {
    const response = await api.get('users/bernardo-giehl')

    setProfile(response.data)
  }

  useEffect(() => {
    fetchProfile()
  }, [])

  return (
    <ProfileContext.Provider value={{ profile }}>
      {children}
    </ProfileContext.Provider>
  )
}
