import React from 'react'
import { FaRegCheckCircle } from 'react-icons/fa';
import * as types from "../types/index";

interface IProps{
    item:types.IWorkFlowlistItem;
}

const WorkflowListItem:React.FC<IProps> = ({item}) => {
  return (
    <div  className='flex mb-12'>
    <div className='text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full'>
    <FaRegCheckCircle/>
    </div>
    <div>
        <h5 className='mt-1 mb-2 text-xl'>{item.title}</h5>
        <p className='text-md text-neutral-500'>{item.description}</p>
    </div>
            </div>
  )
}

export default WorkflowListItem