import { useParams, useSearchParams } from 'react-router-dom';

const Diary = () => {
  const param = useParams();
  const [params, setParams] = useSearchParams();

  const id = params.get('id');

  return <div>{id}번 일기입니다.</div>;
};

export default Diary;
