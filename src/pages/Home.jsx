import { useState, useEffect, useContext } from 'react';
import Banner from '../components/Banner';
import CategoryList from '../components/CategoryList';
import FoodCard from '../components/FoodCard';
import { categories, items } from '../data/mockData';
import { CartContext } from '../context/CartContext';

export default function Home() {
  const [selectedCat, setSelectedCat] = useState(null);
  const [filtered, setFiltered]   = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    // on mount or category change, filter items
    setFiltered(
      selectedCat
        ? items.filter(i => i.category === selectedCat)
        : items
    );
  }, [selectedCat]);

  return (
    <div className="px-4">
      <Banner />                    {/* promotions/offers */}
      <CategoryList
        categories={categories}
        selected={selectedCat}
        onSelect={setSelectedCat}
      />
      <h2 className="text-xl font-semibold mt-4">Featured Items</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-4">
        {filtered.map(item => (
          <FoodCard key={item.id} item={item} onAdd={addToCart} />
        ))}
      </div>
    </div>
  );
}