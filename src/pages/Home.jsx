import ListCategory from '../components/Home/ListCategory'
import AvatarUser from '../components/General/AvatarUser'
import { useAuthContext } from '../providers/AuthProvider'
import { divideDisplayName, getFormattedDate, getGreetingMessage } from '../utilities/utilities'
import LogoLite from '../components/General/LogoLite'
import { Settings } from 'iconoir-react'
import { Link } from 'react-router-dom'
import { PrivateRoutes } from '../router/routes'

export default function Home() {
  const { user } = useAuthContext()
  return (
    <div className=''>
      <div className='bg-ui-primary '>
        <div className='p-4'>
          <div className='flex justify-between items-center mt-4 mb-8'>
            <div className='flex gap-2 items-end'>
              <LogoLite className='w-8' />
              <h1 className='font-bold'>Quizzly</h1>
            </div>
            <div className='flex gap-2 items-center'>
              <h6 className='text-xs'>{getFormattedDate()}</h6>
              <Link to={PrivateRoutes.PROFILE}>
                <div className='p-1 hover:bg-ui-neutral-200 rounded-full'>
                  <Settings className='w-6 h-6' />
                </div>
              </Link>
            </div>
          </div>
          <div className='flex justify-between items-center gap-2'>
            <div>
              <h6 className='text-lg'>{getGreetingMessage()}, {divideDisplayName(user?.displayName)} 👋</h6>
              <span className='text-xs'>Pongamos a prueba tus conocimientos...</span>
            </div>
            <AvatarUser className="w-14 border border-ui-secondary rounded-full" />
          </div>
        </div>
        <div className='p-4 relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-1/2 before:rounded-t-lg before:bg-ui-neutral-600'>
          <div className='p-4 bg-ui-neutral-400 rounded-lg shadow-md relative'>
            <h4 className='text-lg font-bold'>Descubre</h4>
            <span className='text-xs'>Exámenes de conocimientos para obtener tu licencia de conducir en Perú</span>
          </div>
        </div>
      </div>
      <div className='px-4'>
        <ListCategory />
      </div>
    </div>
  )
}
