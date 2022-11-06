import Link from "next/link";
import TagBtn from "../TagButton";
import c from "./Style.module.css";
import Image from "next/image";

const ProductCard = ({ id, title, image, price, dividedpayment, label }) => {
    const pay_in_installment = Math.round(price / dividedpayment);
    return (
        <div className={c.card__container}>
            <Link href={"/shopnow/" + id} id="link">
                <div className={c.image__container}>
                    <div className={c.labels__container}>
                        {
                            label?.map((Img, index) => (
                                <Img className={c.label} key={index}/>
                            ))
                        }
                    </div>
                    <Image className={c.product__img} src={image} priority alt={title} />
                </div>
                <p className={c.product__title}>{title}</p>
                <h3>${price}</h3>
                <div className={c.btn__container}>
                    <TagBtn>${dividedpayment}</TagBtn>
                    <span className={c.price__divided}>x{pay_in_installment}</span>
                </div>
            </Link>
        </div>
    )
}

export default ProductCard
