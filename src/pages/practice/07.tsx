import { NextPage } from 'next';
import { ChangeEvent, useState } from 'react';

const Page: NextPage = () => {
  const [celsius, setCelsius] = useState(0);
  const handleChange =  (e: ChangeEvent<HTMLInputElement>) => {
    setCelsius(Number(e.target.value));
  };

  const convertFromCelsiusToFahrenheit = (celsius: number) => {
    return (celsius * 9) / 5 + 32;
  }; 


  return (
    <div className='mt-8 mx-auto max-w-4xl'>
      <div className='flex justify-center'>
        <div>
          <div className='flex items-center gap-x-2 mb-2'>
            <label htmlFor='celsius'>摂氏温度：</label>
            <input className='border outline-none px-2 py-1 rounded-md' id="celsius" type='number' 
              onChange={handleChange}
            />
          </div>
          <p>華氏温度：{convertFromCelsiusToFahrenheit(celsius)}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
