import styles from '@/styles/banner.module.css'

type BannerProps = {
  onClickHandler: () => void
}

const Banner = (props: BannerProps) => {
  return (
    <div className={styles.banner}>
      <h1 className={styles.banner__title}>
        <span className={styles.banner__title_first}>bark</span>
        <span className={styles.banner__title_second}>Finder</span>
      </h1>
      <p className={styles.banner__subtitle}>
        Don&apos;t let your pup-pup feel ruff – fetch the perfect spot for some
        tail-wagging adventures! From paw-some play areas to bark-tastic trails,
        we&apos;ve got you and your furry friend covered!
      </p>
      <button className={styles.banner__button} onClick={props.onClickHandler}>
        Find local parks
      </button>
    </div>
  )
}

export default Banner
