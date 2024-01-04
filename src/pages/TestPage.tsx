import { Link } from "react-router-dom";

function TestPage() {
  return (
    <div className="flex-col items-center justify-center md:flex dark:bg-primary-foreground">
      <div className="flex items-center h-16 px-4"></div>
      <div className="flex-1 p-8 pt-6 space-y-4">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Test Page</h2>
        </div>
        <ul>
          <li>
            <Link to="/"> Go back home</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TestPage;
