import { MoveLeft } from "lucide-react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="flex-col min-h-screen md:flex bg-[url('/public/error_background.jpg')] bg-cover bg-center  text-zinc-100">
      <div className="flex-1 text-center flex-col  space-y-4 p-8 sm:pt-24">
        <div className="flex flex-col items-center space-y-6">
          <p className="text-xl">404</p>
          <h2 className="text-5xl font-bold tracking-tight">Page not found</h2>
          <p className="text-xl text-zinc-100 text-center">
            Sorry, we couldn't find the page you're looking for.
          </p>
        </div>
        <ul className="flex pt-10 justify-center">
          <li>
            <Link
              className="flex flex-row gap-1 bg-slate-800/70 px-4 py-2 rounded-lg"
              to="/"
            >
              {" "}
              <MoveLeft />
              Go back home
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ErrorPage;
