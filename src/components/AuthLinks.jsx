import Link from 'next/link'
import React from 'react'

const AuthLinks = () => {
  const LoginStatus = false
  return (
    <div> 
      { LoginStatus ? (<div class="space-x-3">
        <Link class="hover:underline" href='/write'> Write </Link>
        <Link class="hover:underline" href=''> LogOut </Link>
        </div>) : 
      (<Link class="hover:underline" href='/login'> Login </Link>
      )}
    </div>
  )
}

export default AuthLinks