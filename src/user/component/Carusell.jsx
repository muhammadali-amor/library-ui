// import React, { useEffect, useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation, Autoplay } from "swiper/modules";
// import { gsap } from "gsap";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "../assets/Carousel.css";
// import rasm1 from '../assets/images/book-bg-1.jpeg'
// import rasm2 from '../assets/images/book-bg-2.webp'
// import rasm3 from '../assets/images/book-bg-3.jpg'
// import rasm4 from '../assets/images/book-bg-4.jpg'
// import rasm5 from '../assets/images/book-bg-5.jpg'
// import rasm6 from '../assets/images/book-bg-6.jpg'
// import rasm7 from '../assets/images/book-bg-7.jpg'
// import rasm8 from '../assets/images/book-bg-8.jpg'
// import rasm9 from '../assets/images/book-bg-9.jpg'
// import rasm10 from '../assets/images/book-bg-10.jpg'
// import rasm11 from '../assets/images/book-bg-11.jpg'

// const slides = [
//     {
//         title: "100 Yil Yolg‘izlik",
//         author: "Gabriel Garcia Marquez",
//         description:
//             "Bu kitob insoniyat hayoti, yolg‘izlik va sevgini tasvirlaydi.",
//         cover: "https://source.unsplash.com/300x450/?book",
//     },
//     {
//         title: "O‘ylashning kuchi",
//         author: "Napoleon Hill",
//         description:
//             "Bu kitob muvaffaqiyatga erishish sirlarini ochib beradi.",
//         cover: "https://source.unsplash.com/300x450/?open-book",
//     },
//     {
//         title: "Har qanday insonni sevish",
//         author: "Leo Tolstoy",
//         description: "Sevgi haqida chuqur mulohazalar va tahlillar.",
//         cover: "https://source.unsplash.com/300x450/?book-love",
//     },
// ];

// const backgroundImages = [
//     rasm1,
//     rasm2,
//     rasm3,
//     rasm4,
//     rasm5,
//     rasm6,
//     rasm7,
//     rasm8,
//     rasm9,
//     rasm10,
//     rasm11
// ];

// function CustomCarousel() {
//     const swiperRef = useRef(null);
//     const [randomImages, setRandomImages] = useState([]);

//     useEffect(() => {
//         // Har bir slayddagi fon uchun tasodifiy rasmlar yaratish
//         const newRandomImages = slides.map(
//             () => backgroundImages[Math.floor(Math.random() * backgroundImages.length)]
//         );
//         setRandomImages(newRandomImages);
//     }, []);

//     useEffect(() => {
//         if (swiperRef.current) {
//             swiperRef.current.swiper.on("slideChangeTransitionStart", () => {
//                 gsap.fromTo(
//                     ".text-content",
//                     { opacity: 0, x: -100 },
//                     { opacity: 1, x: 0, duration: 1, ease: "power4.out" }
//                 );
//                 gsap.fromTo(
//                     ".book-cover",
//                     { opacity: 0, x: 100 },
//                     { opacity: 1, x: 0, duration: 1.2, ease: "power4.out" }
//                 );
//             });
//         }
//     }, []);

//     return (
//         <div className="carousel-container">
//             <Swiper
//                 ref={swiperRef}
//                 modules={[Pagination, Navigation, Autoplay]}
//                 pagination={{clickable: true}}
//                 navigation={true} // Swiper-ning o‘z navigation tugmalari ishlaydi
//                 autoplay={{delay: 5000, disableOnInteraction: false}}
//                 speed={1200}
//                 loop={true}
//                 className="mySwiper"
//             >
//                 {slides.map((slide, index) => (
//                     <SwiperSlide key={index}>
//                         <div
//                             className="slide-content"
//                             style={{backgroundImage: `linear-gradient(rgba(43, 43, 43, 0.89), rgba(20, 20, 20, 0.85)), url(${randomImages[index]})`}}
//                         >
//                             <div className="info-container">
//                                 <div className="text-content">
//                                     <h3>{slide.title}</h3>
//                                     <h5>Muallif: {slide.author}</h5>
//                                     <p>{slide.description}</p>
//                                     <div className="buttons">
//                                         <button className="order-btn">Sotib olish</button>
//                                         <button className="more-btn">Batafsil</button>
//                                     </div>
//                                 </div>
//                                 <div className="book-cover">
//                                     <img src={slide.cover} alt="Kitob muqovasi"/>
//                                 </div>
//                             </div>
//                         </div>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>

//     );
// }

// export default CustomCarousel;
