import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/?';



export const  fetchImages = async (currentPage, value) => {
      const searchParams = new URLSearchParams({
        q: value,
        key: '40004396-3f118f212ef405fd0c3e518af',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: currentPage,
        per_page: 12,
      });

    const response = await axios.get(`${searchParams}`);
  
      return response.data;
    };