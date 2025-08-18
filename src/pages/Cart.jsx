import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Button from '../components/Button';

export default function Cart() {
  const { cartItems, updateQty, removeFromCart, totalPrice } = useContext(CartContext);

  return (
    <div className="px-4">
      <h1 className="text-2xl font-bold my-4">Your Cart</h1>
      {cartItems.length === 0 && <p>Cart is empty</p>}
      {cartItems.map(ci => (
        <div key={ci.id} className="flex items-center mb-4">
          <img src={ci.img} alt={ci.name} className="w-16 h-16 object-cover rounded" />
          <div className="ml-4 flex-1">
            <h3 className="font-semibold">{ci.name}</h3>
            <div className="flex items-center space-x-2 mt-1">
              <button onClick={() => updateQty(ci.id, ci.qty - 1)} disabled={ci.qty<=1}>-</button>
              <span>{ci.qty}</span>
              <button onClick={() => updateQty(ci.id, ci.qty + 1)}>+</button>
            </div>
          </div>
          <p className="w-20">${(ci.price * ci.qty).toFixed(2)}</p>
          <button onClick={() => removeFromCart(ci.id)} className="text-red-600 ml-4">
            Remove
          </button>
        </div>
      ))}
      {cartItems.length > 0 && (
        <div className="mt-6">
          <p className="text-lg font-semibold">Total: ${totalPrice.toFixed(2)}</p>
          <Button onClick={() => window.location.href = '/checkout'} className="mt-2">
            Checkout
          </Button>
        </div>
      )}
    </div>
  );
}