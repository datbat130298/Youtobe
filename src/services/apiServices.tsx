import axios from "axios";

const getData = async () => {
  const response = await axios.get(`https://youtube342.p.rapidapi.com/videos`);
  return response.data;
};

export { getData };
