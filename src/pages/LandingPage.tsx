import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Cog } from "lucide-react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="h-screen bg-zinc-100 dark:bg-primary-foreground ">
      <div className="px-2 mx-auto max-w-7xl">
        <header className="flex items-center justify-between py-4">
          <Link
            to="/"
            className="flex items-center justify-center gap-1 font-bold"
          >
            <Cog size={26} />
            <span>gearwheel</span>
          </Link>
          <span className="flex items-center gap-2">
            <ModeToggle />
            <Button>
              <Link to="/login">Login</Link>
            </Button>
          </span>
        </header>
        <main>
          <section className="flex flex-col items-center space-y-4 mt-80">
            <h1 className="text-xl font-bold sm:text-4xl md:text-6xl lg:text-7xl">
              Experience like <del>never</del>
              <span className="inline-block ml-1 text-transparent sm:ml-2 md:ml-3 bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text">
                before.
              </span>
            </h1>
            <h2 className="text-md">BOTTOM TEXT.</h2>
            <Button>
              <Link to="/login"> Get started</Link>
            </Button>
          </section>
        </main>
      </div>
    </div>
  );
}

export default LandingPage;
