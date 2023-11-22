import { Link } from "react-router-dom";

function TestPage() {
  return (
    <div className="flex-col md:flex justify-center items-center">
      <div className="flex h-16 items-center px-4"></div>
      <div className="flex-1 space-y-4 p-8 pt-6">
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
