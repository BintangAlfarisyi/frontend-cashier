"use client"
import React, { SyntheticEvent, use } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from "next/navigation";

type Customer = {
    id: number;
    name: string;
    email: string;
    phone: number;
    alamat: string;
};
const API_URL = 'http://127.0.0.1:8000/api'
const EditCustomer = (customer: Customer) => {
    const [modal, setModal] = useState(false);
    const [name, setName] = useState(customer.name);
    const [email, setEmail] = useState(customer.email);
    const [phone, setPhone] = useState(customer.phone);
    const [alamat, setAlamat] = useState(customer.alamat);
    const [isMutating, setIsMutating] = useState(false);
    const router = useRouter();
    const handleChange = () => setModal(!modal);
    const handleUpdate = async (e: SyntheticEvent) => {
        e.preventDefault();
        setIsMutating(true);
        let endpoint = `${API_URL}/customer/${customer.id}`;
        const data = { name: name, email: email, phone: phone, alamat: alamat };
        await axios.patch(endpoint, data);
        setName("");
        setEmail("");
        setPhone(Number);
        setAlamat("");
        setIsMutating(false);
        router.refresh();
        setModal(false);
    };
    return (
        <div>
            <button className="btn" onClick={handleChange}>
                Edit
            </button>
            <input
                type="checkbox"
                checked={modal}
                onChange={handleChange}
                className="modal-toggle"
            />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Edit Category</h3>
                    <form onSubmit={handleUpdate}>
                        <div className="form-control">
                            <label className="label font-bold">Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="input w-full input-bordered"
                                placeholder="Name Customer"
                            />
                            <label className="label font-bold">Email</label>
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="input w-full input-bordered"
                                placeholder="Email"
                            />
                            <label className="label font-bold">Phone</label>
                            <input
                                type="text"
                                value={phone}
                                onChange={(e) => setPhone(Number(e.target.value))}
                                className="input w-full input-bordered"
                                placeholder="Phone"
                            />
                            <label className="label font-bold">Alamat</label>
                            <input
                                type="text"
                                value={alamat}
                                onChange={(e) => setAlamat(e.target.value)}
                                className="input w-full input-bordered"
                                placeholder="Alamat"
                            />
                        </div>
                        <div className="modal-action">
                            <button type="button" className="btn" onClick={handleChange}>
                                Close
                            </button>
                            {!isMutating ? (
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            ) : (
                                <button type="button" className="btn loading">
                                    Submit loading ...
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditCustomer