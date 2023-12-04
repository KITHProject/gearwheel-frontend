import Header from "@/components/header";
import { Input } from "@/components/ui/input";

function SettingsPage() {
  return (
    <div className="flex-col flex min-h-screen relative">
      <Header />
      <div className="max-w-7xl mx-auto mt-4 px-2">
        <div className="border rounded-xl shadow">
          <div className="space-y-6 p-10">
            <div className="border-b space-y-0.5 pb-6">
              <h2 className="text-xl font-bold">Settings</h2>
              <p className="text-muted-foreground">
                Manage your account settings and set e-mail preferences.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row  items-start space-y-8 lg:space-x-12 lg:space-y-0">
              <aside className="-mx-2 lg:w-1/5">
                <nav className="flex lg:flex-col ">
                  <a className="w-full py-2 px-4 hover:bg-gray-400 hover:text-white rounded-md cursor-pointer">
                    Profile
                  </a>
                  <a className="w-full py-2 px-4 hover:bg-gray-400 hover:text-white rounded-md cursor-pointer">
                    Account
                  </a>
                  <a className="w-full py-2 px-4 hover:bg-gray-400 hover:text-white rounded-md cursor-pointer">
                    Display
                  </a>
                  <a className="w-full py-2 px-4 hover:bg-gray-400 hover:text-white rounded-md cursor-pointer">
                    Help
                  </a>
                  <a className="w-full py-2 px-4 hover:bg-gray-400 hover:text-white rounded-md cursor-pointer">
                    FAQ
                  </a>
                </nav>
              </aside>
              <div className="flex-1 lg:max-w-2xl">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold">Profile</h3>
                    <p className="text-muted-foreground">
                      This is how others will see you on the site.
                    </p>
                  </div>
                  <form className="space-y-8">
                    <div className="space-y-2 flex flex-col">
                      <label htmlFor="username">Username</label>
                      <Input required placeholder="Your Username" />
                      <p className="text-muted-foreground text-sm">
                        This is your public display name. It can be your real
                        name or a pseudonym. You can only change this once every
                        30 days.
                      </p>
                    </div>
                    <div className="space-y-2 flex flex-col">
                      <label htmlFor="username">Username</label>
                      <Input required placeholder="Your Username" />
                      <p className="text-muted-foreground text-sm">
                        This is your public display name. It can be your real
                        name or a pseudonym. You can only change this once every
                        30 days.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
