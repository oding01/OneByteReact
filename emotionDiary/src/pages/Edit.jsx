import { useSearchParams } from 'react-router-dom';

const Edit = () => {
  const [params, setParams] = useSearchParams();
  const id = params.get('id');

  return <>{id}번 일기입니다.</>;
};

export default Edit;
