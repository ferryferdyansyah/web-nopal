import React, { useState } from 'react';
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";

const Form = () => {
    const [formData, setFormData] = useState({
        no: "",
        nama: "",
        deskripsi: "",
        depreciation: "",
        productPhoto: null,
        price: "",
        purchaseDate: "",
        qrCode: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "productPhoto" || name === "qrCode") {
            setFormData({
                ...formData,
                [name]: files ? files[0] : null,
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <div className="flex flex-row flex-grow">
                <Sidebar />
                <div className="flex flex-col flex-grow p-8 bg-gray-100">
                    <div className="flex flex-col gap-2 pb-4">
                        <h1 className="text-4xl font-bold">Form</h1>
                        <p className="font-poppins">Isian Form Disini</p>
                    </div>
                    <div className="bg-custom w-full flex-grow mt-4 rounded-xl p-4 flex flex-col shadow-md">
                        <div className="bg-gray-100 flex-grow m-4 rounded-xl p-4 shadow-md">
                            {/* RESPONSIVE FORM START */}
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block mb-2">No</label>
                                    <input
                                        type="text"
                                        name="no"
                                        value={formData.no}
                                        onChange={handleChange}
                                        className="w-full p-2 border rounded"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2">Nama</label>
                                    <input
                                        type="text"
                                        name="nama"
                                        value={formData.nama}
                                        onChange={handleChange}
                                        className="w-full p-2 border rounded"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2">Deskripsi</label>
                                    <input
                                        type="text"
                                        name="deskripsi"
                                        value={formData.deskripsi}
                                        onChange={handleChange}
                                        className="w-full p-2 border rounded"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2">Depreciation</label>
                                    <input
                                        type="text"
                                        name="depreciation"
                                        value={formData.depreciation}
                                        onChange={handleChange}
                                        className="w-full p-2 border rounded"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2">Product Photo</label>
                                    <input
                                        type="file"
                                        name="productPhoto"
                                        onChange={handleChange}
                                        className="w-full p-2 border rounded"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2">Price</label>
                                    <input
                                        type="text"
                                        name="price"
                                        value={formData.price}
                                        onChange={handleChange}
                                        className="w-full p-2 border rounded"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2">Purchase Date</label>
                                    <input
                                        type="date"
                                        name="purchaseDate"
                                        value={formData.purchaseDate}
                                        onChange={handleChange}
                                        className="w-full p-2 border rounded"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2">QR Code</label>
                                    <input
                                        type="file"
                                        name="qrCode"
                                        onChange={handleChange}
                                        className="w-full p-2 border rounded"
                                    />
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-blue-500 text-white rounded"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                            {/* RESPONSIVE FORM END */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
