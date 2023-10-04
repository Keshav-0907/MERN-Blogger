import CardList from '@/components/CardList'
import React from 'react'

const page = () => {
    return (
        <div>
            <div class='bg-red-200 text-3xl font-semibold text-center'>
                Web Development Blogs
            </div>

            <div>
                <CardList />
            </div>
        </div>
    )
}

export default page