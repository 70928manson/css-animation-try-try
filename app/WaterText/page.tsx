import React from 'react'

const WaterText = () => {
  return (
    <div className="box-border font-['Noto_Sans_TC']">
      <div className="flex column justify-center items-center min-h-[100vh] bg-black">
        <div className="relative">
          <h2 className="absolute text-black translate-x-[-50%] translate-y-[-50%] text-[8em]" style={{ wordBreak: 'keep-all', color: 'transaprent', WebkitTextStroke: '2px #03a9f4' }}>
            問題意識
          </h2>
          <h2 className="absolute text-black translate-x-[-50%] translate-y-[-50%] text-[8em] animate-water" style={{ wordBreak: 'keep-all', color: '#03a9f4' }}>問題意識</h2>
        </div>
      </div>
    </div>
  )
}

export default WaterText
