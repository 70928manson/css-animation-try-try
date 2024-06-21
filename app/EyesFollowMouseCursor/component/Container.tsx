"use client";

import React, { useRef } from 'react'

type ContainerProps = {
    children?: React.ReactNode;
    handleMouseMove: (e: React.MouseEvent) => void;
};

const Container: React.FC<ContainerProps> = ({ 
    children,
    handleMouseMove
}) => {
    return (
        <div onMouseMove={(e) => handleMouseMove(e)} className="flex justify-center items-center min-h-[100vh] bg-[#5d3800]">
            {children}
        </div>
    );
};

export default Container;
