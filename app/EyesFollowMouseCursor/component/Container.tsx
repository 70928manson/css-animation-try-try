"use client";

import React, { useRef } from 'react';
import Face from './Face';

const Container: React.FC = () => {
    const leftEyeRef = useRef<HTMLDivElement>(null);
    const rightEyeRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        refChange(e, leftEyeRef);
        refChange(e, rightEyeRef);
    }

    const refChange = (e: React.MouseEvent, ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            const x = (ref.current.getBoundingClientRect().left) + (ref.current.clientWidth / 2);
            const y = (ref.current.getBoundingClientRect().top) + (ref.current.clientHeight / 2);
            const radian = Math.atan2(e.pageX - x, e.pageY - y);
            const rot = (radian * (180 / Math.PI)) * -1 + 270;
            ref.current.style.transform = `rotate(${rot}deg)`;
        }
    }

    return (
        <div onMouseMove={(e) => handleMouseMove(e)} className="flex justify-center items-center min-h-[100vh] bg-[#5d3800]">
            <Face leftEyeRef={leftEyeRef} rightEyeRef={rightEyeRef} />
        </div>
    );
};

export default Container;
