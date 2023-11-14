import styles from '../page.module.css'
import HeaderEn from '../ui/Header/english'
import HomeSectionGetTipsByCardEnglish from '../ui/HomeSectionGetTipsByCard/english'
import HomeSectionHowWorkSlider from '../ui/HomeSectionHowWorkSlider'

export default function Home() {
  return (
    <>
      <HeaderEn />
      <main className={styles.main}>
        <HomeSectionGetTipsByCardEnglish />
        <HomeSectionHowWorkSlider />
      </main>
    </>
  )
}
