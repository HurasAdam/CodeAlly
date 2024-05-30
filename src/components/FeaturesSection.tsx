import React from 'react';
import { features } from '../constants';
import FeatureCard from './FeatureCard';
import * as types from "../types/index";

const FeaturesSection:React.FC = () => {
  return (
    <div className='relative mt-20 border-b border-neutral-800 min-h-[800px]'>
<div className="text-center">
    <span className='bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase'>
        feature
    </span>
    <h2 
    className='text-3xl sm:text-5xl lg:6xl mt-10 lg:mt-20 tracking-wide'>
      Simplify Your 
        <span 
        className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'>
            {" "}Coding Process
            </span>
        </h2>
</div>
<div className="flex flex-wrap mt-10 lg:mt-20">
{features.map((feature:types.IFeature,index:number)=>{
    return(
<FeatureCard feature={feature} key={index}/>
    )
})}
</div>
    </div>
  )
}

export default FeaturesSection