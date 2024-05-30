import React from 'react'
import codeImg from "../assets/code.jpg";
import { checklistItems } from '../constants';
import WorkflowListItem from './WorkflowListItem';
import * as types from "../types/index";


const WorkflowSection:React.FC = () => {
  return (
    <section className='mt-20'>
<h2 
className='text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide'>Supercharge 
<span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'>
    {" "}Your Workflow.
    </span>
</h2>
<div className="flex flex-wrap justify-center">
<div className='p-2 w-full lg:w-1/2'>
<img src={codeImg} alt="Code" />
</div>

<div className="pt-12 w-full lg:w-1/2">
{checklistItems.map((item:types.IWorkFlowlistItem,index:number)=>{
    return(
<WorkflowListItem item={item} key={index}/>
    )
})}
</div>
</div>
    </section>
  )
}

export default WorkflowSection