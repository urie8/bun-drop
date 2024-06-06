import useCart from "../hooks/useCart";
function ProductCard(props) {
  const { addToCart } = useCart();

  function addItemToCart() {
    let product = {
      id: props.id,
      img: props.image,
      title: props.title,
      description: props.description,
      price: props.price,
    };

    addToCart(product);
  }

  return (
    <div className="productCard">
      <img className="productCard-image" src={props.image}></img>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <h4>${props.price}</h4>
      <button className="button-30" onClick={() => addItemToCart()}>
        Add to cart
      </button>
    </div>
  );
}

export default ProductCard;
