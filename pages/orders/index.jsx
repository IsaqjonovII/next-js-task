import Head from "next/head"
import Link from "next/link";
import c from '../../styles/Home.module.css';

const Orders = () => {
  return (
    <div className={c.home__wrapper}>
      <Head>
        <title>Orders</title>
      </Head>
      <div>
        <p>You can see more products <Link href="/shopnow">here</Link> </p>
      </div>
    </div>
  )
}

export default Orders