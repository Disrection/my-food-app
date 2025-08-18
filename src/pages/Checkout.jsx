import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import InputField from '../components/InputField';
import FormGroup from '../components/FormGroup';
import Button from '../components/Button';

export default function Checkout() {
  const { cartItems, totalPrice } = useContext(CartContext);
  const [form, setForm] = useState({ name:'', address:'', phone:'' });

  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const placeOrder = () => {
    alert(`Order placed! Thank you, ${form.name}`);
    // no real payment logic
  };

  return (
    <div className="px-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold my-4">Checkout</h1>
      <FormGroup title="Delivery Info">
        <InputField label="Name"    name="name"    value={form.name}    onChange={handleChange} />
        <InputField label="Address" name="address" value={form.address} onChange={handleChange} />
        <InputField label="Phone"   name="phone"   value={form.phone}   onChange={handleChange} />
      </FormGroup>

      <FormGroup title="Order Summary">
        {cartItems.map(ci => (
          <div key={ci.id} className="flex justify-between py-1">
            <span>{ci.name} x {ci.qty}</span>
            <span>${(ci.price*ci.qty).toFixed(2)}</span>
          </div>
        ))}
        <div className="flex justify-between border-t pt-2 font-semibold">
          <span>Total</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
      </FormGroup>

      <Button onClick={placeOrder} className="w-full">Place Order</Button>
    </div>
  );
}