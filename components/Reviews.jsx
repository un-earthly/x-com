
'use client';

import { Carousel } from 'react-responsive-carousel';
import ReviewCard from './ui/ReviewCard';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Reviews() {
    return (
        <Carousel
            autoPlay
            centerMode
            showThumbs={false}
            showStatus={false}
            swipeable
            infiniteLoop
            
        >
            <ReviewCard img="https://randomuser.me/api/portraits/women/82.jpg" />
            <ReviewCard img="https://randomuser.me/api/portraits/women/83.jpg" />
            <ReviewCard img="https://randomuser.me/api/portraits/women/81.jpg" />
        </Carousel>
    );
}
