import { useContext } from 'react'
import { ArrowSquareOut, Buildings, GithubLogo, Users } from 'phosphor-react'

import { ProfileContext } from '../../context/ProfileContext'

import userAvatar from '../../assets/userAvatar.svg'

import {
  ProfileCard,
  ProfileDescription,
  ProfileTitle,
  ProfileSubtitle,
  ProfileInfo,
} from './styles'

export function ProfileComp() {
  const { profile } = useContext(ProfileContext)

  if (!profile?.id) {
    return (
      <ProfileCard>
        <img src={userAvatar} alt="" />
        <ProfileDescription>
          <ProfileTitle>
            <h2>Perfil não encontrado</h2>
          </ProfileTitle>
        </ProfileDescription>
      </ProfileCard>
    )
  }

  return (
    <ProfileCard>
      <img src={profile.avatar_url} alt="" />
      <ProfileDescription>
        <ProfileTitle>
          <h2>{profile.name}</h2>
          <a href={profile.html_url}>
            <span>Github</span> <ArrowSquareOut size={14} weight="bold" />
          </a>
        </ProfileTitle>
        <ProfileSubtitle>{profile.bio}</ProfileSubtitle>
        <ProfileInfo>
          <span>
            <GithubLogo size={16} weight="fill" /> {profile.login}
          </span>
          {profile.company && (
            <span>
              <Buildings size={18} weight="fill" /> {profile.company}
            </span>
          )}
          <span>
            <Users size={18} weight="fill" /> {profile.followers} seguidores
          </span>
        </ProfileInfo>
      </ProfileDescription>
    </ProfileCard>
  )
}
