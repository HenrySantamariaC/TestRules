import React, { useEffect } from 'react';
import { useTimer } from '../../hooks/useTimer';
import { Clock } from 'iconoir-react';
import { useNavigate } from 'react-router-dom';
import { PublicRoutes } from '../../router/routes';
import { useQuestionContext } from '../../providers/QuestionProvider';
import { useTestContext } from '../../providers/TestProvider';

const Timer = () => {
  const { currentMinutes, currentSeconds, isOver } = useTimer('00:00:00:10')
  const { getCorrectAnswers } = useQuestionContext()
  const { updateScore } = useTestContext()
  const navigate = useNavigate()

  useEffect(() => {
    if (isOver) {
      const score = getCorrectAnswers()
      console.log(score)
      updateScore(score)
      navigate(PublicRoutes.SCORE)
    }
  }, [isOver])

  return (
    <div className='flex bg-ui-primary rounded-md px-2 py-1 font-bold w-fit gap-x-1 font-mono'>
      <span>{currentMinutes}</span>
      <span>:</span>
      <span> {currentSeconds}</span>
      <Clock className='w-4' />
    </div>
  );
};

export default Timer;