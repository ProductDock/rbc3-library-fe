import { createContext, useContext, useState, ReactNode } from 'react'

export interface User {
  access_token: string
}

export interface Profile {
  name: string
  email: string
  picture: string
  id: string
}

interface UserContextProps {
  user: User | undefined
  profile: Profile | undefined
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>
  setProfile: React.Dispatch<React.SetStateAction<Profile | undefined>>
}

const UserContext = createContext<UserContextProps | undefined>(undefined)

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | undefined>(undefined)
  const [profile, setProfile] = useState<Profile | undefined>(undefined)

  return (
    <UserContext.Provider value={{ user, profile, setUser, setProfile }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider')
  }
  return context
}
