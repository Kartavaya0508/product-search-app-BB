import React from 'react';
import { Box, Image, Text, Button, Flex, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
      <Image src={product.image} alt={product.name} objectFit="cover" height="200px" width="100%" />
      <Stack p={4}>
        <Text fontWeight="bold" fontSize="xl">{product.name}</Text>
        <Text>{product.rating} ★</Text>
        <Text fontSize="2xl" fontWeight="bold">${product.price}</Text>
        <Text fontSize="sm">Top Results From: {product.source}</Text>
        <Text color={product.inStock ? 'green.500' : 'red.500'}>
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </Text>
        <Flex justify="space-between" align="center" mt={2}>
          <Link to={`/details/${product.id}`}>
            <Button colorScheme="teal">More Information</Button>
          </Link>
          <Button variant="outline">See Youtube Review</Button>
        </Flex>
      </Stack>
    </Box>
  );
}

export default ProductCard;