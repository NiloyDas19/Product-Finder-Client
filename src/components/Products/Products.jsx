import { useState } from "react";
import useAxiosBase from "../../hooks/useAxiosBase";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "./ProductCard";

const Products = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedCategory, setSelectedBCategory] = useState('');
    const [priceRange, setPriceRange] = useState('');
    const [sortOption, setSortOption] = useState('');
    const axiosBase = useAxiosBase();

    const { data: productData, isLoading: isProductsLoading, isError: isProductsError } = useQuery({
        queryKey: ['products', currentPage, searchQuery, selectedBrand, selectedCategory, priceRange, sortOption],
        queryFn: async () => {
            const params = new URLSearchParams({
                page: currentPage,
                limit: 12,
                search: searchQuery,
                brand: selectedBrand,
                category: selectedCategory,
                priceRange,
                sort: sortOption
            }).toString();
            const response = await axiosBase.get(`/products?${params}`);
            return response.data;
        }
    });

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (productData && currentPage < productData.pagination.totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };


    if (isProductsLoading) {
        return <h2>Loading....</h2>
    }

    if (isProductsError) {
        return <h2>Error to fetch data...</h2>
    }

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
                {productData.products.map((product) => (
                    <ProductCard product={product} key={product._id}></ProductCard>
                ))}
            </div>

            {productData.products.length > 0 && (
                <div className="flex flex-col items-center">
                    <div className="flex justify-between items-center w-full mb-4">
                        <button
                            className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400"
                            onClick={handlePrevious}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {[...Array(productData.pagination.totalPages)].map((_, index) => (
                                <button
                                    key={index + 1}
                                    className={`px-3 py-1 rounded-lg ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black hover:bg-gray-300'}`}
                                    onClick={() => handlePageChange(index + 1)}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                        <button
                            className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400"
                            onClick={handleNext}
                            disabled={currentPage === productData.pagination.totalPages}
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Products;