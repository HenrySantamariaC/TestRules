import { CardWallet, CheckCircleSolid, NavArrowRight, TransitionRight } from "iconoir-react";
import BackRouteButton from "../components/General/BackRouteButton";
import { useAuthContext } from "../providers/AuthProvider";
import { signOutSession } from "../firebase";

export default function Profile() {
  const { user, setAuthUser } = useAuthContext()

  const getAvatar = () => {
    if (user?.photoURL) { return user.photoURL }
    if (user?.displayName) { return `https://ui-avatars.com/api/?name=${user.displayName}&background=random&color=fff` }
    if (user?.email) { return `https://ui-avatars.com/api/?name=${user.email}&background=random&color=fff` }
    return `https://ui-avatars.com/api/?name=${'demo'}&background=random&color=fff`
  }

  const handleCerrarSesion = async () => {
    await signOutSession()
    setAuthUser(null)
  }

  return (
    <>
      <div className='flex justify-between items-center my-4'>
        <h1 className='text-3xl font-bold'>Perfil</h1>
        <BackRouteButton />
      </div>
      <div className="w-24 h-24 mx-auto my-8 outline-none rounded-full ring-offset-2 ring-ui-colors-neutral ring-2"
        onClick={() => null}
      >
        <img
          src={getAvatar()}
          className="w-full h-full rounded-full"
        />
      </div>
      <span className="inline-block w-full text-xl text-center">{user?.displayName} <CheckCircleSolid  className='inline-block w-4 text-ui-colors-primary' /> </span>
      <span className="inline-block w-full text-sm text-center">{user?.email}</span>
      <div className="mt-4 divide-y-2 divide-ui-colors-base rounded-xl overflow-hidden bg-ui-colors-neutral">
        <div
          // to={replaceParam(PATHROUTES.TEST, ':id', item.id)}
          className={`flex justify-between items-center w-full font-bold p-4 bg-ui-colors-neutral`}
        >
          <div className="flex justify-between items-center gap-4">
            <CardWallet className='text-ui-colors-primary' />
            <div>
              <h3 className="text-lg font-medium text-slate-50">Editar información</h3>

              <div className="flow-root">
                <div className="p-1 leading-none">
                  <span className="text-xs font-medium text-slate-300"> Actualizar la información de perfil </span>
                </div>
              </div>
            </div>
          </div>
          <NavArrowRight />
        </div>
        <button
          className={`flex justify-between items-center w-full font-bold p-4 bg-ui-colors-neutral`}
          onClick={handleCerrarSesion}
        >
          <div className="flex justify-between items-center gap-4">
            <TransitionRight className='text-ui-colors-primary' />
            <div>
              <h3 className="text-lg font-medium text-slate-50">Cerrar sesión</h3>

              <div className="flow-root">
                <div className="p-1 leading-none">
                  <span className="text-xs font-medium text-slate-300"> Salir </span>
                </div>
              </div>
            </div>
          </div>
          <NavArrowRight />
        </button>
      </div>
    </>
  )
}