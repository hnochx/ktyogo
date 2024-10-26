export const getIp = async () => {
  let ip = '';

  await fetch('https://geolocation-db.com/json/', { method: 'GET' })
    .then((res) => res.json())
    .then((data) => {
      ip = data.IPv4;
    });

  return ip;
};
