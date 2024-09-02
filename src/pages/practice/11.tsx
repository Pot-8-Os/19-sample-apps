import { NextPage } from "next";


const Page: NextPage = () => {
  
  return (
    <div className='mt-8 mx-auto max-w-4xl'>
      <div className='flex justify-center gap-x-2'>
        <div className="h-12 w-12 rounded-full bg-gray-700"></div>
        <div className="h-12 w-12 rounded-full bg-gray-700"></div>
        <div className="h-12 w-12 rounded-full bg-gray-700"></div>
      </div>
    </div>
  );
};

export default Page;
