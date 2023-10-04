import React from 'react'
import Image from 'next/image'

const Categories = [
  {
    "id": 1,
    "name": "Web Development",
    "href": "/",
    "img": "/webDev.png",
    "color": "bg-red-200"
  },
  {
    "id": 2,
    "name": "Open Source",
    "href": "/",
    "img": "/github.png",
    "color": "bg-blue-200"
  },
  {
    "id": 3,
    "name": "Android Development",
    "href": "/",
    "img": "/android.png",
    "color": "bg-green-200"
  },
  {
    "id": 3,
    "name": "Database",
    "href": "/",
    "img": "/database.png",
    "color": "bg-orange-200"
  },
]

const CategoryList = () => {
  return (
    <div class="my-10">
      <div class="text-2xl font-extrabold">
        Trending Categories
      </div>

      <div class='flex justify-between p-1 my-5'>
        {Categories.map((data) => {
          return (
            <div key={data.id} class={`p-1 ${data.color} rounded-2xl hover:cursor-pointer min-w-[250px]`}>
              <div class='flex p-2 min-w-6 align-middle rounded-2xl '>
                  <div class=' p-3'>
                    <Image  class='' src={`${data.img}`} width='50' height='50' alt='err' />
                  </div>

                  <div  class='flex justify-center items-center'>
                    {data.name}
                  </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CategoryList