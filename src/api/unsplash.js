import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID e8a7afe773ed9fb8a3eabd81bfca00a3741f901464324b00b78dde67149e0bbe'
  }

});
