import React from 'react'

const Footer = () => {
    return (
        <div className='footer h-[10vh] flex justify-around items-center border border-transparent rounded-t-[40%]' style={{ "background-color":"#26292f"}}>
            <div className="home">
                <lord-icon
                    src="https://cdn.lordicon.com/cnpvyndp.json"
                    trigger="hover"
                    colors="primary:#ffffff"
                    style={{ "width": "40px", "height": "40px" }}>
                </lord-icon>
            </div>
            <div className="fav">
                <lord-icon
                    src="https://cdn.lordicon.com/prjooket.json"
                    trigger="hover"
                    colors="primary:#ffffff"
                    style={{ "width": "40px", "height": "40px" }}>
                </lord-icon>
            </div>
            <div className="bell">
                <lord-icon
                    src="https://cdn.lordicon.com/vspbqszr.json"
                    trigger="hover"
                    colors="primary:#ffffff"
                    style={{ "width": "40px", "height": "40px" }}>
                </lord-icon>
            </div>
            <div className="profile">
                <lord-icon
                    src="https://cdn.lordicon.com/kthelypq.json"
                    trigger="hover"
                    colors="primary:#ffffff"
                    style={{ "width": "40px", "height": "40px" }}>
                </lord-icon>
            </div>
        </div>
    )
}

export default Footer
