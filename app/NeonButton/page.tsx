import React from 'react'

const NeonButton = () => {
    return (
        <div className="flex justify-center items-center min-h-[100vh] bg-[#031321] font-[consolas]">
            <a
                href="#"
                className="
                relative inline-block py-[15px] px-[30px] text-[#2196f3] uppercase tracking-[4px] no-underline
                text-2xl overflow-hidden duration-200
                
                [&>span]:absolute [&>span]:block
                [&>span:nth-child(1)]:top-0 [&>span:nth-child(1)]:left-[-100%] [&>span:nth-child(1)]:w-full [&>span:nth-child(1)]:h-[2px] [&>span:nth-child(1)]:bg-[linear-gradient(90deg,transparent,#2196f3)]
                [&:hover>span:nth-child(1)]:left-[100%] [&:hover>span:nth-child(1)]:duration-1000
                
                [&>span:nth-child(3)]:bottom-0 [&>span:nth-child(3)]:right-[-100%] [&>span:nth-child(3)]:w-full [&>span:nth-child(3)]:h-[2px] [&>span:nth-child(3)]:bg-[linear-gradient(270deg,transparent,#2196f3)]
                [&:hover>span:nth-child(3)]:right-[100%] [&:hover>span:nth-child(3)]:duration-1000 [&:hover>span:nth-child(3)]:delay-[0.5s]

                [&>span:nth-child(2)]:top-[-100%] [&>span:nth-child(2)]:right-0 [&>span:nth-child(2)]:w-[2px] [&>span:nth-child(2)]:h-full [&>span:nth-child(2)]:bg-[linear-gradient(180deg,transparent,#2196f3)]
                [&:hover>span:nth-child(2)]:top-[100%] [&:hover>span:nth-child(2)]:duration-1000 [&:hover>span:nth-child(2)]:delay-[0.25s]

                [&>span:nth-child(4)]:bottom-[-100%] [&>span:nth-child(4)]:left-0 [&>span:nth-child(4)]:w-[2px] [&>span:nth-child(4)]:h-full [&>span:nth-child(4)]:bg-[linear-gradient(360deg,transparent,#2196f3)]
                [&:hover>span:nth-child(4)]:bottom-[100%] [&:hover>span:nth-child(4)]:duration-1000 [&:hover>span:nth-child(4)]:delay-[0.75s]

                hover:text-[#255784] hover:bg-[#2196f3] hover:shadow-[0_0_10px_#2196f3,0_0_40px_#2196f3,0_0_80px_#2196f3] hover:delay-1000
              "
            >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Hello Yee
            </a>
        </div>
    );
};

export default NeonButton;