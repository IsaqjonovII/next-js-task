import OrderIcon from "../assets/order.svg";
import ProductsIcon from "../assets/products.svg";
import StarIcon from "../assets/star.svg";
import CartIcon from "../assets/cart.svg"
import Home from "../assets/home.svg"

export const ROUTES_LINK = [
    {
        id: 0,
        title: "Home",
        link: "/",
        icon: <Home />,
    },
    {
        id: 1,
        title: "Orders",
        link: "/orders",
        icon: <OrderIcon />,
    },
    {
        id: 2,
        title: "Products",
        link: "/products",
        icon: <ProductsIcon />,
    },
    {
        id: 3,
        title: "Favourites",
        link: "/starred",
        icon: <StarIcon />
    },
    {
        id: 4,
        title: "Shop",
        link: "/shopnow",
        icon: <CartIcon />
    },
]