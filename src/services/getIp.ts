import axios from 'axios';

const IP_URL = 'http://ip.jsontest.com/';

export const getIp = async () => {
  try {
    const res = await axios.get(IP_URL);
    return res.data.ip;
  } catch (err) {
    alert(`IP ERROR : ${err}`);
  }
};
