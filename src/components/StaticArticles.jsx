import React from "react";
import first from "../static/articles/first static article photo.png";
import second from "../static/articles/second static article photo.png";
import logo from "@/static/logo.svg";
import Image from "next/image";

function Photos() {
    return (
        <div className="my-[128px]">
            {/* Start paragraphs section */}
            <div className="container mx-auto w-full">
                <div className="flex flex-wrap w-full justify-between">
                        <Image className="w-[585px] h-[551px]" src={first}/>
                    <div className="w-full mt-5 md:mt-0 max-w-[598px]">
                        <h3 className="text-[50px] font-semibold text-black leading-[60px] mb-4">
                            Find and learn about your destination
                        </h3>
                        <p className="text-2xl text-black leading-[40.8px]">
                            Here you can find all you want about your destination and the
                            space in general. Space tourism has become easier and more
                            enjoyable. Sign up now and be a future traveler. Here you can
                            find all you want about your destination and the space in
                            general. Space tourism has become easier and more enjoyable.
                            Sign up now and be a future traveler.{" "}
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto mt-[110px] w-full">
                <div className="flex flex-wrap w-full justify-between">
                    <div className="w-full  mt-5 md:mt-0 max-w-[598px]">
                        <h3 className="text-[50px] font-semibold text-black leading-[60px] mb-4">
                            Be more aware about space and astronomy.
                        </h3>
                        <p className="text-2xl text-black leading-[40.8px]">
                            Here you can find all you want about your destination and the
                            space in general. Space tourism has become easier and more
                            enjoyable. Sign up now and be a future traveler. Here you can
                            find all you want about your destination and the space in
                            general. Space tourism has become easier and more enjoyable.
                            Sign up now and be a future traveler. Here you can find all
                            you want about your destination and the space in general. The
                            space.{" "}
                        </p>
                    </div>
                    <Image className="w-[585px] h-[551px]" src={second}/>
                </div>
            </div>
            {/* End paragraphs section */}
        </div>
    );
}

export default Photos;