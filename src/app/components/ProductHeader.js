import { useRouter } from 'next/navigation';
import { FaShoppingCart } from "react-icons/fa";

export default function ProductsHeader({ cart }) {
  const router = useRouter();

  const handleNavigateToCart = () => {
    router.push('/cart');
  };

  return (
    <div className="sticky top-0 z-50 flex flex-row justify-between items-center">
      <h1 className="text-3xl font-bold mb-8">Products</h1>
      <button
        className="text-xl font-bold mb-8 bg-blue-500 text-white py-2 px-4 rounded"
        onClick={handleNavigateToCart}
      >
        
        <span><FaShoppingCart/>  View Cart ({cart.length})</span>
      </button>
    </div>
  );
}
