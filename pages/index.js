import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Homee from '../component/Home'
import axios from 'axios'
import { wrapper } from '../store/store';
import { autodiggSlice, setCars } from '../slice/slice';
import { useSelector } from 'react-redux'
import { flushSync } from 'react-dom'
import { useSelect } from '@material-tailwind/react'
import { useEffect, useState } from 'react'


const api_url = "https://autodigg.com/ad-api/cars/list?usedCar=true&car_type=Used+car&page=1&radius=100&year=2011,2021&zip=&price_from=0&price_to=100000";

export async function getServerSideProps() {
  const api = await axios.all([
    axios.get(api_url),
    axios.get(`${api_url}&return=count`),
    axios.get(`${api_url}&return=body_type`),
    axios.get(`${api_url}&return=exterior_color`),
    axios.get(`${api_url}&return=interior_color`),
    axios.get(`${api_url}&return=transmission`),
    axios.get(`${api_url}&return=drivetrain`),
    axios.get(`${api_url}&return=fuel_type`),
    axios.get(`${api_url}&return=features`),
    axios.get(`${api_url}&return=make`),
    axios.get(`${api_url}&return=model`)
  ]);

  // console.log(api)

  return {
    props: {
      cars: api[0].data,
      count: api[1].data.count,
      body_type: api[2].data,
      exterior_color: api[3].data,
      interior_color: api[4].data,
      transmission: api[5].data,
      drivetrain: api[6].data,
      fuel_type: api[7].data,
      features: api[8].data,
      make: api[9].data,
      model: api[10].data
    }
  }
}

export default function Home(api) {

  const [car_data, setCarData] = useState(api);
  const carData = useSelector((state) => state.autodigg);
  // console.log(carData);

  useEffect(() => {
    carData.cars.length > 0 && setCarData(carData);
  }, [carData])

  return (
    <><Head>
      <title>AutoDigg Cars</title>
      <meta property="og:title" content="My page title" key="title" />
      <meta name="description" content="Next-Js-redux project." />
      <meta property="og:type" name="og:type" content="website" />
      <meta property="og:site_name" name="og:site_name" content="cars app" />
      <meta property="og:url" name="og:url" content="https://next-redux-cars.vercel.app/" />
      <meta name="og:title" property="og:title" content="My cars project" />
      <meta name="og:description" property="og:description" content="next redux project..." />
      <link rel="apple-touch-icon" href="/favicon.ico" />
      <meta name="og:image" property="og:image" content="https://next-redux-cars.vercel.app/images/Create-Next-App.png" />
      <link rel="canonical" href="https://next-redux-cars.vercel.app/" />
    </Head>

      <div className='bg-[#FAFAFC] max-w-[1440px] mx-auto  '>
        <Header />
        <div className='flex flex-col px-[60px] gap-[8px] py-[36px]'>
          <label className='text-[#8F90A6] font-semibold text-[12px] leading-[16px] not-italic '> USED CARS FOR SALE</label>
          <label className='text-[#28293D] not-italic font-bold text-[32px] leading-[44px]'>Showing {car_data.count.toLocaleString('en-US')} cars</label>
        </div>
        <Homee cardata={api} />
        <Footer />
      </div>
    </>
  )
}

