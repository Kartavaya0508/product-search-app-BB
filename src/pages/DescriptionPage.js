import React from 'react';
import { Box, VStack, SimpleGrid, Button, Flex } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import ProductCard from '../components/ProductCard';

const mockProducts = [
  { id: 1, name: 'HP Omen G6 6GB RAM 526GM ROM', rating: 4.5, price: 20000, source: 'Amazon and Flipkart', inStock: true, image: 'https://via.placeholder.com/300' },
  { id: 2, name: 'HP Omen G6 6GB RAM 526GM ROM', rating: 4.5, price: 20000, source: 'Amazon and Flipkart', inStock: true, image: 'https://via.placeholder.com/300' },
  { id: 3, name: 'HP Omen G6 6GB RAM 526GM ROM', rating: 4.5, price: 20000, source: 'Amazon and Flipkart', inStock: true, image: 'https://via.placeholder.com/300' },
];

function DescriptionPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search).get('query');

  const handleSearch = (newQuery) => {
    navigate(`/description?query=${newQuery}`);
  };

  return (
    <VStack spacing={8} align="stretch">
      <SearchBar onSearch={handleSearch} />
      <Flex wrap="wrap" gap={2}>
        <Button colorScheme="teal">Amazon</Button>
        <Button colorScheme="teal">{'>'}20000$</Button>
        <Button colorScheme="teal">HP, Asus</Button>
        <Button variant="outline">Clear filters</Button>
      </Flex>
      <SimpleGrid columns={[1, null, 3]} spacing={10}>
        {mockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </VStack>
  );
}

export default DescriptionPage;