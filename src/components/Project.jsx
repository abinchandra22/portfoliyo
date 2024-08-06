import React from 'react'
import './Project.css'
import Carousel from 'react-bootstrap/Carousel';
import pro from '../assets/pro.png'
import cart from '../assets/cart.png'
import rest from '../assets/rest.png'

import Card from 'react-bootstrap/Card';


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
// import { Link } from 'react-router-dom';

function Project() {
  return (
    <div className='container mt-5 mb-5 p-5'>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={
          {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }
        }
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className='swiper_container'
      >
        <SwiperSlide className='image'>
          {/* <img src={rest} alt="" /> */}
          <div className='cardess'>
            <Card style={{ marginBottom: '25px', alignItems: 'center' }}>
              <Card.Img variant="top" src={rest} style={{ width: '100%' }} />
              <div className='info'>
                <Card.Body>
                  <Card.Title className='text-danger text-bold mt-3'><h2>Eat Explorer</h2></Card.Title>
                  {/* <Card.Text className='mt-4'>
             It is a website where users can upload information about their restaurants, ranging from small tea 
shops to multi-restaurant chains. Other users can register and log in to find these restaurants by searching for 
the location. They can also find special dishes and get the exact location of the restaurant. This website uses 
HTML, CSS, JavaScript, and React for the front-end, and Node.js and MongoDB for the back-end            </Card.Text> */}
                </Card.Body>
                <div className='home' >
                  <div className='home-scis'>
                    <a href="https://restuarent-jiwp-q3yoam3vn-abins-projects-8de30fdf.vercel.app/"><i class="fa-solid fa-link mt-2" style={{ color: '#0ef' }}></i></a>

                  </div>
                  <div className='home-scis'>
                    <a href="https://github.com/abinchandra22/restuarent"><i class="fa-brands fa-github mt-2" style={{ color: '#0ef' }}></i></a>

                  </div>

                </div>


              </div>
            </Card>
          </div>

        </SwiperSlide>

        <SwiperSlide className='image'>
          {/* <img src={pro} alt="" /> */}
          <div className='cardess'>
            <Card style={{ marginBottom: '25px', alignItems: 'center' }}>
              <Card.Img variant="top" src={pro} style={{ width: '100%' }} />
              <div className='info'>
                <Card.Body >
                  <Card.Title className='text-danger text-bold mt-2'><h2>Project Fair</h2></Card.Title>
                  {/* <Card.Text className='para mt-1'>
             <p>
               This is a website where users can register and log in to upload information about their projects. 
  Each project entry includes a description, a project link, and a GitHub link. Other users can find these projects 
  by searching for their names. The front-end of the website is built using HTML, CSS, JavaScript, and React, 
  while the back-end is powered by Node.js and MongoDB.     
             </p>       </Card.Text> */}
                </Card.Body>
                <div className='home' >
                  <div className='home-scis'>
                    <a href="https://project-fair-3izt.vercel.app/"><i class="fa-solid fa-link mt-2" style={{ color: '#0ef' }}></i></a>

                  </div>
                  <div className='home-scis'>
                    <a href="https://github.com/abinchandra22/ProjectFair"><i class="fa-brands fa-github mt-2" style={{ color: '#0ef' }}></i></a>

                  </div>


                </div>
              </div>
            </Card>
          </div>

        </SwiperSlide>

        <SwiperSlide className='image'>
          {/* <img src={cart} alt="" /> */}
          <div className='cardess'>
            <Card style={{ marginBottom: '25px', alignItems: 'center' }}>
              <Card.Img variant="top" src={cart} style={{ width: '100%' }} />
              <div className='info'>
                <Card.Body >
                  <Card.Title className='text-danger text-bold mt-3'><h2>Daily Cart</h2></Card.Title>
                  {/* <Card.Text className='mt-4'>
            An e-commerce website allows users to browse and search for products, view detailed information, and add items to a shopping cart or wishlist for future purchase.             </Card.Text> */}
                </Card.Body>
                <div className='home' >
                  <div className='home-scis'>
                    <a href="https://e-cart-iota-self.vercel.app/"><i class="fa-solid fa-link mt-2" style={{ color: '#0ef' }}></i></a>

                  </div>
                  <div className='home-scis'>
                    <a href="https://github.com/abinchandra22/e-cart"><i class="fa-brands fa-github mt-2" style={{ color: '#0ef' }}></i></a>

                  </div>

                </div>


              </div>
            </Card>
          </div>

        </SwiperSlide>

        <div className="slider-controller">
          <div className="swiper-button-prev slider-arrow">
            <icon-icon name='arrow-back-outline'></icon-icon>
          </div>

          <div className="swiper-button-next slider-arrow">
            <icon-icon name='arrow-forward-outline'></icon-icon>
          </div>

          <div className="swiper-pagination"></div>

        </div>

      </Swiper>


    </div>
  )
}

export default Project