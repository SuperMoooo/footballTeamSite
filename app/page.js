'use client';
import { useState } from 'react';
import ContentCarousel from './components/ContentCarousel';
import HomeCarousel from './components/HomeCarousel';
import Navbar from './components/Navbar';

export default function Home() {
    const [activeSlide, setActiveSlide] = useState(1);
    return (
        <>
            <Navbar />
            <main>
                <HomeCarousel
                    activeSlide={activeSlide}
                    setActiveSlide={setActiveSlide}
                />
                <ContentCarousel
                    activeSlide={activeSlide}
                    slideNumber={1}
                    category={'Team A'}
                    title={'Big win for Team A'}
                />
                <ContentCarousel
                    activeSlide={activeSlide}
                    slideNumber={2}
                    category={'Team B'}
                    title={'Big loss for the B team'}
                />
                <ContentCarousel
                    activeSlide={activeSlide}
                    slideNumber={3}
                    category={'Team C'}
                    title={'New contract for Albert'}
                />
                <ContentCarousel
                    activeSlide={activeSlide}
                    slideNumber={4}
                    category={'Team D'}
                    title={'Discussion on the renovation of the stadium'}
                />
            </main>
        </>
    );
}
