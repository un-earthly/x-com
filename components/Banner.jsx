import { Avatar } from 'flowbite-react'
import React from 'react'
import Button from './ui/Button'

export default function Banner() {
    return (
        <div className="w-full bg-center bg-cover bg-gradient-to-br from-[#8000ff] to-[#de00ff]" >
            <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 py-12">
                <div className="text-center">
                    <div className="container px-4 mx-auto">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="flex items-center justify-center">
                                <Avatar.Group className='-space-x-2'>
                                    <Avatar img="https://randomuser.me/api/portraits/women/83.jpg" rounded stacked />
                                    <Avatar img="https://randomuser.me/api/portraits/women/23.jpg" rounded stacked />
                                    <Avatar img="https://randomuser.me/api/portraits/women/53.jpg" rounded stacked />
                                    <Avatar img="https://randomuser.me/api/portraits/women/26.jpg" rounded stacked />
                                </Avatar.Group>
                            </div>
                            <div className='flex items-center justify-center bg-teal-50/70 mx-auto my-5 rounded-full w-56 h-10'>
                                Lorem ipsum dolor sit
                            </div>
                            <h2 className="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100">Lorem ipsum dolor .</h2>
                            <p className="max-w-3xl mx-auto mb-10 text-lg text-gray-300">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum sit cum iure qui, nostrum at sapiente ducimus.
                            </p>
                            <div className="rounded-full border-2 h-10 w-10 mx-auto mt-2 mb-10"></div>
                            <Button bg="bg-white text-black hover:bg-gray-100">Get Started</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

