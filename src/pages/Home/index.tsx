import React, { FC, useEffect, useState } from 'react';
import api from '../../services/Axios';

const Home: FC = () => {
  const [data, setData] = useState();

  useEffect(() => {
    (async () => {
      const user = await api.get('user');

      console.log(user.data);
    })();
  }, []);

  return (
    <h1>Home</h1>
  );
}

export default Home;
