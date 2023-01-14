import React from 'react'
import Stats from '../components/Stats'
import Promo from '../components/Promo'
import { Benefits } from '../components/Benefits'
import Brands from '../components/Brands'
import { Hero } from '../components/Hero'
import Footer from '../components/Footer'

export const URL_Shortener = () => {
    return (
        <>
            <Hero />
            <Benefits />
            <Stats />
            <Brands />
            <Promo />
            <Footer />

        </>
    )
}
