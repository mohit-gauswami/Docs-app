import React, { useRef, useState } from 'react'
import Card from './Card'

function Foreground() {

    const ref = useRef(null);

    const data = [
        {
            desc: "Fast Click For Download The Application",
            filesize: ".9mb",
            close: false,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
        },

        {
            desc: "Upload Your File Here To Click On Upload Button",
            filesize: ".9mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Upload", tagColor: "blue" },
        },

        {
            desc: "Your File Has Been Successfully Uploaded",
            filesize: ".9mb",
            close: true,
            tag: { isOpen: false, tagTitle: "Upload", tagColor: "green" },
        },
    ];
    // useState()
    return (
        <>
            <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
                {data.map((item, index) => (
                    <Card data={item} reference={ref} />
                ))}
            </div>
        </>
    )
}

export default Foreground