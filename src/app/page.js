
import CardList from '@/components/CardList'
import CategoryList from '@/components/CategoryList'
import Featured from '@/components/Featured'
import Menu from '@/components/Menu'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Featured />
      <CategoryList />
      <div class='flex w-full my-10'>
        <div class=''>
          <CardList />
        </div>
{/* 
        <div class='w-2/6'>
          <Menu />
        </div> */}
      </div>
    </div>
  )
}
