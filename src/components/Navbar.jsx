import React from 'react'

const Navbar = () => {
    return (
        <nav className='container flex flex-row justify-between items-center px-20 py-4 min-w-full'>
            <div className="logo text-white font-extrabold text-5xl">
                PixelsCo.
            </div>
            <div className='img'>
                <lord-icon
                    src="https://cdn.lordicon.com/mqdkoaef.json"
                    trigger="hover"
                    colors="primary:#ffffff"
                    style={{"width":"50px","height":"50px"}}>
                </lord-icon>
            </div>
        </nav>
    )
}

export default Navbar
