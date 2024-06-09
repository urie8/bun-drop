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

  function removeFromCart(id) {
    var cart = JSON.parse(localStorage.getItem("cart") || "[]");
    var updatedCart = cart.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  function clearCart() {
    localStorage.clear();
  }

  return { getCart, addToCart, removeFromCart, clearCart };
}

export default useCart;
