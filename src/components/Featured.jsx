import React from 'react'
import postImg from '../../public/p1.jpeg'
import Image from 'next/image'

const Featured = () => {
  return (
    <div class='mx-5'>
      <div class='flex w-full justify-center text-6xl my-10 flex-col'>
        <div class='font-bold p-2'> Hey, Keshav Malik here! Discover</div>
        <div class='font-extralight p-2'> my stories and creative ideas  </div>
      </div>

      <div class='flex w-fit bg-purple-200 p-2 rounded-xl hover:bg-purple-100'>
        <div class='w-1/2 flex justify-center'>
          <Image class='rounded-md' src={postImg} alt='err' />
        </div>

        <div class='flex align-middle'>
          <div class='flex flex-col '>
            <div class='font-bold text-3xl m-2'>
              Lorem ipsum is placeholder text commonly used in the graphic
            </div>

            <div class='text-sm m-2 text-gray-400'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>

            <div class='m-2 '>
              <button class='bg-white p-2 text-black rounded-xl'> Read Now </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured