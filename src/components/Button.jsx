// Reusable button component
export default function Button({ children, onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={
        `bg-green-500 text-white py-2 px-4 rounded 
         hover:bg-green-800 disabled:opacity-50 ${className}`
      }
    >
      {children}
    </button>
  );
}