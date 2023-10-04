import React from 'react'
import Pagination from './Pagination'
import Image from 'next/image'
import postImg from '../../public/post1.jpg'

const CardList = () => {
  return (
    <>
      <div class="text-2xl font-extrabold my-5">
        Recent Blogs
      </div>
      <div class=' h-fit w-fit flex '>


        <div class=' flex w-full h-fit bg-gray-200 rounded-xl hover:bg-gray-300 m-5 flex-col'>

          <div class='flex'>
            <Image class='rounded-md' src={postImg} alt='err' />
          </div>

          <div class='flex align-middle p-5'>
            <div class='flex flex-col'>

              <div class='flex justify-between align-middle '>
                <div class=' flex items-center text-gray-500 text-sm'>
                  11.02.2023
                </div>

                <div class=' flex items-center text-gray-500'>
                  Keshav Malik
                </div>
              </div>

              <div class='font-bold text-xl'>
                Lorem ipsum is placeholder text commonly used in the graphic
              </div>

              <div class='text-sm text-gray-400 my-5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </div>

              <div class=''>
                <button class='bg-white text-black rounded-xl p-3'> Read Now </button>
              </div>
            </div>
          </div>

        </div>

        <div class=' flex w-full h-fit bg-gray-200 rounded-xl hover:bg-gray-300 m-5 flex-col'>

          <div class='flex'>
            <Image class='rounded-md' src={postImg} alt='err' />
          </div>

          <div class='flex align-middle p-5'>
            <div class='flex flex-col'>

              <div class='flex justify-between align-middle '>
                <div class=' flex items-center'>
                  11.02.2023
                </div>


                <div class=' flex items-center text-gray-500'>
                  Keshav Malik
                </div>
              </div>

              <div class='font-bold text-xl'>
                Lorem ipsum is placeholder text commonly used in the graphic
              </div>

              <div class='text-sm text-gray-400 my-5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </div>

              <div class=''>
                <button class='bg-white text-black rounded-xl p-3'> Read Now </button>
              </div>
            </div>
          </div>

        </div>

        <div class=' flex w-full h-fit bg-gray-200 rounded-xl hover:bg-gray-300 m-5 flex-col'>

          <div class='flex'>
            <Image class='rounded-md' src={postImg} alt='err' />
          </div>

          <div class='flex align-middle p-5'>
            <div class='flex flex-col'>

              <div class='flex justify-between align-middle '>
                <div class=' flex items-center'>
                  11.02.2023
                </div>


                <div class=' flex items-center text-gray-500'>
                  Keshav Malik
                </div>
              </div>

              <div class='font-bold text-xl'>
                Lorem ipsum is placeholder text commonly used in the graphic
              </div>

              <div class='text-sm text-gray-400 my-5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </div>

              <div class=''>
                <button class='bg-white text-black rounded-xl p-3'> Read Now </button>
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* <Pagination/> */}
    </>
  )
}

export default CardList