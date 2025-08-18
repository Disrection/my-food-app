// Displays clickable categories
export default function CategoryList({ categories, selected, onSelect }) {
  return (
    <div className="flex space-x-4 overflow-x-auto py-2">
      {categories.map(cat => (
        <button
          key={cat.id}
          onClick={() => onSelect(cat.id)}
          className={
            `px-4 py-2 rounded-full border 
            ${cat.id === selected 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-100 text-gray-700'}`
          }
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}