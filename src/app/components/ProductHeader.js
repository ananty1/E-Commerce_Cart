import { useRouter } from 'next/navigation';
import { FaShoppingCart, FaStore } from "react-icons/fa";

export default function ProductsHeader({ cart }) {
  const router = useRouter();

  const handleNavigateToCart = () => {
    router.push('/cart');
  };

  return (
    <div className="sticky top-0 z-50 flex flex-col sm:flex-row justify-between sm:justify-around items-center p-4">
      <div className="flex items-center mb-4 sm:mb-0">
        <FaStore className="text-3xl text-blue-500 mr-2" />
        <h1 className="text-3xl font-bold mb-0">Products</h1>
      </div>
      <button
        className="text-xl font-bold bg-blue-500 text-white py-2 px-4 rounded flex items-center"
        onClick={handleNavigateToCart}
      >
        <FaShoppingCart className="text-xl mr-2" />
        <span>Cart ({cart.length})</span>
      </button>
    </div>
   
  );
}
