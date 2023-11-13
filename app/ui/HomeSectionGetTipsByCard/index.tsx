import Image from 'next/image'
import styles from './HomeSectionGetTipsByCard.module.scss'

export default function HomeSectionGetTipsByCard() {
    return (
        <section className={styles.HomeSectionGetTipsByCard}>
            <div className={styles.container}>
                <article>
                    <h1>Primite bakšiš platnom karticom.</h1>
                    <p>Besplatno za lokale. Bez poreza. Novac </p>
                    <p>se prenosi direktno na račun zaposlenog. Gosti mogu da ocene uslugu i napišu komentare.</p>
                </article>
                <div className={styles.imageContainer}>
                    <Image
                        src="/hvala-banner-704.webp"
                        alt="Get the tip by credit card"
                        width={704}
                        height={558} />
                </div>
                <div className={styles.buttons}>
                    <a className={styles.startGettingTipsButton}>Počni da dobijaš baksis</a>
                    <a href="/restaurant/connect_page?reg=request">Registrujte svoj lokal</a>
                </div>
            </div>
        </section>
    )
}