import Image from 'next/image'
import styles from './HomeSectionGetTipsByCard.module.scss'

export default function HomeSectionGetTipsByCardEnglish() {
    return (
        <section className={styles.HomeSectionGetTipsByCard}>
            <div className={styles.container}>
                <article>
                    <h1>Get the tip by credit card.</h1>
                    <p>Free for businesses. No taxes. Money is transferred directly to the employee&apos;s account. Guests can rate and review your service.</p>
                </article>
                <div className={styles.imageContainer}>
                    <Image
                        src="/hvala-banner-704.webp"
                        alt="Get the tip by credit card"
                        width={704}
                        height={558} />
                </div>
                <div className={styles.buttons}>
                    <a className={styles.startGettingTipsButton}>Start getting tips</a>
                    <a href="/restaurant/connect_page?reg=request">Register your facility</a>
                </div>
            </div>
        </section>
    )
}