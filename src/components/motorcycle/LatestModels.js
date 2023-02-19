import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link, useNavigate } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper';

import arrow from '../../assets/svg/arrow-left.svg';

const LatestModels = () => {
  const [motorcycles, setMotorcycles] = useState(null);
  const navigate = useNavigate();

  const fetchMotorDetails = async (event, motor) => {
    event.preventDefault();
    try {
      navigate(`/motorcycles/${motor.id}`, { state: { motor } });
    } catch (error) {
      // handle rejected Promise/errors/etc.
      console.log(error);
    }
  };

  useEffect(() => {
    console.log('Motorcycles: ', motorcycles);
    axios.get('http://localhost:3001/motorcycles').then((response) => {
      console.log('motorcycleees: ', response.data);
      setMotorcycles(response.data);
    }).catch((error) => {
      console.log('Motorcycle error: ', error);
    });
  }, []);

  return (
  /* List of Latest Models */
    <div className="flex flex-col w-full h-full bg-bg_secondary p-4 lg:p-6 overflow-x-hidden">
      <div className="flex flex-col w-full p-2 lg:p-4 text-center justify-center items-center">
        {/* Title */}
        <h1 className="text-gray-800 text-4xl font-extrabold">LATEST MODELS</h1>
        <p className="text-gray-400 text-base font-semibold">Please select a Vespa Model</p>
      </div>
      {/* Slider */}
      <div className="flex flex-col w-full h-full justify-center items-center p-2">
        <Swiper
          spaceBetween={30}
          grabCursor={false}
          centeredSlides={false}
          centerInsufficientSlides
          slidesPerView="auto"
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="relative w-full p-2"
        >
          {motorcycles && motorcycles.map((motor) => (
            <SwiperSlide
              key={motor.id}
              className="flex flex-col w-52 h-auto justify-center items-center text-center gap-5   cursor-pointer"
              onClick={console.log('Slidddder clicked')}
            >
              <Link
                to={`/motorcycles/${motor.id}`}
                onClick={(e) => fetchMotorDetails(e, motor)}
                className="flex flex-col w-full h-full justify-center items-center text-center gap-5"
              >
                <div className="flex flex-col justify-center items-center bg-bg_tertiary rounded-full">
                  <img src={motor.image_url} className="rounded-full h-[11rem] w-[11rem] object-fill" alt={motor.name} />
                </div>
                <div>
                  <h1 className="text-xl font-extrabold my-1">{motor.name}</h1>
                  <p className="text-sm text-gray-400 w-full font-semibold my-1">
                    {motor.description}
                  </p>
                </div>
              </Link>
              <div className="flex flex-row w-full h-12 items-center justify-center gap-1">
                <a href="##" className="flex justify-center items-center p-2 w-10 h-10 text-gray-400 rounded-full border-2 border-gray-400 m-1 cursor-pointer hover:bg-very_dark_limerick lg:hover:text-white hover:border-very_dark_limerick">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 1920 1920"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1168.737 487.897c44.672-41.401 113.824-36.889 118.9-36.663l289.354-.113 6.317-417.504L1539.65 22.9C1511.675 16.02 1426.053 0 1237.324 0 901.268 0 675.425 235.206 675.425 585.137v93.97H337v451.234h338.425V1920h451.234v-789.66h356.7l62.045-451.233H1126.66v-69.152c0-54.937 14.214-96.112 42.078-122.058" fillRule="evenodd" />
                  </svg>
                </a>
                <a href="##" className="flex justify-center items-center p-2 w-10 h-10 text-gray-400 rounded-full border-2 border-gray-400 m-1 cursor-pointer hover:bg-very_dark_limerick lg:hover:text-white hover:border-very_dark_limerick">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 1920 1920"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1920 311.856c-70.701 33.769-146.598 56.47-226.221 66.86 81.317-52.517 143.774-135.529 173.252-234.691-76.236 48.678-160.716 84.028-250.391 103.002-71.718-82.56-174.268-134.06-287.435-134.06-217.75 0-394.165 189.966-394.165 424.206 0 33.318 3.614 65.619 10.165 96.678C617.9 616.119 327.304 447.385 133.045 190.67c-33.77 62.57-53.309 135.53-53.309 213.233 0 147.162 91.031 276.818 196.744 353.054-64.602-2.26-157.101-21.46-157.101-53.309v5.648c0 205.327 114.41 376.658 294.55 415.849-32.978 9.487-78.38 14.795-114.409 14.795-25.412 0-55.454-2.71-79.624-7.793 50.26 168.509 193.13 291.163 365.478 294.777-134.852 113.506-306.07 181.383-490.616 181.383-31.85 0-64.038-2.033-94.758-5.873 174.494 120.17 381.176 190.532 603.67 190.532 724.97 0 1121.055-646.136 1121.055-1206.55 0-18.41-.452-36.932-1.356-55.116 77.026-59.746 143.887-134.4 196.631-219.444" fillRule="evenodd" />
                  </svg>
                </a>
                <a href="##" className="flex justify-center items-center p-1.5 w-10 h-10 text-gray-400 rounded-full border-2 border-gray-400 m-1 cursor-pointer hover:bg-very_dark_limerick lg:hover:text-white hover:border-very_dark_limerick">
                  <svg
                    viewBox="0 0 192 192"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path stroke="currentColor" strokeWidth="12" d="M96 162c-14.152 0-24.336-.007-32.276-.777-7.849-.761-12.87-2.223-16.877-4.741a36 36 0 0 1-11.33-11.329c-2.517-4.007-3.98-9.028-4.74-16.877C30.007 120.336 30 110.152 30 96c0-14.152.007-24.336.777-32.276.76-7.849 2.223-12.87 4.74-16.877a36 36 0 0 1 11.33-11.33c4.007-2.517 9.028-3.98 16.877-4.74C71.663 30.007 81.847 30 96 30c14.152 0 24.336.007 32.276.777 7.849.76 12.87 2.223 16.877 4.74a36 36 0 0 1 11.329 11.33c2.518 4.007 3.98 9.028 4.741 16.877.77 7.94.777 18.124.777 32.276 0 14.152-.007 24.336-.777 32.276-.761 7.849-2.223 12.87-4.741 16.877a36 36 0 0 1-11.329 11.329c-4.007 2.518-9.028 3.98-16.877 4.741-7.94.77-18.124.777-32.276.777Z" />
                    <circle cx="96" cy="96" r="30" stroke="currentColor" strokeWidth="12" />
                    <circle cx="135" cy="57" r="9" fill="currentColor" />
                  </svg>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Slider Arrow-Buttons */}
        <div className="flex p-2">
          <button
            type="button"
            className="swiper-button-prev after:content-[''] absolute left-[18rem] hidden lg:flex self-center w-16 h-12 justify-end items-center p-4 text-white bg-very_dark_limerick rounded-br-full rounded-tr-full hover:bg-dark_limerick"
          >
            <img className="w-7 h-7 rotate-180" src={arrow} alt="left-arrow" />
          </button>
          <button
            type="button"
            className="swiper-button-next after:content-[''] absolute right-[0] hidden lg:flex self-center w-16 h-12 justify-start items-center p-4 text-white bg-very_dark_limerick rounded-bl-full rounded-tl-full hover:bg-dark_limerick"
          >
            <img className="w-7 h-7" src={arrow} alt="left-arrow" />
          </button>
        </div>
        <div className="swiper-pagination relative flex w-full justify-center items-center" />
      </div>
    </div>
  );
};

export default LatestModels;
