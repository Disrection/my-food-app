import { useContext } from 'react';
import FoodCard from '../components/FoodCard';
import { items } from '../data/mockData';
import { CartContext } from '../context/CartContext';
import { useState } from 'react';


export default function Menu() {
  const { addToCart } = useContext(CartContext);
  const [filterTag, setFilterTag] = useState("");

  const filteredItems = filterTag
    ? items.filter(item => item.tag === filterTag)
    : items;


  return (
    <div className="px-4">
      <h1 className="text-2xl font-bold my-4">Full Menu</h1>
      {/* Filter Buttons */}
            <div className="mb-4 space-x-2">
        {["Popular", "Spicy", "Sweet", "New"].map(tag => (
          <button
            key={tag}
            onClick={() => setFilterTag(tag)}
            className={`px-3 py-1 rounded-full border ${
              filterTag === tag ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"
            }`}
          >
            {tag}
          </button>
        ))}
        <button
          onClick={() => setFilterTag("")}
          className="px-3 py-1 rounded-full border bg-gray-300 text-black"
        >
          Clear Filter
        </button>
      </div>


      {/* Filter Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {items.map(item => (
          <FoodCard key={item.id} item={item} onAdd={addToCart} />
        ))}
      </div>
    </div>
  );
}