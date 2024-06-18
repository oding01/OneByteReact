import { useNavigate, useSearchParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { DiaryStateContext } from '../App';
import { getStringDate } from './../util/get-string-date';
import useDiary from './../hooks/useDiary';
import Header from '../components/Header';
import Viewer from '../components/Viewer';
import Button from '../components/Button';

const Diary = () => {
  const nav = useNavigate();
  const [params, setParams] = useSearchParams();

  const id = params.get('id');

  const data = useContext(DiaryStateContext);
  const diaryItem = useDiary(id);

  const goEditPage = () => {
    nav(`/edit?id=${id}`);
  };

  return (
    <div>
      <div>
        <Header
          title={` 기록`}
          leftChild={
            <Button
              text={'< 뒤로 가기'}
              onClick={() => {
                nav(-1);
              }}
            />
          }
          rightChild={<Button text={'수정하기'} onClick={goEditPage} />}
        />
      </div>
      <div>
        <Viewer data={diaryItem} />
      </div>
    </div>
  );
};

export default Diary;
