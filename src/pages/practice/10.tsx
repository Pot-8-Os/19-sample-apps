import { useQuotesRandom } from "@/hooks/useQuotesRandom";
import { NextPage } from "next";


const Page: NextPage = () => {
  const { currentQuote } = useQuotesRandom();
  
  return (
    <div className='mt-8 mx-auto max-w-4xl'>
      <div className='flex justify-center'>
        <div>
          <h3 className="text-center text-2xl ">{currentQuote}</h3>
        </div>
      </div>
    </div>
  );
};

export default Page;
