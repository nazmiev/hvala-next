import styles from './page.module.css'
import Header from './ui/Header'
import HomeSectionGetTipsByCard from './ui/HomeSectionGetTipsByCard'
import HomeSectionHowWorkSlider from './ui/HomeSectionHowWorkSlider'

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <HomeSectionGetTipsByCard />
        <HomeSectionHowWorkSlider />
      </main>
    </>
  )
}
