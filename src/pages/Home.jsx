import React from 'react'
import ListCategory from '../components/Home/ListCategory'
import { AppNotificationSolid } from 'iconoir-react'

export default function Home() {
  return (
    <div>
      <div className='flex justify-between items-center my-4'>
        <h1 className='text-3xl font-bold'>Simula Test</h1>
        <AppNotificationSolid />
      </div>
      <h2 className='text-base text-slate-300 mb-4'>Examenes de conocimientos para licencia de conducir de Perú</h2>
      <ListCategory />
    </div>
  )
}
