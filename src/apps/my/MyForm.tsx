import { useContext, useState } from 'react';

const MyForm = () => {
  const [name, setName] = useState('');

  return (
    <>
      <form>
        <input onChange={(e) => setName(e.target.value)} />
      </form>
    </>
  );
};

export default MyForm;
