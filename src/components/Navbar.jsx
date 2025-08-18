import { Link } from 'react-router-dom';

// Simple navbar with links to pages
export default function Navbar() {
  return (
    <nav className="bg-orange-500 shadow px-4 py-2 flex justify-between">
      <Link to="/" className="font-bold text-xl">FoodDeliveryApp</Link>
      <div className="space-x-4">
        <Link to="/menu" className="hover:text-white">Menu</Link>
        <Link to="/cart"  className="hover:text-white">Cart</Link>
      </div>
    </nav>
  );
}