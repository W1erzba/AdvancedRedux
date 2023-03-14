import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
	{
		title: 'Wayagu beff',
		price: 200,
		description: 'The best beff quality',
		id: Math.random() * 99,
	},
	{
		title: 'Foie Gras',
		price: 26,
		description: 'The best liver quality',
		id: Math.random() * 99,
	},
	{
		title: 'Anchois',
		price: 5,
		description: 'The best sea condiment quality',
		id: Math.random() * 99,
	},
	{
		title: 'Saffron',
		price: 52,
		description: 'The best plant condiment quality',
		id: Math.random() * 99,
	},
];

const Products = (props) => {
	return (
		<section className={classes.products}>
			<h2>Buy your favorite products</h2>
			<ul>
				{DUMMY_PRODUCTS.map((product) => (
					<ProductItem
						key={product.id}
						id={product.id}
						title={product.title}
						price={product.price}
						description={product.description}
					/>
				))}
			</ul>
		</section>
	);
};

export default Products;
