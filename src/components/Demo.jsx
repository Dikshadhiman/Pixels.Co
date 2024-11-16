import React from 'react'

const Demo = () => {
    return (
        <div className='demo max-w-[80%] border border-transparent rounded-3xl m-auto p-5 flex flex-col md:flex-row justify-between lg:w-[40%] md:w-[50%] sm:w-[50%] my-20' style={{"background":"linear-gradient(45deg, #4b4c4e, #26292f)"}}>
            <div className="content flex flex-col">
                <div className="text text-white text-4xl md:text-5xl font-extrabold p-10 text-center">
                    New Vintage Collection
                </div>
                <button className='border rounded-full text-white w-fit px-4 py-2 m-auto text-xl font-bold'>Explore now</button>
            </div>
            <img className='justify-center w-[180px] mx-auto my-8 md:w-[150px]' src="https://www.pngmart.com/files/6/DSLR-Camera-PNG-Photo.png" alt="" />
        </div>
    )
}

export default Demo
