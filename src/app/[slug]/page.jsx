import React from "react";
import Image from "next/image";

const SinglePage = () => {
    return (
        <div class='mx-10'>
            <div class='flex w-full'>
                <div class='w-1/2 flex justify-around flex-col '>
                    <div class='font-bold text-5xl'>
                        Lorem ipsum is placeholder text commonly used in the graphic
                    </div>
                    <div class='flex justify-between'>
                        <div class='flex '>
                            <div>
                                <Image src='/Author.png' width={50} height={50} alt="err" />
                            </div>

                            <div class='text-lg font-semibold flex items-center'>
                                Keshav Malik
                            </div>

                        </div>

                        <div class='mr-10'>
                            11.03.2033
                        </div>
                    </div>
                </div>

                <div class='w-1/2'>
                    <Image class='rounded-2xl' width={500} height={200} src='/post1.jpg' alt='err' />
                </div>
            </div>

            <div class='my-10'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
        </div>
    )
}

export default SinglePage;