
export default function Page() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Welcome to My Shop</h1>
        <p className="mt-4">Discover the best products!</p>
        <a href="/products" className="mt-8 inline-block bg-blue-500 text-white py-2 px-4 rounded">
          View Products
        </a>
      </div>
    </div>
  );
}
