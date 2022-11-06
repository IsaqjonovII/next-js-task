import Link from 'next/link';
import Head from 'next/head';
import c from '../../styles/Home.module.css';

const LikedProducts = () => {
  return (
    <div className={c.home__wrapper}>
      <Head>
        <title>Favourites</title>
      </Head>
      <p>You can see more products <Link href="/shopnow">here</Link> </p>
    </div>
  )
}

export default LikedProducts