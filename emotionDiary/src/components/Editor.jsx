import Button from './Button';
import './Editor.css';
import EmotionItem from './EmotionItem';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const emotionList = [
  {
    emotionId: 1,
    emotionName: '최고야!',
  },
  {
    emotionId: 2,
    emotionName: '좋아!',
  },
  {
    emotionId: 3,
    emotionName: '그냥 그래',
  },
  {
    emotionId: 4,
    emotionName: '별로야',
  },
  {
    emotionId: 5,
    emotionName: '완전 별로야',
  },
];

const getStringDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month < 10) {
    month = `0${month}`;
  }
  if (date < 10) {
    date = `0${date}`;
  }

  return `${year}-${month}-${date}`;
};

const Editor = ({ onSubmit, diaryItem }) => {
  const nav = useNavigate();

  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: '',
  });

  const onClickSubmit = () => {
    onSubmit(input);
  };

  useEffect(() => {
    if (diaryItem) {
      setInput({
        ...diaryItem,
        createdDate: new Date(Number(diaryItem.createdDate)),
      });
    }
  }, [diaryItem]);

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === 'createdDate') {
      value = new Date(value);
    }

    setInput({
      ...input,
      [name]: value,
    });
  };

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input
          type="date"
          name="createdDate"
          onChange={onChangeInput}
          value={getStringDate(input.createdDate)}
        />
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              onClick={() => {
                onChangeInput({
                  target: {
                    name: 'emotionId',
                    value: item.emotionId,
                  },
                });
              }}
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === input.emotionId}
            />
          ))}
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea
          placeholder="오늘 하루는 어땠나요?"
          name="content"
          onChange={onChangeInput}
          value={input.content}
        />
      </section>
      <section className="button_section">
        <Button
          text={'취소'}
          onClick={() => {
            nav(-1);
          }}
        />
        <Button type={'POSITIVE'} text={'하루 끝'} onClick={onClickSubmit} />
      </section>
    </div>
  );
};

export default Editor;
