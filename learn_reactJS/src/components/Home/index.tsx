// import React from 'react'
// import Swal from 'sweetalert2'
import { SwiperSlide } from 'swiper/react'
import "./index.scss"
import { useEffect } from 'react'
import { getFlimList } from '../../redux-toolkit/flim.slice'
import { RootState, useAppDispatch } from '../../store'
import { useSelector } from 'react-redux'
import { Image } from 'antd'
const Home = () => {
    const flimList = useSelector((state: RootState) => state.flim.flimList)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getFlimList())
    }, [dispatch])

    return (
        <body className='w-full h-full bg-slate-800'>
            <section className='container py-3'>
                <div className='Title'>
                    <h1 className='Title-Month text-white'>Phim Của Tháng</h1>
                </div>
                <div className='flex justify-between p-2'>
                    {
                        flimList?.map((val, index) =>
                            <SwiperSlide key={index + 1}>
                                <Image
                                    width={280}
                                    height={340}
                                    src={`${val.image}`}
                                />
                                {/* <img src={`${val.image}`} className='rounded w-96 h-96 p-2' /> */}
                            </SwiperSlide>
                        )
                    }
                </div>
            </section>
            <hr className='HR-Month container' />
            <section className='Film w-full h-full'>
                <div className=' container'>
                    <h1 className=' text-white'>Danh Sách Phim</h1>
                </div>
                <div className='Film-Content container flex flex-wrap justify-between py-3 w-full h-full gap-y-8'>
                    {
                        flimList.map((film, index) =>
                            <div key={index + 1} className='Content-Left flex justify-end w-1/2 h-1/4 p-4'>
                                <div className='Image-Left'>
                                    <Image
                                        width={260}
                                        height={360}
                                        src={`${film.image}`}
                                    />
                                </div>
                                <div className='ContentBody-Left mx-3 w-[400px]'>
                                    <div>
                                        <h3 className='TitleFilm '>{film.name}</h3>
                                        <div className='flex *:mx-2 text-white'>
                                            <p>9/10</p>
                                            <p>HD {film.age}+</p>
                                        </div>
                                        <div className='Genre py-2'>
                                            <span className='GenreFilm text-white'>{film.genre}</span>
                                        </div>
                                    </div>
                                    <div className='Mota py-2 pt-3 flex-1'>
                                        <div className='Description-Box w-full text-justify'>
                                            {film.description}
                                        </div>
                                    </div>
                                    <div>
                                        <button className='Button btn  text-white w-[150px]'><a className='no-underline text-white font-semibold'>Chọn phim</a></button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </section>
        </body>
    )
}

export default Home