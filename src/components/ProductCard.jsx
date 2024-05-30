function ProductCard(props) {
  return (
    <div className="productCard">
      <img className="productCard-image" src={props.image}></img>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <h4>${props.price}</h4>
      <button className="button-30">Add to cart</button>
    </div>
  );
}

export default ProductCard;
