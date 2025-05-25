'use client';

import React from 'react';

const mockOrders = [
  { id: 'PZA001', customerName: 'John Doe', pizzaType: 'Margherita', quantity: 1, orderDate: '2023-10-01 12:00', status: 'Pending' },
  { id: 'PZA002', customerName: 'Jane Smith', pizzaType: 'Pepperoni', quantity: 2, orderDate: '2023-10-02 13:30', status: 'Preparing' },
  { id: 'PZA003', customerName: 'Alice Johnson', pizzaType: 'Veggie Supreme', quantity: 1, orderDate: '2023-10-03 14:45', status: 'Out for Delivery' },
  { id: 'PZA004', customerName: 'Bob Brown', pizzaType: 'Margherita', quantity: 3, orderDate: '2023-10-04 15:20', status: 'Delivered' },
  { id: 'PZA005', customerName: 'Charlie Davis', pizzaType: 'Pepperoni', quantity: 1, orderDate: '2023-10-05 16:10', status: 'Cancelled' },
];

const statusStyles: Record<string, string> = {
  Pending: 'bg-yellow-100 text-yellow-700',
  Preparing: 'bg-blue-100 text-blue-700',
  'Out for Delivery': 'bg-purple-100 text-purple-700',
  Delivered: 'bg-green-100 text-green-700',
  Cancelled: 'bg-red-100 text-red-700',
};

const PizzaOrders = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-white">
      <h1 className="text-3xl font-bold text-indigo-600 mb-8 text-center">Pizza Orders</h1>

      <div className="overflow-x-auto rounded-lg shadow border border-gray-200">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-indigo-50 text-indigo-700 uppercase text-xs font-medium">
            <tr>
              {['Order ID', 'Customer Name', 'Pizza Type', 'Quantity', 'Order Date', 'Status'].map((header) => (
                <th key={header} className="px-6 py-4 text-left">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {mockOrders.map((order, idx) => (
              <tr
                key={order.id}
                className={`transition duration-150 hover:bg-gray-100 ${
                  idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                }`}
              >
                <td className="px-6 py-4 font-medium text-gray-900">{order.id}</td>
                <td className="px-6 py-4">{order.customerName}</td>
                <td className="px-6 py-4">{order.pizzaType}</td>
                <td className="px-6 py-4 text-center">{order.quantity}</td>
                <td className="px-6 py-4 text-gray-500">{order.orderDate}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[order.status]}`}
                  >
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
