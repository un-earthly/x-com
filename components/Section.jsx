import React from 'react'

export default function Section() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-cover object-center rounded" alt="hero" src="https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Your success is our priority</h1>
                    <p className="mb-8">We know that an e-commerce business consists of many different aspects. Our number one priority is creating a seamless customer experience with our fulfillment service. However, a stable backend of the business is needed to succeed in this branch. Let us help you with Facebook/Tiktok/Pinterest ads, ready-to-go Customer Service teams, VAT fixes (EU), Payment & Hold solutions, and more!
</p>
                    <div className="flex w-full md:justify-start justify-center items-end">

                        <button className="bg-[#8000ff] text-white text-base px-3 py-3 my-5 w-48 rounded-full ">Get Started</button>
                    </div>

                </div>
            </div>
        </section>
    )
}
