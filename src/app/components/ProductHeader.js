import { useRouter } from 'next/navigation';
import { FaShoppingCart, FaStore } from "react-icons/fa";

export default function ProductsHeader({ cart }) {
  const router = useRouter();

  const handleNavigateToCart = () => {
    router.push('/cart');
  };

  return (
    <div className="sticky top-0 z-50 flex flex-row justify-around items-center">
      <div className="flex items-center">
        <FaStore className="text-3xl text-blue-500 mr-2" />
        <h1 className="text-3xl font-bold mb-0">Products</h1>
      </div>
      <button
        className="text-xl font-bold mb-8 bg-blue-500 text-white py-2 px-4 rounded"
        onClick={handleNavigateToCart}
      >
        <div className="flex items-center">
        <FaShoppingCart className="text-xl  mr-2" />
        <h1 className="text-xl font-bold mb-0">Cart ({cart.length})</h1>
      </div>
        
      </button>
    </div>
  );
}
