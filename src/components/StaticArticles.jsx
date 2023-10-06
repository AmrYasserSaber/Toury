import React from "react";
import first from "../static/articles/first static article photo.png";
import second from "../static/articles/second static article photo.png";
import logo from "@/static/logo.svg";
import Image from "next/image";

function Photos() {
    return (
        <div>
            {/* Start paragraphs section */}
            <div className="container mx-auto pt-5">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-6/12">
                        <Image className="w-[160px] h-[160px]" src={first}/>
                    </div>
                    <div className="w-full md:w-6/12 mt-5 md:mt-0">
                        <h3 className="text-3xl font-semibold">
                            Find and learn about your destination
                        </h3>
                        <p className="text-base">
                            Here you can find all you want about your destination and the
                            space in general. Space tourism has become easier and more
                            enjoyable. Sign up now and be a future traveler. Here you can
                            find all you want about your destination and the space in
                            general. Space tourism has become easier and more enjoyable.
                            Sign up now and be a future traveler.{" "}
                            <span className="text-orange-500 hover:underline cursor-pointer">
                Read More
              </span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto pt-5">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-6/12 mt-5 md:mt-0">
                        <h3 className="text-3xl font-semibold">
                            Be more aware about space and astronomy.
                        </h3>
                        <p className="text-base">
                            Here you can find all you want about your destination and the
                            space in general. Space tourism has become easier and more
                            enjoyable. Sign up now and be a future traveler. Here you can
                            find all you want about your destination and the space in
                            general. Space tourism has become easier and more enjoyable.
                            Sign up now and be a future traveler. Here you can find all
                            you want about your destination and the space in general. The
                            space.{" "}
                            <span className="text-orange-500 hover:underline cursor-pointer">
                Read More
              </span>
                        </p>
                    </div>
                    <div className="w-full md:w-6/12">
                        <Image className="w-[160px] h-[160px]" src={second}/>
                    </div>
                </div>
            </div>
            {/* End paragraphs section */}
        </div>
    );
}

export default Photos;