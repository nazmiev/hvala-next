import styles from '../page.module.css'
import HeaderEn from '../ui/Header/english'
import HomeSectionGetTipsByCardEnglish from '../ui/HomeSectionGetTipsByCard/english'
import HomeSectionHowWorkSlider from '../ui/HomeSectionHowWorkSlider'
import HomeSectionOneClickReviewsEn from '../ui/HomeSectionOneClickReviews/english'

export default function Home() {
  return (
    <>
      <HeaderEn />
      <main className={styles.main}>
        <HomeSectionOneClickReviewsEn />
        <HomeSectionGetTipsByCardEnglish />
        <HomeSectionHowWorkSlider />
      </main>
    </>
  )
}
