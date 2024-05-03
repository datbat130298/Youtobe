import axios from "axios";

const getHomeFeedService = async () => {
  const options = {
    method: "GET",
    url: "https://yt-api.p.rapidapi.com/home",
    headers: {
      "X-RapidAPI-Key": "36319421ebmsh3284b091ae66d9ep11ddeajsnb52e7d7c62d4",
      "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
    },
  };
  const response = await axios.request(options);
  return response.data;
};

const searchService = async ({ query = "" }) => {
  const options = {
    method: "GET",
    url: "https://yt-api.p.rapidapi.com/search",
    params: { query: query },
    headers: {
      "X-RapidAPI-Key": "36319421ebmsh3284b091ae66d9ep11ddeajsnb52e7d7c62d4",
      "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
    },
  };
  const response = await axios.request(options);
  return response.data;
};

export { getHomeFeedService, searchService };
