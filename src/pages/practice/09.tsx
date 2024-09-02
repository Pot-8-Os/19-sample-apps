import { useDigitalClock } from "@/hooks/useDigitalClock";
import { NextPage } from "next";

const Page: NextPage = () => {
  const { currentTime } = useDigitalClock();

  return (
    <div className='mt-8 mx-auto max-w-4xl'>
      <div className='flex justify-center'>
        <div>
          <h3 className="text-center text-2xl ">{currentTime.toLocaleTimeString()}</h3>
        </div>
      </div>
    </div>
  );
};

export default Page;
