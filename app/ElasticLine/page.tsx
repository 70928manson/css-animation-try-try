const page = () => {
    return (
        <div className="flex justify-center items-center min-h-[100vh] bg-[#000]">
            <h2>Quick SVG Elastic Line Animation Effects | SVG CSS3</h2>
            <p>lighting line</p>
            <svg className="absolute w-[400px] fill-none">
                <path d="M0,25 C150,110 150,-60 300,25" stroke="#ff0092" strokeWidth={50}></path>
            </svg>
            <svg className="absolute w-[400px] fill-none">
                <path d="M0,25 C150,110 150,-60 300,25" stroke="#ff0092" strokeWidth={50}></path>
            </svg>
        </div>
    )
}

export default page
