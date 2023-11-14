import Image from 'next/image'
import styles from './HomeSectionOneClickReviews.module.scss'

export default function HomeSectionOneClickReviewsEn() {
    return (
        <section className={styles.HomeSectionOneClickReviews}>
            <h2>One-click public reviews</h2>
            <div className={styles.iPhoneImageContainer}>
                <Image
                    src="/OneClickReviewsIphone.png"
                    alt="Public reviews in your phone"
                    width={1293}
                    height={2592} />
            </div>
            <div className={styles.imagesContainer}>
                <div className={styles.googleImageContainer}>
                    <Image
                        src="/OneClickReviewsGoogle.png"
                        alt="Public reviews in your phone"
                        width={2848}
                        height={1392} />
                </div>
                <div className={styles.instaImageContainer}>
                    <Image
                        src="/OneClickReviewsInsta.png"
                        alt="Public reviews in your phone"
                        width={1352}
                        height={2388} />
                </div>
                <div className={styles.tripImageContainer}>
                    <Image
                        src="/OneClickReviewsTrip.png"
                        alt="Public reviews in your phone"
                        width={2560}
                        height={714} />
                </div>
            </div>
        </section>
    )
}