import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate }
    } = await axios.get(url);
    const requiredData = { confirmed, recovered, deaths, lastUpdate };
    return requiredData;
  } catch (error) {
    console.log(error);
  }
};

export default fetchData;
