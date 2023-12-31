'use client'
import React, { useState } from 'react'
import {motion} from 'framer-motion'
export default function Intro() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    
const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">Your all-in-1 e-commerce fulfillment platform</h2>
                    <p className="mb-4">We understand the significance of smooth business operations. We do this by working with only the most premium and exclusive Chinese suppliers. Our comprehensive platform offers real-time visibility into order statuses, trackings, disputes, costs, and other vital aspects of your e-commerce business. Stay impeccably organized and in control, enabling your business to thrive with ease.</p>
                    {/* <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p> */}
                        <button className="bg-[#8000ff] text-white text-base px-3 py-3 my-5 w-48 rounded-full ">Get Started</button>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <motion.div
                        initial={false}
                        animate={
                            isLoaded && isInView
                                ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                                : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                        }
                        transition={{ duration: 1, delay: 1 }}
                        viewport={{ once: true }}
                        onViewportEnter={() => setIsInView(true)}
                    >
                        <img onLoad={() => setIsLoaded(true)} className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
                    </motion.div>

                    <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
                </div>
            </div>
        </section>
    )
}
