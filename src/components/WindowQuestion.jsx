import '../styles/window-question.scss';

const WindowQuestion = ({ weatherData }) => {
  const isOpenWindow =
    weatherData && weatherData.main && weatherData.main.temp > 70;

  return (
    <div>
      {isOpenWindow ? (
        <h1 className='window-answer-yes'>Close your windows!</h1>
      ) : (
        <h1 className='window-answer-no'>Keep your windows open!</h1>
      )}
    </div>
  );
};

export default WindowQuestion;
