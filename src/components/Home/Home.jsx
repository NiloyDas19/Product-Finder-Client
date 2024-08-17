import Products from "../Products/Products";

const Home = () => {
  return (
    <div className="mt-20 min-h-screen">
       <h2 className='text-4xl text-center font-bold text-blue-700'>ALL PRODUCTS</h2>
       <Products></Products>
    </div>
  );
};

export default Home;