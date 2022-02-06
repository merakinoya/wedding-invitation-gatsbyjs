import React from "react"

const bgImage = {
    background: "linear-gradient(90deg, rgba(0, 0, 0, 0.64) 0%, rgba(0, 0, 0, 0.40) 36.63%, rgba(0, 0, 0, 0) 50%), url(https://images.pexels.com/photos/3347411/pexels-photo-3347411.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)",
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
};

function HeroImageTitleCenter(props) {
    return (
        <header className="relative top-0 left-0 w-full h-screen flex justify-center items-center py-12 md:py-48" style={bgImage}>
            <div className="inline-block align-middle my-auto md:my-auto">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
                    <div className="text-center lg:text-center space-y-16">

                        <h3 className="text-base text-gray-300 font-semibold tracking-wide">The Wedding of</h3>
                        <div className="mb-0 md:mb-9 space-y-8">
                            <h1 className="text-4xl font-bold font-playfairdisplay text-white sm:text-7xl capitalize">
                                Ovira Syifa Azahra
                            </h1>
                            <p className="font-bold font-playfairdisplay text-white text-4xl sm:text-6xl capitalize">
                                &
                            </p>
                            <h1 className="text-4xl font-bold font-playfairdisplay text-white sm:text-7xl capitalize">
                                Bisma Kharisma
                            </h1>
                        </div>

                        <a
                            href="#"
                            className="inline-flex cursor-pointer items-center justify-center px-3 py-2 md:px-5 md:py-3 border border-transparent text-base font-medium rounded-full text-black bg-white hover:bg-gray-300">
                            Read Invitation
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}



export default function HeroImageTitleLeft(props) {
    return (
        <header className="relative w-full h-screen flex justify-center md:justify-start items-center py-12 md:py-40 md:px-36" style={bgImage}>
            <div className="inline-block align-middle my-auto md:my-auto">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">


                    <div className="text-center lg:text-left space-y-16">
                        <h3 className="text-lg text-gray-300 font-semibold tracking-wide">The Wedding of</h3>
                        <div className="mb-0 md:mb-9 space-y-8">
                            <h1 className="text-4xl font-bold font-playfairdisplay text-white sm:text-7xl capitalize">
                                Ovira Syifa Azahra
                            </h1>
                            <p className="font-bold font-playfairdisplay text-white text-4xl sm:text-6xl capitalize">
                                &
                            </p>
                            <h1 className="text-4xl font-bold font-playfairdisplay text-white sm:text-7xl capitalize">
                                Bisma Kharisma
                            </h1>
                        </div>
                        <a
                            href="#"
                            className="inline-flex cursor-pointer items-center justify-center px-5 py-2 md:px-6 md:py-3 border border-transparent text-base font-medium rounded-full text-black bg-white hover:bg-gray-300">
                            Read Invitation
                        </a>
                    </div>


                </div>
            </div>
        </header>
    )
}