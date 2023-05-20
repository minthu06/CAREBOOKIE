import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Next } from '../../../assets/svg';
import { Data } from '../data';


const Category = () => {
    const navigate = useNavigate();
    return (
        <ul className='lg:flex container gap-6 mt-48 lg:mb-0 items-center z-20 '>
            {Data.map((item, index) => {
                return (
                    <li key={index} className='w-1/2 hidden group md:block relative  border border-gray-200 ' >
                        {item.path &&
                            <div>
                                <div className='w-16 fill-cyan-700 p-3 rounded-lg bg-white shadow-2xl absolute -top-8 left-2 z-10'>{item.icon}</div>
                                <div className="relative pt-7 pb-4 px-3 mt-8 ">
                                    <p className='font-bold text-cyan-900  mb-5 text-2xl '>{item.title}</p>
                                    <p>{item.subtitle}</p>
                                    <button className='mt-5 group' onClick={() => navigate(`${item.path}`)}>
                                        <span className='text-cyan-700 font-semibold text-[0px] group-hover:text-base transition-all duration-300 ease-linear'>Xem thêm</span>
                                        <Next className='w-8 inline-block ml-2 fill-cyan-600 stroke-cyan-600' />
                                    </button>
                                </div>


                            </div>
                        }
                    </li>)

            })
            }
        </ul >
    )
}

export default Category
