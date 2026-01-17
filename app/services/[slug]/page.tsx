import React from 'react'
import ContactUsSection from '@/components/ContactUsSection'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import { ReviewsSection } from '@/components/ReviewsSection'
import { servicesPage } from '@/constants/data'

const page = async ({params}: {params: Promise<{slug: string}>}) => {
    const {slug} = await params
    const serviceDetails = servicesPage.services.filter((service) => service.slug == slug )
  return (
    <>
    <HeroSection heading={serviceDetails[0].title} />
    <div className='max-w-7xl px-4 mx-auto'>
        <p className='text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum facilis distinctio quos velit, rem aliquam ratione, soluta exercitationem id ipsa voluptates quae? Corporis est dolorem necessitatibus minima veritatis saepe doloremque mollitia, unde incidunt temporibus, tempore eveniet animi fugit recusandae harum aut enim doloribus? Explicabo esse quia perspiciatis facere a nesciunt?</p>
        <p className='text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum facilis distinctio quos velit, rem aliquam ratione, soluta exercitationem id ipsa voluptates quae? Corporis est dolorem necessitatibus minima veritatis saepe doloremque mollitia, unde incidunt temporibus, tempore eveniet animi fugit recusandae harum aut enim doloribus? Explicabo esse quia perspiciatis facere a nesciunt?</p>
        <p className='text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum facilis distinctio quos velit, rem aliquam ratione, soluta exercitationem id ipsa voluptates quae? Corporis est dolorem necessitatibus minima veritatis saepe doloremque mollitia, unde incidunt temporibus, tempore eveniet animi fugit recusandae harum aut enim doloribus? Explicabo esse quia perspiciatis facere a nesciunt?</p>
        <p className='text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum facilis distinctio quos velit, rem aliquam ratione, soluta exercitationem id ipsa voluptates quae? Corporis est dolorem necessitatibus minima veritatis saepe doloremque mollitia, unde incidunt temporibus, tempore eveniet animi fugit recusandae harum aut enim doloribus? Explicabo esse quia perspiciatis facere a nesciunt?</p>
    </div>
    <ReviewsSection />
    <ContactUsSection />
    <Footer />
    </>
  )
}

export default page