export default function handle(req, res) {
    const products = [
        {
            id:1,
            name:"cheese Pizza",
            price: 1000,
            image: "https://www.superhealthykids.com/wp-content/uploads/2021/10/best-veggie-pizza-featured-image-square-2-768x768.jpg.webp",
        },

        {
            id:2,
            name:"Family Deal",
            price: 9000,
            image: "https://pizzatime.co.nz/wp-content/uploads/2021/04/food-deal-600x600.jpg",
        },

        {
            id:3,
            name:"  Capsicum Pizza",
            price: 800,
            image: "https://richpizza.in/wp-content/uploads/2024/08/Onion-and-Capsicum-Pizza-7-inches.jpg",
        },

        {
            id:4,
            name:"olives and pepperoni Pizza",
            price: 1500,
            image: "https://www.ilovelindsay.com/assets/components/phpthumbof/cache/pizza-with-black-olives-and-pepperoni-small.f82724c758f5a7e1142cf0568b85d580.jpg",
        },

    ];

    res.status(200).json(products);
}