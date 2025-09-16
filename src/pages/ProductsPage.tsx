import { useEffect, useMemo, useState } from "react";
import { ProductData } from "@/types/Product";
import ProductsList from "../components/ProductsList";
import ProductsNav from "../components/ProductsNav";
import Filters from "../components/Filters";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import { Pagination, PaginationButton, ProductsWrapper } from "../components/Products.styles";
import { ISelectedFilters } from "@/types/Filters";
import { initialFilters } from "../constants/constants";



export default function ProductsPage() {

  const [allProducts, setAllProducts] = useState<ProductData[]>([]);

  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortBy, setSortBy] = useState('Price: High -> Low');
  const [view, setView] = useState<'grid' | 'list'>('list'); // 'grid' or 'list'
  const [currentPage, setCurrentPage] = useState(1);

  const [selectedFilters, setSelectedFilters] = useState<ISelectedFilters>(initialFilters);


  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch('/data/products.json');
        const data = await response.json();
        setAllProducts(data.all);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    getProducts();
  }, []);

  const filteredAndSortedProducts = useMemo(() => {
    let filteredProducts = [...allProducts];

    if (selectedFilters.brands.length > 0) {
      filteredProducts = filteredProducts.filter(p => selectedFilters.brands.includes(p.brand));
    }
    if (selectedFilters.categories.length > 0) {
      filteredProducts = filteredProducts.filter(p => selectedFilters.categories.includes(p.category));
    }
    if (selectedFilters.rating) {
      filteredProducts = filteredProducts.filter(p => p.rating === selectedFilters.rating!);
    }
    if (selectedFilters.discounts.length > 0) {
      filteredProducts = filteredProducts.filter(p => p.sale);
    }
    if (selectedFilters.price) {
      if (selectedFilters.price.includes('+')) {
        const minPrice = Number(selectedFilters.price.replace('+', ''));
        filteredProducts = filteredProducts.filter(p => p.price >= minPrice);
      } else {
        const [minPrice, maxPrice] = selectedFilters.price.split('-').map(Number);
        filteredProducts = filteredProducts.filter(p => p.price >= minPrice && p.price <= maxPrice);
      }
    }

    let sortedProducts = [...filteredProducts];
    if (sortBy === 'Price: High -> Low') {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'Price: Low -> High') {
      sortedProducts.sort((a, b) => a.price - b.price);
    }
    console.log(selectedFilters)
    return sortedProducts;
  }, [allProducts, selectedFilters, sortBy]);

  const totalPages = Math.ceil(filteredAndSortedProducts.length / itemsPerPage);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredAndSortedProducts.slice(startIndex, endIndex);
  }, [filteredAndSortedProducts, currentPage, itemsPerPage]);

  const handleFilterChange = (
    group: keyof ISelectedFilters,
    value: string | number
  ) => {
    console.log(group, value)
    setSelectedFilters(prevFilters => {
      const newFilters = { ...prevFilters };

      if (group === 'brands' || group === 'categories' || group === 'discounts') {
        const currentValues = prevFilters[group] as string[];
        const newValues = currentValues.includes(value as string)
          ? currentValues.filter(item => item !== value)
          : [...currentValues, value as string];
        (newFilters[group] as string[]) = newValues;
      } else {
        (newFilters[group] as number | string | null) = prevFilters[group] === value ? null : value;
      }

      setCurrentPage(1);
      return newFilters;
    });
  };

  const handlePerPageChange = (newValue: number) => {
    setItemsPerPage(newValue);
    setCurrentPage(1); // Reset to first page when items per page changes
  };

  const handleSortByChange = (newValue: string) => {
    setSortBy(newValue);
    setCurrentPage(1); // Reset to first page when sorting changes
  };

  const handleViewChange = (newView: 'grid' | 'list') => {
    setView(newView);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <h2>Products</h2>
      <Breadcrumbs />
      <ProductsNav
        itemsPerPage={itemsPerPage}
        onPerPageChange={handlePerPageChange}
        sortBy={sortBy}
        onSortByChange={handleSortByChange}
        view={view}
        onViewChange={handleViewChange}
      />
      <ProductsWrapper>
        <Filters
          selected={selectedFilters}
          onChange={handleFilterChange}
        />
        <ProductsList products={paginatedProducts} view={view} />
      </ProductsWrapper>
      <Pagination>
        {[...Array(totalPages).keys()].map(num => (
          <PaginationButton
            key={num + 1}
            onClick={() => handlePageChange(num + 1)}
            isActive={currentPage === num + 1}
          >
            {num + 1}
          </PaginationButton>
        ))}
      </Pagination>
    </>
  );
}