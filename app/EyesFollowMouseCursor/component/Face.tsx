"use client";

import React, { useRef } from 'react';

interface FaceProps {
    leftEyeRef: React.RefObject<HTMLDivElement>;
    rightEyeRef: React.RefObject<HTMLDivElement>;
}

const Face: React.FC<FaceProps> = ({
    leftEyeRef,
    rightEyeRef
}) => {

    return (
        <>
            {/* TODO: tailwind 寫 hover:css1, hover:css2, hover:css3 好麻煩, 有辦法做個套件變成 hover:(css1, css2, ...) 嘛 => windcss有耶 */}
            <div
                className="relative w-[300px] h-[300px] rounded-[50%] bg-[#ffcd00] flex justify-center items-center
           before:content-[''] before:absolute before:top-[180px] before:w-[150px] before:h-[70px] before:bg-[#b57700] before:rounded-b-[70px]
           before:hover:top-[210px] before:hover:width-[210px] before:hover:h-[20px] before:hover:bg-[#b57700] before:hover:rounded-b-[0px]
           before:duration-300
         "
            >
                <div className="relative top-[-40px] flex">
                    <div
                        ref={leftEyeRef}
                        className="relative w-[80px] h-[80px] block bg-[#fff] my-0 mx-[15px] rounded-[50%]
              before:content-[''] before:absolute before:top-[50%] before:left-[25px] 
              before:translate-x-[-50%] before:translate-y-[-50%] before:w-[40px] before:h-[40px] 
              before:bg-[#333] before:rounded-[50%]
            "
                    ></div>
                    <div
                        ref={rightEyeRef}
                        className="relative w-[80px] h-[80px] block bg-[#fff] my-0 mx-[15px] rounded-[50%]
              before:content-[''] before:absolute before:top-[50%] before:left-[25px] 
              before:translate-x-[-50%] before:translate-y-[-50%] before:w-[40px] before:h-[40px] 
              before:bg-[#333] before:rounded-[50%]
            "
                    ></div>
                </div>
            </div>
        </>
    );
};

export default Face;