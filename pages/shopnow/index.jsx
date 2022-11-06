import React from 'react';
import { SearchIcon } from '../../assets';
import c from "../../styles/Style.module.css";
import { PRODUCTS__DATA } from "../../mocks"
import ProductCard from '../../components/Card';
import Head from 'next/head';

const ShopNow = () => {
  return (
    <div className={c.shopnow__page__container}>
      <Head>
        <title>Shop now</title>
      </Head>
      <p><span className={c.breadcrumb}>Products</span> / Shop now</p>
      <h1 className={c.checkout__title} >Checkout</h1>
      <form className={c.input__container}>
        <input type="text" className={c.input} placeholder='Search products' />
        <button className={c.input__search__btn}>
          <SearchIcon />
        </button>
      </form>
      <div className={c.products__container}>
        {
          PRODUCTS__DATA.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))
        }
      </div>
      <div className={c.pagination}>
        <div className={c.chevron__icon}>&#x2190; </div>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>...</li>
        </ul>
        <div className={c.chevron__icon}>&#x2192;</div>
      </div>
    </div>
  )
}

export default ShopNow