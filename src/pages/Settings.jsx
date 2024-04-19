import { CardWallet, MediaImage, NavArrowRight, TransitionRight } from "iconoir-react";
import { useAuthContext } from "../providers/AuthProvider";
import { signOutSession } from "../firebase";
import ScreenLayout from "../layouts/ScreenLayout";
import HeaderScreen from "../components/General/HeaderScreen";
import AvatarUser from "../components/General/AvatarUser";
import { SettingsMenu } from "../utilities/constants";

export default function Settings() {
  const { user, setAuthUser } = useAuthContext()

  const handleCerrarSession = async () => {
    await signOutSession()
    setAuthUser(null)
  }

  return (
    <ScreenLayout>
      <HeaderScreen title='Configuración' />
      <AvatarUser className="w-24 mx-auto border border-ui-secondary rounded-full" />
      <span className="inline-block w-full text-xl text-center">{user?.displayName}</span>
      <span className="inline-block w-full text-sm text-center">{user?.email}</span>

      <div className="flex px-4 bg-ui-neutral-400 divide-y divide-ui-neutral-200 flex-wrap rounded-md">
        {
          SettingsMenu.map((item, index) => (
            <div className="w-full" key={index}>
              <div className="flex flex-wrap items-center justify-between py-4 -m-2">
                <div className="w-auto p-2">
                  <div className="flex flex-wrap items-center -m-2">
                    <div className="w-auto p-2">
                      <div
                        className="flex items-center justify-center w-12 h-12 bg-ui-primary rounded-md"
                      >
                        <TransitionRight className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="w-auto p-2">
                      <h5 className="text-sm font-medium"> { item.title } </h5>
                      <h6 className="text-xs font-medium"> { item.subtitle } </h6>
                    </div>
                  </div>
                </div>
                <button className="w-auto p-2">
                  <NavArrowRight />
                </button>
              </div>
            </div>
          )
          )}
      </div>
    </ScreenLayout>
  )
}