import React from 'react'

export default function Button({ children, bg }) {
    return (
        <button className={`inline-flex duration-300 text-white ${bg ? bg : "bg-[#8000ff]"} border-0 py-2 px-6 focus:outline-none rounded-full text-lg`}>{children}</button>
    )
}
