import React from 'react';
import { useTimer } from './useTimer';
import { Clock } from 'iconoir-react';
import { useNavigate } from 'react-router-dom';
import { PublicRoutes } from '../router/routes';

const Timer = () => {
  const { currentMinutes, currentSeconds, isOver } = useTimer('00:00:00:10')
  const navigate = useNavigate()

  return (
    <div className='flex bg-ui-primary rounded-md px-2 py-1 font-bold w-fit gap-x-1 font-mono'>
      {isOver && navigate(PublicRoutes.SCORE)}
      <span>{currentMinutes}</span>
      <span>:</span>
      <span> {currentSeconds}</span>
      <Clock className='w-4' />
    </div>
  );
};

export default Timer;