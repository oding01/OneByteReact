import './Viewer.css';
import { getEmotionImage } from '../util/get-emotion-image';

const Viewer = ({ emotionId, content }) => {
  return (
    <div className="Viewer">
      <section className={`emotion_section emotion_section_${emotionId}`}>
        <h4>그 날의 감정</h4>
        <img src={getEmotionImage(emotionId)} />
      </section>
      <section className="content_section">
        <h4>그 날의 일기</h4>
        <textarea>{content}</textarea>
      </section>
    </div>
  );
};

export default Viewer;
