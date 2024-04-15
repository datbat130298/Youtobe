import axios from "axios";

const getTrendingService = async () => {
  const options = {
    method: 'GET',
    url: 'https://yt-api.p.rapidapi.com/trending',
    params: {geo: 'US'},
    headers: {
      'X-RapidAPI-Key': '00f94f5efemsh8a34b1a22a8c805p1101c7jsna1eed55e6bcc',
      'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
    }
  };
  const response = await axios.request(options);
  return response.data;
};

export { getTrendingService };
