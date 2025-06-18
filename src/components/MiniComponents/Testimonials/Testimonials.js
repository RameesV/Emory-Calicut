import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import './Testimonials.scss';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import student images (make sure the paths are correct for your project structure)
import dilshan from '../../../assets/Reviews/r1.jpg';
import nafiya from '../../../assets/Reviews/r2.jpg';
import asmina from '../../../assets/Reviews/r3.jpg';
import shameela from '../../../assets/Reviews/r4.jpg';
import sajva from '../../../assets/Reviews/r5.jpg';

// The testimonial data
const testimonials = [
    {
        id: 1,
        name: 'Dilshana Sherin',
        description: 'The Institute is well reputed and its teachers offer a commendable educational experience. Their commitment to providing clear, practical knowledge is evident, and their supportive approach greatly enhances the learning environment.',
        image: dilshan,
        role: 'Student'
    },
    {
        id: 2,
        name: 'Nafiya pk',
        description: 'I had the pleasure of being a student at Emory Institute, specifically in the hospital administration program, and I must say it was an exceptional experience. The overall atmosphere which made learning and growth a truly enjoyable process.',
        image: nafiya,
        role: 'Student'
    },
    {
        id: 3,
        name: 'Asmina',
        description: 'Emory institute is very reliable for professional course. They are giving such a good and hands on training. They especially provide job oriented training. Their way of teaching is good.',
        image: asmina,
        role: 'Student'
    },
    {
        id: 4,
        name: 'Shameela',
        description: 'The teaching way of this institution is good. Internship rate are also good. Faculty members of institution are also very well qualified and always helpful.',
        image: shameela,
        role: 'Student'
    },
    {
        id: 5,
        name: 'Sajva',
        description: 'The tutors are very knowledgeable and well-informed. They were really supportive throughout the course.',
        image: sajva,
        role: 'Student'
    },
];


const Testimonials = () => {
  return (
    <section className="testimonials bg-gray-900 py-24 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Students Say
        </h2>
        <p className="text-black-400 mb-12">Real experiences from the people we've helped grow.</p>

        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) =>
              `<span class="${className} custom-line"></span>`
          }}
          autoplay={{
            delay: 25000,
            disableOnInteraction: false
          }}
          speed={800}
          className="testimonial-swiper pb-16"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              {/* <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 h-full flex flex-col items-center text-center shadow-lg"> */}
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-gray-700 mb-4"
                />
                <h3 className="text-xl font-semibold text-black mb-1">{testimonial.name}</h3>
                <p className="text-red-500 font-medium mb-4">{testimonial.role}</p>
                <p className="text-gray-300 text-sm leading-relaxed">"{testimonial.description}"</p>
              {/* </div> */}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom styles for pagination */}
        <style>{`
          .swiper-pagination {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 12px;
            bottom: 0 !important; /* Ensure pagination is at the bottom */
          }

          .custom-line {
            display: inline-block;
            width: 50px;
            height: 4px;
            background-color: #4b5563; /* gray-600 */
            border-radius: 2px;
            transition: background-color 0.3s ease;
            cursor: pointer;
          }

          .swiper-pagination-bullet-active.custom-line {
            background-color: #ef4444; /* red-500 */
          }
        `}</style>
      </div>
    </section>
  );
};

export default Testimonials;