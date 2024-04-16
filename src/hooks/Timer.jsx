import React from 'react';
import { useTimer } from './useTimer';
import { TimerSolid } from 'iconoir-react';
import { useNavigate } from 'react-router-dom';
import { PublicRoutes } from '../router/routes';

const Timer = () => {
  const { currentMinutes, currentSeconds, isOver } = useTimer('00:00:00:10')
  const navigate = useNavigate()

  return (
    <div className='flex justify-between items-center my-4 px-4 py-2 text-lg bg-ui-colors-neutral rounded-xl'>
      { isOver && navigate(PublicRoutes.ANSWERS) }
      <span>Tiempo restante</span>
      <div className='flex px-2 bg-ui-colors-primary w-fit gap-x-1 font-mono rounded-lg '>
        <TimerSolid className='w-4' />
        <span>{currentMinutes}</span>
        <span>:</span>
        <span> {currentSeconds}</span>
      </div>
    </div>
  );
};

export default Timer;