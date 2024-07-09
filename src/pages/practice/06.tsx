import Button from '@/components/common/parts/Button';
import { useDisplayFeedback } from '@/hooks/useDisplayFeedback';
import { NextPage } from 'next';

const Page: NextPage = () => {
  const { feedbackList, handleInputChange, handleSubmit, inputValue} = useDisplayFeedback();

  return (
    <div className='mt-8 mx-auto max-w-4x'>
      <div className='flex justify-center'>
        <div>
          <textarea
            className='border px-3 py-2 rounded-sm'
            placeholder='フィードバックを入力してください'
            value={inputValue}
            onChange={handleInputChange}
            />
          <div className='mt-4 flex justify-center'>
            <Button onClick={handleSubmit} label='送信する' variant='primary' />
          </div>
          <div className='mt-2'>
            {/* {feedbackList.map((feedback,index) => {
                return <li key={index}>{feedback}</li>;
            })} */}
            {feedbackList.map((feedback,index) => (
              <li key={index}>{feedback}</li>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
