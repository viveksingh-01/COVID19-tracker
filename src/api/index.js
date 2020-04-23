import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

const fetchData = async () => {
  try {
    const data = await axios.get(url);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchData;
