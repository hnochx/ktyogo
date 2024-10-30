const IP_URL = 'https://geolocation-db.com/json/';

export const getIp = async () => {
  let ip = '';

  await fetch(IP_URL, { method: 'GET' })
    .then((res) => res.json())
    .then((data) => {
      ip = data.IPv4;
    });

  return ip;
};
