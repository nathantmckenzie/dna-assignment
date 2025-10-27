import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <nav className="mx-auto flex items-center justify-between p-6">
        <Link className="text-xl font-bold" to="/">
          DNA Bistro
        </Link>
        <div className="flex space-x-4">
          <Link className="hover:text-gray-400" to="/">
            Home
          </Link>
          <Link className="hover:text-gray-400" to="/menu">
            Menu
          </Link>
          <Link className="hover:text-gray-400" to="/locations">
            Locations
          </Link>
        </div>
      </nav>
    </header>
  );
}
