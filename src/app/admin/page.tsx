"use client"
import { useState, useEffect } from 'react';
import { client } from '../../sanity/lib/client';  // Sanity client
import { useRouter } from 'next/navigation';
import { auth } from '../firebaseConfig';  // Import Firebase auth
import { onAuthStateChanged } from 'firebase/auth';  // Import User type from Firebase
import AdminNavbar from './navbaradmin/page';

interface Order {
  _id: string;
  customer: string;
  totalAmount: number;
  status: string;
}

const AdminDashboard = () => {
  const [orders, setOrders] = useState<Order[]>([]);  // Add the Order[] type here
  const router = useRouter();

  // Check if user is authenticated using Firebase
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push('/login');  // Redirect to login if not authenticated
      } 
    });

    return () => unsubscribe();  // Cleanup on unmount
  }, []);

  // Fetch orders data
  const fetchOrders = async () => {
    const orders = await client.fetch('*[_type == "order"]');
    setOrders(orders);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="container mx-auto">
      <AdminNavbar />
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      
      {/* Orders Section */}
      <div className="mb-6">
        <h2 className="text-xl">Orders</h2>
        <table className="table-auto w-full mt-4">
          <thead>
            <tr>
              <th className="border px-4 py-2">Order ID</th>
              <th className="border px-4 py-2">Customer</th>
              <th className="border px-4 py-2">Total Amount</th>
              <th className="border px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order._id}>
                <td className="border px-4 py-2">{order._id}</td>
                <td className="border px-4 py-2">{order.customer}</td>
                <td className="border px-4 py-2">{order.totalAmount}</td>
                <td className="border px-4 py-2">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
