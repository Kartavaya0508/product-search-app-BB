import React from 'react';
import { Box, VStack, Image, Text, Heading, SimpleGrid, Button, Flex, Grid } from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

const mockProductDetails = {
  id: 1,
  name: 'HP Omen G6',
  image: 'https://via.placeholder.com/500',
  specs: '12th Gen Intel Core i3-1215U Processor/8GB/512GB SSD/Intel UHD Graphics/15.6"(39.62cm) FHD/Windows 11 + MSO\'21/15 Month McAfee/Spill-Resistant KB/Grey/1.48kg',
  youtubeTranscription: '12th Gen Intel Core i3-1215U Processor/8GB/512GB SSD/Intel UHD Graphics/15.6"(39.62cm) FHD/Windows 11 + MSO\'21/15 Month McAfee/Spill-Resistant KB/Grey/1.48kg',
  recommendedVideos: [
    { id: 1, title: 'HP Omen G6 Review', thumbnail: 'https://via.placeholder.com/120x68' },
    { id: 2, title: 'HP Omen G6 vs Competition', thumbnail: 'https://via.placeholder.com/120x68' },
    { id: 3, title: 'HP Omen G6 Gaming Test', thumbnail: 'https://via.placeholder.com/120x68' },
  ]
};

function RecommendedVideoCard({ video }) {
  return (
    <Flex alignItems="center" p={2} borderWidth="1px" borderRadius="md">
      <Image src={video.thumbnail} alt={video.title} width="120px" height="68px" objectFit="cover" mr={3} />
      <Text fontSize="sm" fontWeight="medium">{video.title}</Text>
    </Flex>
  );
}

function DetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSearch = (query) => {
    navigate(`/description?query=${query}`);
  };

  return (
    <VStack spacing={8} align="stretch">
      <SearchBar onSearch={handleSearch} />
      <SimpleGrid columns={[1, null, 2]} spacing={10}>
        <Image src={mockProductDetails.image} alt={mockProductDetails.name} objectFit="cover" />
        <Box>
          <Heading as="h1" size="2xl" mb={4}>{mockProductDetails.name}</Heading>
          <Text fontWeight="bold" mb={2}>Specifications:</Text>
          <Text mb={4}>{mockProductDetails.specs}</Text>
          <Text fontWeight="bold" mb={2}>Youtube Transcription:</Text>
          <Text mb={4}>{mockProductDetails.youtubeTranscription}</Text>
          <Text fontWeight="bold" mb={2}>Recommended Videos:</Text>
          <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={4} mb={4}>
            {mockProductDetails.recommendedVideos.map((video) => (
              <RecommendedVideoCard key={video.id} video={video} />
            ))}
          </Grid>
          <Flex gap={2}>
            <Button colorScheme="teal">Youtube</Button>
            <Button colorScheme="teal">Website</Button>
          </Flex>
        </Box>
      </SimpleGrid>
    </VStack>
  );
}

export default DetailsPage;