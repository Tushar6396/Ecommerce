import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Product(props) {
  const { product } = props;
  return (
    <Card className='product'>
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className='card-img-top' alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <p>{product.name}</p>
        </Link>
        <Card.Text>Price : ${product.price}</Card.Text>
        <Card.Text className='reviews'>{product.numReviews} reviews</Card.Text>
        <Button>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
