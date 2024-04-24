import { NavArrowRight, ProfileCircle, TransitionRight } from "iconoir-react";
import { useAuthContext } from "../providers/AuthProvider";
import { signOutSession } from "../firebase";
import ScreenLayout from "../layouts/ScreenLayout";
import HeaderScreen from "../components/General/HeaderScreen";
import AvatarUser from "../components/General/AvatarUser";
import { Link } from "react-router-dom";

export default function Settings() {
  const { user, setAuthUser } = useAuthContext()

  const handleCerrarSession = async () => {
    await signOutSession()
    setAuthUser(null)
  }

  const SettingsMenu = [
    {
      title: 'Editar información',
      subtitle: 'Actualizar la información de perfil',
      isLink: true,
      path: '/profile',
      icon: <ProfileCircle className="w-6 h-6" />,
      onclickFunc: null
    },
    {
      title: 'Cerrar sesión',
      subtitle: 'Finalizar la sesión',
      isLink: false,
      path: '/logout',
      icon: <TransitionRight className="w-6 h-6" />,
      onclickFunc: handleCerrarSession,
    }
  ]

  return (
    <ScreenLayout>
      <HeaderScreen title='Configuración' />
      <AvatarUser className="w-24 mx-auto border border-ui-secondary rounded-full" />
      <span className="inline-block w-full text-xl text-center">{user?.displayName}</span>
      <span className="inline-block w-full text-sm text-center">{user?.email}</span>

      <div className="flex px-4 bg-ui-neutral-400 divide-y divide-ui-neutral-200 flex-wrap rounded-md">
        {
          SettingsMenu.map((item, index) => (
            item.isLink
              ? <MenuLinkSetting key={index} item={item} />
              : <MenuButtonSetting key={index} item={item} />
          ))
        }
      </div>
    </ScreenLayout>
  )
}

export function MenuLinkSetting(props) {
  const { item, index } = props
  return (
    <Link to={item.path} className="w-full" key={index}>
      <div className="flex flex-wrap items-center justify-between py-4 -m-2">
        <div className="w-auto p-2">
          <div className="flex flex-wrap items-center -m-2">
            <div className="w-auto p-2">
              <div
                className="flex items-center justify-center w-12 h-12 bg-ui-primary rounded-md"
              >
                {item.icon}
              </div>
            </div>
            <div className="w-auto p-2">
              <h5 className="text-sm font-medium"> {item.title} </h5>
              <h6 className="text-xs font-medium"> {item.subtitle} </h6>
            </div>
          </div>
        </div>
        <div className="w-auto p-2">
          <NavArrowRight />
        </div>
      </div>
    </Link>
  )
}

export function MenuButtonSetting(props) {
  const { item, index } = props
  return (
    <button onClick={item.onclickFunc} className="w-full" key={index}>
      <div className="flex flex-wrap items-center justify-between py-4 -m-2">
        <div className="w-auto p-2">
          <div className="flex flex-wrap items-center -m-2">
            <div className="w-auto p-2">
              <div
                className="flex items-center justify-center w-12 h-12 bg-ui-primary rounded-md"
              >
                {item.icon}
              </div>
            </div>
            <div className="w-auto p-2">
              <h5 className="text-sm font-medium"> {item.title} </h5>
              <h6 className="text-xs font-medium"> {item.subtitle} </h6>
            </div>
          </div>
        </div>
        <div className="w-auto p-2">
          <NavArrowRight />
        </div>
      </div>
    </button>
  )
}