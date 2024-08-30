import React from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/workoutBanks'
import Button from './Button'


function Header(props) {
    const { index, title, description } = props
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-center gap-2'>
                <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
                <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
            </div>
            <p className='text-sm sm:text-base mx-auto'>{description}</p>
        </div>
    )
}

export default function Generator() {
    return (
        <SectionWrapper id={'generate'} header={"generate your workout"} title={['It\'s', 'Huge', 'o\'clock']}>
            <Header index={'01'} title={'Pick your poison'} description={"Select the workout you wish to endure."} />
            <div className='grid grid-cols-2   border border-solid border-blue-400 sm:grid-cols-4 gap-4'>
            </div>
            <Header index={'02'} title={'Lock on targets'} description={"Select the muscles judged for annihilation."} />
            <div className='bg-slate-950  border border-solid border-blue-400 rounded-lg flex flex-col'>
            </div>
            <Header index={'03'} title={'Become Juggernaut'} description={"Select your ultimate objective."} />
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
            </div>
            <Button text={"Formulate"}></Button>
        </SectionWrapper>
    )
}
