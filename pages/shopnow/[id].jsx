import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import c from "../../styles/Info.module.css";
import { PRODUCTS__DATA } from "../../mocks";
import TagBtn from "../../components/TagButton";
import { ChangeIcon, DiscountIcon, GiftIcon } from "../../assets";
import CartIcon from "../../assets/cart.svg";
import Link from "next/link";
import Head from "next/head";

const ProductInfo = () => {
  const [product, setProduct] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(0);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const filteredProduct = PRODUCTS__DATA?.filter((p) => p.id === +id);
    setProduct(filteredProduct);
  }, [id]);

  const months = ["3 months", "6 months", "12 months", "24 months"];
  const calculatedPrice = (product[0]?.price * 5) / 100 + product[0]?.price;
  const pay_in_installment = Math.round(
    calculatedPrice / product[0]?.dividedpayment
  );

  return (
    <div className={c.product__info__container}>
      {product.map(({ id, image, title, price, label }) => (
        <div key={id}>
          <Head><title>{title}</title></Head>
          <p>
            Products / Shop now / <span className={c.breadcrumb}>{title}</span>
          </p>
          <h1 className={c.product__title}>{title}</h1>

          <div className={c.product__info}>
            <div className={c.image__container}>
              <div className={c.labels__container}>
                {label?.map((Img, index) => (
                  <Img className={c.label} key={index} />
                ))}
              </div>
              <Image src={image} priority alt={title} />
            </div>

            <div className={c.product__details__container}>
              <div className={c.divider}>
                <p>Price</p>
                <h3>${price}</h3>
              </div>
              <div className={`${c.divider} ${c.flex}`}>
                <div>
                  <p>Total price (with markup)</p>
                  <h3>${calculatedPrice}</h3>
                </div>
                <div className={c.flex}>
                  <TagBtn>
                    ${Math.ceil(calculatedPrice / pay_in_installment)}
                  </TagBtn>{" "}
                  <span>x{pay_in_installment}</span>
                </div>
              </div>
              <div className={c.plan__container}>
                {months?.map((btn, inx) => (
                  <button
                    key={inx}
                    onClick={() => setSelectedPlan(inx)}
                    className={selectedPlan === inx ? c.btn__active : c.btn}
                  >
                    {btn}
                  </button>
                ))}
              </div>
              <p className={`${c.markup} ${c.divider}`}>Markup 5%</p>

              <ul className={c.product__characteristic}>
                <p>General Info</p>
                <li>Type: monoblock (classic)</li>
                <li>Standard: 2G, 3G, 4G (LTE), 5G</li>
                <li>Operating system: iOS 14</li>
              </ul>
              <div className={`${c.show__all} ${c.flex}`}>
                <Link href="#seemore">See more</Link>
                <span> &#x2192;</span>
              </div>
            </div>
          </div>
          <h2 className={c.discounts__title}>Discounts</h2>
          <label
            className={`${c.discounts__wrapper} ${c.flex} ${c.divider}`}
            htmlFor="change"
          >
            <ChangeIcon />
            <div>
              <h2>Trade in your old iPhone and get a discount on a new one</h2>
              <p>-$40</p>
            </div>
            <input type="checkbox" name="checkbox" id="change" />
          </label>
          <label
            className={`${c.discounts__wrapper} ${c.flex} ${c.divider}`}
            htmlFor="gift"
          >
            <GiftIcon />
            <div>
              <h2>Handphones for free</h2>
              <p>Apple EarPods</p>
            </div>
            <input type="checkbox" name="checkbox" id="gift" />
          </label>
          <label
            className={`${c.discounts__wrapper} ${c.flex} ${c.divider}`}
            htmlFor="discount"
          >
            <DiscountIcon />
            <div>
              <h2>20% discount for phone</h2>
              <p>Apple EarPods</p>
            </div>
            <input type="checkbox" name="checkbox" id="discount" />
          </label>
          <button className={c.add__to__cart}>
            Add to Cart
          </button>
        </div>
      ))}
      <div className={c.cart__icon__container}>
        <CartIcon className={c.icon}/>
        <h3>Cart</h3>
        <span className={c.items__count}>2</span>
      </div>
    </div>
  );
};

export default ProductInfo;