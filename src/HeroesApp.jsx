import React from 'react'
import { AuthProvider } from './auth/context/AuthContext'
import { AppRouter } from './router'

export const HeroesApp = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}
