const page = () => {
    return (
        <div className="flex justify-center items-center min-h-[100vh] bg-[#607d8b]">
            <div className="relative top-[50px]">
                {/* 盤子 */}
                <div className="absolute bottom-[-50px] left-[50%] translate-x-[-50%] w-[500px] h-[200px]
                  bg-gradient-to-r from-[#f9f9f9] to-[#e7e7e7] rounded-[50%] shadow-[0_35px_35px_rgba(0,0,0,0.2)]
                  before:content-[''] before:absolute before:top-[10px] before:left-[10px] before:right-[10px] before:bottom-[10px]
                  before:rounded-[50%] before:bg-gradient-to-l before:from-[#f9f9f9] before:to-[#e7e7e7]
                  after:content-[''] after:absolute after:top-[30px] after:left-[30px] after:right-[30px] after:bottom-[30px]
                  after:rounded-[50%] after:bg-[radial-gradient(rgba(0,0,0,0.2)_25%,transparent,transparent)]"
                ></div>
                {/* 杯子本體 */}
                <div className="relative w-[280px] h-[300px] bg-gradient-to-r from-[#f9f9f9] to-[#d9d9d9] rounded-bl-[45%] rounded-br-[45%]">
                    <div className="absolute top-[-30px] left-0 w-full h-[60px] bg-gradient-to-r from-[#f9f9f9] to-[#d9d9d9] rounded-[50%]">
                        {/* 茶很燙冒出來的煙 */}
                        <div className="relative flex z-10 py-0 px-5">
                            <span className="relative bottom-[50px] block my-0 mx-0.5 min-w-2 h-[120px] bg-[#fff] rounded-[50%] opacity-0 blur animate-steam-up animation-delay-1"></span>
                            <span className="relative bottom-[50px] block my-0 mx-0.5 min-w-2 h-[120px] bg-[#fff] rounded-[50%] opacity-0 blur animate-steam-up animation-delay-3"></span>
                            <span className="relative bottom-[50px] block my-0 mx-0.5 min-w-2 h-[120px] bg-[#fff] rounded-[50%] opacity-0 blur animate-steam-up animation-delay-16"></span>
                            <span className="relative bottom-[50px] block my-0 mx-0.5 min-w-2 h-[120px] bg-[#fff] rounded-[50%] opacity-0 blur animate-steam-up animation-delay-5"></span>
                            <span className="relative bottom-[50px] block my-0 mx-0.5 min-w-2 h-[120px] bg-[#fff] rounded-[50%] opacity-0 blur animate-steam-up animation-delay-20"></span>
                            <span className="relative bottom-[50px] block my-0 mx-0.5 min-w-2 h-[120px] bg-[#fff] rounded-[50%] opacity-0 blur animate-steam-up animation-delay-6"></span>
                            <span className="relative bottom-[50px] block my-0 mx-0.5 min-w-2 h-[120px] bg-[#fff] rounded-[50%] opacity-0 blur animate-steam-up animation-delay-7"></span>
                            <span className="relative bottom-[50px] block my-0 mx-0.5 min-w-2 h-[120px] bg-[#fff] rounded-[50%] opacity-0 blur animate-steam-up animation-delay-10"></span>
                            <span className="relative bottom-[50px] block my-0 mx-0.5 min-w-2 h-[120px] bg-[#fff] rounded-[50%] opacity-0 blur animate-steam-up animation-delay-8"></span>
                            <span className="relative bottom-[50px] block my-0 mx-0.5 min-w-2 h-[120px] bg-[#fff] rounded-[50%] opacity-0 blur animate-steam-up animation-delay-17"></span>
                            <span className="relative bottom-[50px] block my-0 mx-0.5 min-w-2 h-[120px] bg-[#fff] rounded-[50%] opacity-0 blur animate-steam-up animation-delay-11"></span>
                            <span className="relative bottom-[50px] block my-0 mx-0.5 min-w-2 h-[120px] bg-[#fff] rounded-[50%] opacity-0 blur animate-steam-up animation-delay-12"></span>
                            <span className="relative bottom-[50px] block my-0 mx-0.5 min-w-2 h-[120px] bg-[#fff] rounded-[50%] opacity-0 blur animate-steam-up animation-delay-13"></span>
                            <span className="relative bottom-[50px] block my-0 mx-0.5 min-w-2 h-[120px] bg-[#fff] rounded-[50%] opacity-0 blur animate-steam-up animation-delay-14"></span>
                            <span className="relative bottom-[50px] block my-0 mx-0.5 min-w-2 h-[120px] bg-[#fff] rounded-[50%] opacity-0 blur animate-steam-up animation-delay-2"></span>
                            <span className="relative bottom-[50px] block my-0 mx-0.5 min-w-2 h-[120px] bg-[#fff] rounded-[50%] opacity-0 blur animate-steam-up animation-delay-9"></span>
                            <span className="relative bottom-[50px] block my-0 mx-0.5 min-w-2 h-[120px] bg-[#fff] rounded-[50%] opacity-0 blur animate-steam-up animation-delay-15"></span>
                            <span className="relative bottom-[50px] block my-0 mx-0.5 min-w-2 h-[120px] bg-[#fff] rounded-[50%] opacity-0 blur animate-steam-up animation-delay-4"></span>
                            <span className="relative bottom-[50px] block my-0 mx-0.5 min-w-2 h-[120px] bg-[#fff] rounded-[50%] opacity-0 blur animate-steam-up animation-delay-19"></span>
                        </div>
                        {/* 杯口 */}
                        <div className="absolute top-[5px] left-[10px] w-[calc(100%-20px)] h-[50px] 
                          bg-gradient-to-l from-[#f9f9f9] to-[#d9d9d9] rounded-[50%] box-border overflow-hidden"
                        >
                            {/* 茶 tea */}
                            <div className="absolute top-[20px] left-0 w-full h-full bg-gradient-to-r from-[#c57e65] to-[#e28462] rounded-[50%]">

                            </div>
                        </div>
                    </div>
                </div>
                {/* 杯子把手 */}
                <div className="absolute right-[-70px] top-[40px] w-[160px] h-[180px] 
                border-[25px] border-solid border-[#dcdcdc]
                border-l-[25px] border-l-solid border-l-transparent
                border-b-[25px] border-b-solid border-b-transparent
                rounded-[50%] rotate-[42deg]"></div>
            </div>
        </div>
    )
}

export default page
