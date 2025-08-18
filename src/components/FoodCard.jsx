import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from './Button';

// Card for food items: image, name, price, add to cart
export default function FoodCard({ item, onAdd }) {
  return (
    <Link to={`/item/${item.id}`}>
      <motion.div 
      className="relative border rounded-lg overflow-hidden shadow-sm"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 300 }}>

      {/* Diagonal Ribbon */}
      {item.tag && (
        <div
          className="absolute top-0 right-0 transform rotate-60 bg-red-500 text-white text-xs font-bold px-2 py-1 shadow-md"
          style={{ transformOrigin: 'top right' }}>
          {item.tag}
        </div>
      )}

      {/* Image */}
      <img src={item.img} alt={item.name} className="w-full h-32 object-cover" />

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-gray-600">${item.price.toFixed(2)}</p>
        <Button onClick={e => { e.preventDefault(); onAdd(item) }} className="mt-2 w-full">
          Add to Cart
        </Button>
      </div>
    </motion.div>
    </Link >
  );
}
