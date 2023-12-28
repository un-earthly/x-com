import React from 'react'

export default function ReverseSection() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row-reverse flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-cover object-center rounded" alt="hero" src="https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Lorem ipsum dolor sit amet.</h1>
                    <p className="mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptatem  molestiae. Laborum numquam nobis commodi neque est laboriosam nesciunt blanditiis eos, sequi quaerat? adipisicing elit. Dolorum ducimus quos perspiciatis tempora odio?</p>
                    <div className="flex w-full md:justify-start justify-center items-end">

                        <button className="bg-[#8000ff] text-white text-base px-3 py-3 my-5 w-48 rounded-full ">Get Started</button>
                    </div>

                </div>
            </div>
        </section>
    )
}
