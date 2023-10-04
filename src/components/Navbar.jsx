import React from 'react'
import AuthLinks from './AuthLinks';
import Link from 'next/link';

const Navbar = () => {
  return (
    <>
      <div class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm  sm:text-center dark:text-white bg-gray-700 p-2 rounded-xl hover:bg-gray-600 hover:cursor-pointer">
            <Link class='text-lg font-bold' href='/'> Blog IT ✍️ </Link>
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 space-x-8">
            <li>
              <Link class="hover:underline" href='/'>Homepage</Link>
            </li>
            <li>
              <Link class="hover:underline" href='/'>Contact</Link>
            </li>
            <li>
              <Link class="hover:underline" href='/'>About Us</Link>
            </li>
            <li>
              <Link href="#" > <AuthLinks /></Link>
            </li>
          </ul>
        </div>
      </div>
    </>

  )
}

export default Navbar;