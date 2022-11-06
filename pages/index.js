import Head from 'next/head';
import Link from 'next/link';
import c from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={c.home__wrapper}>
     <Head>
        <title>Home | qanaqadur.com</title>
      </Head>
      This is home page. You can see more products <Link href="/shopnow">here</Link>
    </div>
  )
}
