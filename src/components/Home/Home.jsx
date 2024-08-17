import Products from "../Products/Products";

const Home = () => {
  return (
    <div className="mt-24 min-h-screen space-y-4">
       <h2 className='text-4xl text-center font-bold text-blue-700'>ALL PRODUCTS</h2>
       <Products></Products>
    </div>
  );
};

export default Home;