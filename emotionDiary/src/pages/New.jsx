import Button from '../components/Button';
import Header from '../components/Header';
import Editor from '../components/Editor';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { DiaryDispatchContext } from '../App';

const New = () => {
  const nav = useNavigate();
  const { onCreate } = useContext(DiaryDispatchContext);

  const onSubmit = (input) => {
    onCreate(input.createdDate.getTime(), input.emotionId, input.content);
    nav('/', { replace: true });
  };

  return (
    <div>
      <div>
        <Header
          title={'새 일기 쓰기'}
          leftChild={
            <Button
              text={'< 뒤로 가기'}
              onClick={() => {
                nav(-1);
              }}
            />
          }
        />
      </div>
      <div>
        <Editor onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default New;
