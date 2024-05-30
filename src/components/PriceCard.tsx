import React from 'react'
import { FaCheckCircle } from 'react-icons/fa';
import * as types from "../types/index";

interface IProps{
    option:types.IPriceOption;
}

const PriceCard:React.FC<IProps> = ({option}) => {
  return (
    <div 
    className='w-full sm:w-1/2 lg:w-1/3 p-2'>
<div className='p-10 border border-neutral-700 rounded-xl'>
<p className='text-4xl mb-8'>
{option.title}
{option.title ==="Pro" && (
<span 
className='bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2'>(Most Popular)</span> )}
</p>
<p className='mb-8'>
<span className='text-5xl mt-6 mr-2'>{option.price}</span>
<span className='text-neutrail-400 tracking-tight'>/Month</span>
</p>
<ul>
{option?.features.map((feature:string,index:number)=>{
return(
    <li 
    className='mt-8 flex items-center '
    key={index}>
        <FaCheckCircle/>
        <span className='ml-2'>{feature}</span>
    </li>
)
})}
</ul>
<a 
href="#" 
className='inline-flex justify-center items-center text-center w-full 
h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200'>Subscribe</a>
</div>
    </div>
  )
}

export default PriceCard