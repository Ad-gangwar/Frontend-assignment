import React from 'react';

const mockOrders = [
  { id: 'PZA001', customerName: 'John Doe', pizzaType: 'Margherita', quantity: 1, orderDate: '2023-10-01 12:00', status: 'Pending' },
  { id: 'PZA002', customerName: 'Jane Smith', pizzaType: 'Pepperoni', quantity: 2, orderDate: '2023-10-02 13:30', status: 'Preparing' },
  { id: 'PZA003', customerName: 'Alice Johnson', pizzaType: 'Veggie Supreme', quantity: 1, orderDate: '2023-10-03 14:45', status: 'Out for Delivery' },
  { id: 'PZA004', customerName: 'Bob Brown', pizzaType: 'Margherita', quantity: 3, orderDate: '2023-10-04 15:20', status: 'Delivered' },
  { id: 'PZA005', customerName: 'Charlie Davis', pizzaType: 'Pepperoni', quantity: 1, orderDate: '2023-10-05 16:10', status: 'Cancelled' },
];

const PizzaOrders = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Pizza Orders</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Customer Name</th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Pizza Type</th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Order Date</th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody>
            {mockOrders.map((order) => (
              <tr key={order.id}>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{order.id}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{order.customerName}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{order.pizzaType}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{order.quantity}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{order.orderDate}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : order.status === 'Preparing' ? 'bg-blue-100 text-blue-800' : order.status === 'Out for Delivery' ? 'bg-purple-100 text-purple-800' : order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PizzaOrders; 