import React from 'react'
import { Carousel } from 'antd';
import banner_bg_1 from '../../assets/image/1.png'
import banner_bg_2 from '../../assets/image/2.png'
import banner_bg_3 from '../../assets/image/3.png'
import Category from './review/category';
import ShowHospital from './review/showhospital';
import ShowDoctor from './review/showDoctor';
import Review from './review/review';
import Layout from '../../component/layout';
import Introduce from './review/introduce';

const Home = () => {
    return (
        <Layout>
            <div className='relative'>
                <Carousel autoplay >
                    <div className='relative'>
                        <img src={banner_bg_1} alt="banner_1" className='w-full' />
                        <div className='absolute left-[32%] top-1/3 text-center '>
                            <p className=' text-9xl text-white font-bold drop-shadow-2xl' style={{ textShadow: '3px 3px  rgba(0, 0, 0, 0.3)' }}>Lựa chọn <p>vì sức khỏe</p></p>
                        </div>

                    </div>
                    <div className='relative'>
                        <img src={banner_bg_2} alt="banner_2" className='w-full ' />
                        <div className='absolute left-[30%] top-1/3     text-center '>
                            <p className=' text-9xl text-white font-bold drop-shadow-2xl' style={{ textShadow: '3px 3px  rgba(0, 0, 0, 0.3)' }}>Lựa chọn <p>vì sức khỏe</p></p>
                        </div>
                    </div>
                </Carousel >
                <div className='absolute -bottom-[10%]  w-full   '>
                    <div className='container border-t-8 shadow-xl  border-cyan-700 bg-white py-12 px-10 mx-auto'>
                        <p className='font-bold text-lg pb-3 text-gray-600'>Chủ đề tìm kiếm </p>
                        <div class=" relative mx-auto text-gray-600 ">
                            <input class="border-2 border-gray-300 bg-white h-16 text-xl px-5 w-full pr-16 rounded-lg focus:outline-none"
                                type="search" name="search" placeholder="Tìm bác sĩ, chuyên khoa,..." />
                            <button type="submit" class="absolute right-0 text-white bg-cyan-700 top-0 px-6 py-5 rounded-r-md">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div >
            <section className='mb-36'>
                <Category />
            </section>

            <section className="bg-[url(https://1.bp.blogspot.com/-kY-ZWc1q_fM/YEXVbA4tz-I/AAAAAAAACyE/y8VTEdVExwUexjMwxCE17gVx8T6W9PfiQCLcBGAsYHQ/s16000/bg_taisao_update.jpg)] bg-cover relative ">
                <Review />
            </section>
            <section className="relative"               >
                <ShowDoctor />
            </section>
            <section className=" bg-[url(https://1.bp.blogspot.com/-7HgXW5qFSvI/YEXVkD5QZQI/AAAAAAAACyI/fNvsrPJ4vi0ltDLS--1EqaLHnFZzKCvUwCLcBGAsYHQ/s16000/bg_danhgia_update.jpg)] bg-cover relative ">
                <Introduce />
            </section>
            <section className="bg-white relative ">
                <ShowHospital />
            </section>
        </Layout>
    )
}

export default Home
