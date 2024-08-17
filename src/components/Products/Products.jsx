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


    if (isProductsLoading) {
        return <h2>Loading....</h2>
    }

    if(isProductsError){
        return <h2>Error to fetch data...</h2>
    }

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
                {productData.products.map((product) => (
                    <ProductCard product={product} key={product._id}></ProductCard>
                ))}
            </div>
        </div>
    );
};

export default Products;