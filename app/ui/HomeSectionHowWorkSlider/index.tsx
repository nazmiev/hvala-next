'use client'

import Image from 'next/image'
import styles from './HomeSectionHowWorkSlider.module.scss'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function HomeSectionHowWorkSlider() {
    return (
        // https://react-responsive-carousel.js.org/storybook/?path=/story/01-basic--center-mode
        <section className={styles.HomeSectionHowWorkSlider}>
            <h2>How does it work</h2>
            <Carousel className={styles.carouselMobile}
                showArrows={true}
                swipeable={true}
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                infiniteLoop={true}
                useKeyboardArrows={false}
                autoPlay={false}
                stopOnHover={false}
                dynamicHeight={false}
                emulateTouch={true}
                autoFocus={false}
            >
                <div>
                    <img alt="" src="/hvala-banner-704.webp" />
                </div>
                <div>
                    <img alt="" src="/hvala-banner-704.webp" />
                </div>
                <div>
                    <img alt="" src="/hvala-banner-704.webp" />
                </div>
                <div>
                    <img alt="" src="/hvala-banner-704.webp" />
                </div>
            </Carousel>
            <div className={styles.carouselDesktop}>
                <img alt="" src="/hvala-banner-704.webp" />
                <img alt="" src="/hvala-banner-704.webp" />
                <img alt="" src="/hvala-banner-704.webp" />
                <img alt="" src="/hvala-banner-704.webp" />
            </div>
        </section>
    )
}