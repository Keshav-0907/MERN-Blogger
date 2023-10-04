import React from 'react'

const Login = () => {
  return (
    <div class='w-full h-[80vh] flex justify-center items-center'>
      <div class='w-1/2 h-1/2 bg-gray-100 rounded-2xl'>
        <div class='flex justify-center items-center h-full' >
          <div class='flex flex-col space-y-20'>
            <div class='bg-red-400 p-5 rounded-xl hover:cursor-pointer'>
              Login With Google
            </div>
            <div class='bg-black text-white p-5 rounded-xl hover:cursor-pointer'>
              Login With Github
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Login