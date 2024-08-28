import React from 'react'

export default function Hero() {
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
            <div className='flex flex-col gap-4'>
                <p>IT'S TIME TO GET</p>
                <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Monster<span className='text-blue-400'>Ator</span></h1>
            </div>
            <p className='text-sm md:text-base font-light'>I have full confidence that I want to look like a <span className='text-blue-400'>MONSTER</span>  and that I will do whatever I need to do without fail.</p>
            <button className='px-8 mx-auto py-4 rounded-md border-[2px] bg-slate-950 border-blue-400 border-solid blueShadow duration-200'>
                <p>Accept & Let's GOO</p>
            </button>
        </div>
    )
}