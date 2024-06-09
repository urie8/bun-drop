import useCart from "../hooks/useCart";
function OrderCard(props) {
  const totalPrice = props.price * props.amount;
  return (
    <div className="orderCard">
      <img className="orderCard-image" src={props.image}></img>
      <h2>{props.title}</h2>
      <h4>{props.amount}</h4>
      <button className="increase-amount-button" onClick={props.onIncrease}>
        +
      </button>
      <button className="decrease-amount-button" onClick={props.onDecrease}>
        -
      </button>
      <h4>${totalPrice}</h4>
      <button className="delete-button" onClick={props.onDelete}>
        <img
          className="delete-button-img"
          src="src/images/Trash-Can-icon.png"
        ></img>
      </button>
    </div>
  );
}
export default OrderCard;
