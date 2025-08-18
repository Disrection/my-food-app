import { useParams, useNavigate } from 'react-router-dom'
import { items } from '../data/mockData'
import { motion } from 'framer-motion'
import Button from '../components/Button'

export default function ItemDetail() {
  const { id } = useParams()
  const item  = items.find(i => i.id === +id)
  const nav   = useNavigate()

  if (!item) return <p className="p-4">Item not found</p>

  return (
    <motion.div
      className="px-4 max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <button onClick={() => nav(-1)} className="mt-4 text-blue-600">&larr; Back</button>
      <div className="flex flex-col md:flex-row my-6">
        <img src={item.img} alt={item.name}
             className="w-full md:w-1/2 h-64 object-cover rounded"/>
        <div className="md:ml-6 mt-4 md:mt-0">
          <h1 className="text-3xl font-bold">{item.name}</h1>
          <p className="text-gray-700 mt-2">{item.origin}</p>
          <p className="mt-1"><strong>Cook Time:</strong> {item.cookTime}</p>
          <div className="flex items-center mt-2">
            <span className="font-semibold mr-2">Rating:</span>
            <span className="text-yellow-500">{'★'.repeat(Math.floor(item.rating))}</span>
            <span className="ml-1 text-gray-600">({item.rating})</span>
          </div>
          <Button onClick={() => nav('/cart')} className="mt-4">Add to Cart</Button>
        </div>
      </div>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Reviews</h2>
        {item.reviews.map((r,i) => (
          <motion.div
            key={i}
            className="border-b py-2"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0,  opacity: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <p className="font-medium">{r.user}</p>
            <p className="text-gray-700">{r.comment}</p>
          </motion.div>
        ))}
      </section>
    </motion.div>
  )
}