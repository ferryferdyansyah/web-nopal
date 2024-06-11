import React from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import "../assets/css/styles.css";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Dashboard() {
    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <div className="flex flex-row flex-grow">
                <Sidebar />
                <div className="flex flex-col flex-grow p-8 bg-gray-100">
                    <div className="flex flex-col gap-2 pb-4">
                        <h1 className="text-4xl font-bold">Dashboard</h1>
                        <p className="font-poppins">The following is a list of assets in the database</p>
                    </div>
                    <div className="pt-6">
                        {/* USE LINK COMPONENT TO NAVIGATE */}
                        <button className="px-4 py-2 bg-red-500 text-white text-xs rounded font-poppins">
                            <Link to="/form">
                            + ADD NEW ASSET
                            </Link>
                        </button>
                    </div>
                    <div className="bg-custom w-full flex-grow mt-4 rounded-xl p-4 flex flex-col shadow-md">
                        <div className="ml-4 mt-4 font-bold text-xl">
                            <h1>Table Asset</h1>
                        </div>
                        <div className="bg-gray-100 flex-grow m-4 rounded-xl p-4 shadow-md">
    <div className="flex justify-end mb-4">
        <input
            type="text"
            placeholder="Search Here"
            className="p-2 border rounded"
        />
    </div>
    <div className="overflow-auto">
        <table className="w-full border-collapse mt-5">
            <thead>
                <tr>
                    <th className="border border-gray-500 p-2">No.</th>
                    <th className="border border-gray-500 p-2">Asset Name</th>
                    <th className="border border-gray-500 p-2">Description</th>
                    <th className="border border-gray-500 p-2">Depreciation</th>
                    <th className="border border-gray-500 p-2">Product Photo</th>
                    <th className="border border-gray-500 p-2">Price</th>
                    <th className="border border-gray-500 p-2">Purchase Date</th>
                    <th className="border border-gray-500 p-2">QR Code</th>
                    <th className="border border-gray-500 p-2">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border border-gray-500 p-2">1</td>
                    <td className="border border-gray-500 p-2">Laptop</td>
                    <td className="border border-gray-500 p-2">High-performance laptop</td>
                    <td className="border border-gray-500 p-2">10%</td>
                    <td className="border border-gray-500 p-2">[Product Photo]</td>
                    <td className="border border-gray-500 p-2">$1000</td>
                    <td className="border border-gray-500 p-2">2024-06-05</td>
                    <td className="border border-gray-500 p-2">[QR Code]</td>
                    <td className="border border-gray-500 p-2">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm py-1 px-2 rounded mr-2">
                            <FaEdit className="inline-block text-md" /> Edit
                        </button>
                        <button className="border border-red-500 bg-gray-100 hover:bg-gray-200 text-red-500 text-sm py-1 px-2 rounded">
                            <FaTrashAlt className="inline-block" /> Delete
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
