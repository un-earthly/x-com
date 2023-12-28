
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
            <ReviewCard
                review="
                Wij werken nu al twee maanden met e-Com Rebels, en zijn super tevreden. De fulfillment service is super goed en snel. We kregen daarnaast te maken met een hold via Klarna, en ook deze heeft e-Com Rebels binnen vier weken voor ons op weten te lossen. Super blij met ze!"
                reviewBy="Nick V. & Michel H."                
                img="https://randomuser.me/api/portraits/women/82.jpg" />
            <ReviewCard img="https://randomuser.me/api/portraits/women/83.jpg"
                review="Blij dat ik bij e-Com Rebels terecht ben gekomen. Niet alleen helpen ze mij bij het fulfillen van mijn bestellingen, maar ze zijn ook super proactief in het helpen en meedenken hoe ik mijn store nog harder kan laten lopen. Als beginnend dropshipper heb ik hier enorm veel aan!"
                reviewBy="Leon F."
            />
            <ReviewCard img="https://randomuser.me/api/portraits/women/83.jpg"
                review="Ik heb sinds 1 maand nu twee van mijn brands bij e-Com Rebels ondergebracht. Het is een leuk team, en de prijzen zijn echt wel een stuk lager vergeleken met mijn oude suppliers. Ik zou ze zeker aanraden."
                reviewBy=" Lindy D.
"
            />
            <ReviewCard
                review="Ik kwam in eerste instantie terecht bij e-Com Rebels vanwege een hold bij Shopify. Nadat deze was opgelost door ze, heb ik wat prijzen laten vergelijken voor producten die ik verkocht, en ben ik gelijk ook naar de fulfillment service overgestapt. We hebben de quotes snel in handen, en ook de fulfillment zelf is erg snel. Tot nu toe erg blij."
                reviewBy="Daniël W."
                img="https://randomuser.me/api/portraits/women/81.jpg" />
        </Carousel>
    );
}
