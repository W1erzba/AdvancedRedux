import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
	{ title: 'Wayagu beff', quantity: 1, total: 200, price: 200 },
	{ title: 'Foie Gras', quantity: 2, total: 52, price: 26 },
	{ title: 'Anchois', quantity: 3, total: 15, price: 5 },
	{ title: 'Saffron', quantity: 3, total: 156, price: 52 },
];

const Products = (props) => {
	return (
		<section className={classes.products}>
			<h2>Buy your favorite products</h2>
			<ul>
				{DUMMY_PRODUCTS.map((product) => (
					<ProductItem
						key={product.title}
						title={product.title}
						price={product.price}
						description='This is a first product - amazing!'
					/>
				))}
			</ul>
		</section>
	);
};

export default Products;
