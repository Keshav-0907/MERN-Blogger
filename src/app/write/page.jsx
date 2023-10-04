"use client"

import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const page = () => {
    const [status, setstatus] = useState(false)
    const [value, setValue] = useState('');



    const handlestatus = () => {
        setstatus(!status)
    }

    return (
        <div class='mx-10 my-5'>
            <div>
                <div class='text-3xl font-bold'>
                    Write Here.....
                </div>

                <div class='my-5 flex items-center'>
                    <button onClick={handlestatus}>
                        <img width={50} src='./plus.png' alt='err' />
                    </button>

                    {
                        status ? (
                            <div class='flex space-x-5 ml-10'>
                                <button>
                                    <img width={50} src='./img-icom.png' alt='err' />
                                </button>
                                <button>
                                    <img width={50} src='./cloud.png' alt='err' />
                                </button>
                            </div>
                        )
                            :
                            (null)
                    }
                </div>
                <div>
                    <input type='text' placeholder='Title'/>
                </div>

                <div>
                    <ReactQuill theme="snow" value={value} onChange={setValue} placeholder='Enter here.....' />
                </div>
            </div>
        </div>
    )
}

export default page