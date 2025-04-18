import React from 'react'

const Heading = ({ heading, text }) => {
    return (
        <>
            <h1 className="mb-4 md:min-w-max text-4xl font-medium leading-none  tracking-tight text-gray-900 md:text-5xl lg:text-3xl"><mark className=" text-white bg-gradient-to-r from-purple-400 to-blue-500 rounded ">{heading}</mark></h1>
            <p className="text-lg me-auto font-thin text-gray-500 lg:text-lg md:w-[40%] w-full ">{text}</p>
        </>
    )
}

export default Heading