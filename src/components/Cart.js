import React, { useContext, useState } from 'react';
import '../styles/Cart.css';
import { CartContext } from '../context';

function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  //useContext
  const { cart, updateCart } = useContext(CartContext);
  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
  );
  return isOpen ? (
    <div className="lmj-cart">
      <button
        onClick={() => setIsOpen(false)}
        className="lmj-cart-toggle-button"
      >
        Fermer le panier
      </button>
      {cart.length > 0 ? (
        <div>
          <h2>Panier</h2>
          <div>
            {cart.map(({ name, amount, price }, index) => (
              <div key={`${name}-${index}`}>
                {name} {price}€ * {amount}
              </div>
            ))}
          </div>
          <h3>Total:{total}€</h3>
          <button onClick={() => updateCart([])}>Vider Votre Panier</button>
        </div>
      ) : (
        <div>Votre panier est vide</div>
      )}
    </div>
  ) : (
    <div className="lmj-cart-closed">
      <button
        onClick={() => setIsOpen(true)}
        className="lmj-cart-toggle-button"
      >
        Ouvrir le panier
      </button>
    </div>
  );
}

export default Cart;
