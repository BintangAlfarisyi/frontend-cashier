"use client";
import React, { SyntheticEvent, use } from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

type Customer = {
    id: number;
    name: string;
};

const API_URL = "http://127.0.0.1:8000/api";
const DeleteCustomer = (customer: Customer) => {
    const [modal, setModal] = useState(false);
    const [name, setName] = useState("");
    const [isMutating, setIsMutating] = useState(false);
    const router = useRouter();
    const handleChange = () => setModal(!modal);
    const handleDelete = async (customerId: Number) => {
        setIsMutating(true);
        let params = { id: customerId }
        let endpoint = `${API_URL}/customer/${customerId}`;
        const data = { name: name };
        await axios.delete(endpoint);

        setIsMutating(false);
        router.refresh();
        setModal(false);
    };
    return (
        <div>
            <button className="btn" onClick={handleChange}>
                Delete
            </button>
            <input
                type="checkbox"
                checked={modal}
                onChange={handleChange}
                className="modal-toggle"
            />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">
                        Are sure to delete {customer.name} ?
                    </h3>
                    <div className="modal-action">
                        <button type="button" className="btn" onClick={handleChange}>
                            Close
                        </button>
                        {!isMutating ? (
                            <button
                                type="button"
                                onClick={() => handleDelete(customer.id)}
                                className="btn btn-primary"
                            >
                                Delete
                            </button>
                        ) : (
                            <button type="button" className="btn loading">
                                Delete loading ...
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteCustomer;
