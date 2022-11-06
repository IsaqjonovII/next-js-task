import React from 'react';
import Link from "next/link";
import Head from 'next/head';
import c from '../../styles/Home.module.css';

const Products = () => {
  return (
    <div className={c.home__wrapper}>
      <Head>
        <title>Products</title>
      </Head>
      <h1>This is Products page</h1>

      <p>You can see more products <Link href="/shopnow">here</Link> </p>
    </div>
  )
}

export default Products