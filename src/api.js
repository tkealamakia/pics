import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID iUKvEaw-Gt3EyZInXYY3vzxisJxcjIZBagB9YlKd91M'
    },
    params: {
      query: term 
    }
  });
  return response.data.results;
};

export default searchImages;