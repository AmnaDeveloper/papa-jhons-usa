export const completeMenu = [
    {
        id: "pizza-1",
        slug: "pepperoni-pizza",
        title: "Large Pepperoni Pizza",
        price: "16.99",
        category: "Pizzas",
        calories: "320 cal/slice",
        description: "Our signature pizza dough topped with premium tomato sauce, real cheese made from mozzarella, and loaded with pepperoni.",
        image: "/images/pepperoni-pizza.webp",
    },
    {
        id: "pizza-2",
        slug: "cheese-pizza",
        title: "Large Cheese Pizza",
        price: "14.99",
        category: "Pizzas",
        calories: "290 cal/slice",
        description: "Simple, yet delicious. Our original dough baked to perfection with signature pizza sauce and real cheese made from mozzarella.",
        image: "/images/cheese-pizza.webp",
    },
    {
        id: "pizza-3",
        slug: "the-works",
        title: "The Works",
        price: "19.99",
        category: "Pizzas",
        calories: "340 cal/slice",
        description: "A masterpiece of hearty, high-quality meats including pepperoni, julienne-cut Canadian bacon, spicy Italian sausage, fresh-cut onions, crisp green peppers, mushrooms, and black olives.",
        image: "/images/the-works.webp",
    },
    {
        id: "side-1",
        slug: "garlic-knots",
        title: "Garlic Knots",
        price: "6.99",
        category: "Sides",
        calories: "110 cal/knot",
        description: "Oven-baked breadsticks, glazed with garlic parmesan sauce.",
        image: "/images/garlic-knots.webp",
    },
    {
        id: "side-2",
        slug: "breadsticks",
        title: "Original Breadsticks",
        price: "5.99",
        category: "Sides",
        calories: "140 cal/stick",
        description: "Oven-baked and served with delicious pizza sauce for dipping.",
        image: "/images/breadsticks.webp",
    },
    {
        id: "papadia-1",
        slug: "philly-cheesesteak-papadia",
        title: "Philly Cheesesteak Papadia",
        price: "8.99",
        category: "Papadias",
        calories: "810 cal",
        description: "Flatbread-style sandwich with Philly sauce, cheese, steak, onions, and green peppers.",
        image: "/images/philly-cheesesteak.webp",
    },
    {
        id: "dessert-1",
        slug: "chocolate-chip-cookie",
        title: "Chocolate Chip Cookie",
        price: "7.99",
        category: "Desserts",
        calories: "190 cal/slice",
        description: "An 8-inch, family-sized chocolate chip cookie cut into 8 slices and served warm.",
        image: "/images/cookie.webp",
    },
    {
        id: "drink-1",
        slug: "pepsi-2-liter",
        title: "2-Liter Pepsi",
        price: "3.99",
        category: "Drinks",
        calories: "150 cal/serving",
        description: "A cold 2-liter bottle of Pepsi, perfectly refreshing.",
        image: "/images/pepsi.webp",
    }
];

export const getMenuItemsByCategory = () => {
    return completeMenu.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {} as Record<string, typeof completeMenu>);
};

export const getMenuItemBySlug = (slug: string) => {
    return completeMenu.find((item) => item.slug === slug);
};
