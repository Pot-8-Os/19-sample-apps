import { useEffect, useState } from "react";

export const QUOTES = [
  '人生に失敗がないと、人生を失敗する',
  '夢を見ることができれば、それは実現できる',
  '行動の起点は、すべて夢にある。',
  '習慣は、第二の正確である',
  '唯一の失敗は、挑戦しなかったことである',
];

type UseQuotesRandom = ( ) => {
  currentQuote: string;
}

export const useQuotesRandom = () => {
  const [currentQuote, setCurrentQuote] = useState('');

  useEffect( () => {
    const randomIndex = Math.floor(Math.random() * QUOTES.length);
    setCurrentQuote(QUOTES[randomIndex]);

  },[]);
  
  return{ currentQuote}
}