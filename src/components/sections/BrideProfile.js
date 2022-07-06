import React from "react"


const brideprofile = [
    {
        name: 'Ovira Syifa Azahra',
        photo_profile: 'https://source.unsplash.com/QZRAaYfmvA8/320x320',
        parent_one: 'Nana Supriatna',
        parent_two: 'Esih',
    },
    {
        name: 'Bisma Kharisma',
        photo_profile: 'https://source.unsplash.com/BFxyTaw3PsM/320x320',
        parent_one: 'Saefudin',
        parent_two: 'Nurhayati',
    },
]



function BrideProfile() {
    return (
        <section className="flex relative sm:justify-around gap-6 sm:mx-6 items-center" >
            {
                brideprofile.map((data) => (

                    <figure className="text-center space-y-4 md:mx-24">
                        <img className="w-32 h-32 rounded-full mx-auto" srcSet={data.photo_profile} alt={data.name} />
                        <figcaption className="space-y-2 md:space-y-4">
                            <p className="text-lg md:text-3xl font-semibold capitalize">
                                {data.name}
                            </p>
                            <p className="text-base md:text-xl text-gray-500">
                                Putri dari Bapak {data.parent_one} & Ibu {data.parent_two}
                            </p>
                        </figcaption>
                    </figure>

                ))
            }

            < div className="absolute text-2xl sm:text-4xl font-bold font-playfairdisplay capitalize" >
                &
            </div >

        </section >

    )
}

export default BrideProfile;