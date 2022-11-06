import { HomeIcon, OrderIcon, ProductsIcon, StarIcon, CartIcon } from "../assets"

export const ROUTES_LINK = [
    {
        id: 0,
        title: "Home",
        link: "/",
        icon: HomeIcon,
    },
    {
        id: 1,
        title: "Orders",
        link: "/orders",
        icon: OrderIcon,
    },
    {
        id: 2,
        title: "Products",
        link: "/products",
        icon: ProductsIcon,
    },
    {
        id: 3,
        title: "Favourites",
        link: "/starred",
        icon: StarIcon
    },
    {
        id: 4,
        title: "Shop",
        link: "/shopnow",
        icon: CartIcon
    },
]