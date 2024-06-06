function useCart() {
  function getCart() {
    // Get the cart from local storage
    return JSON.parse(localStorage.getItem("cart") || "[]");
  }

  function addToCart(item) {
    var cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function removeFromCart(item) {}

  function clearCart() {
    localStorage.clear();
  }

  return { getCart, addToCart, removeFromCart, clearCart };
}

export default useCart;
