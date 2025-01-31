// components/AdminNavbar.tsx
import Link from 'next/link';

const AdminNavbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-6">
        <li>
          <Link href="/admin"
             className="hover:text-gray-400">Dashboard
          </Link>
        </li>
        <li>
          <Link href="/admin/addproduct"
             className="hover:text-gray-400">Add Product
          </Link>
        </li>
        <li>
          <Link href="/admin/products/edit"
             className="hover:text-gray-400">Edit Product
          </Link>
        </li>
        <li>
          <Link href="/login"
             className="hover:text-gray-400">Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
