"use server"
import { handleGithubLogin } from '@/lib/actions';
import { auth, signIn } from '@/lib/auth'
import React from 'react'

const LoginPage = async () => {
  const session = await auth();
  console.log("yo hai kya re ",session)



  return (
    <div>
      <form action={handleGithubLogin}>
      <button>Github Login</button>
      </form>
    </div>
  )
}

export default LoginPage
