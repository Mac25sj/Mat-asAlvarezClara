import { Carousel } from 'flowbite-react'

const MyCarousel = () => {
  return (
    <section className="w-full py-8 bg-slate-100 dark:bg-slate-900 transition-colors duration-500">
      <div className="w-full max-w-screen-2xl mx-auto px-0 xl:px-0 2xl:px-0 aspect-[16/9] sm:aspect-[21/9] md:aspect-[16/7] xl:aspect-[16/6] 2xl:aspect-[16/5]">
        <Carousel
          slideInterval={4000}
          className="rounded-lg overflow-hidden w-full h-full shadow-xl dark:shadow-slate-800"
        >
          {[
            'img1.jpg',
            'img2.jpg',
            'img3.jpg',
            'img4.jpg',
            'img5.jpg',
            'img6.jpg',
            'img7.jpg',
            'logo.png',
          ].map((src, idx) => (
            <img
              key={idx}
              src={`/${src}`}
              alt={`Slide ${idx + 1}`}
              className="object-cover w-full h-full transition-opacity duration-500"
              loading="lazy"
              decoding="async"
            />
          ))}
        </Carousel>
      </div>
    </section>
  )
}

export default MyCarousel