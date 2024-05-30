import React from 'react';

import { pricingOptions } from '../constants';
import PriceCard from './PriceCard';

const PriceSection:React.FC = () => {
  return (
    <section 
    className='mt-20 '>
<h2 className='text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide'>Pricing</h2>
    <div className="flex flex-wrap">
        {pricingOptions.map((option,index)=>{
            return(
<PriceCard option={option} key={index}/>
            )
        })}
    </div>
    </section>
  )
}

export default PriceSection;