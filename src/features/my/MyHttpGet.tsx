import React, {useState} from 'react';

const MyHttpGet = () => {
  const [httpBinResult, setHttpBinResult] = useState('NA');
  const requestHttp = () => {
    fetch('http://httpbin.org/uuid')
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setHttpBinResult(data['uuid']);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>HttpBin date: {httpBinResult}</h2>
      <button onClick={requestHttp}>HttpBin</button>
    </div>
  );
};

export default MyHttpGet;
