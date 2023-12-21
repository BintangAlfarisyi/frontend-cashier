"use client";
import React, { SyntheticEvent, use } from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

type Stock = {
    id: number;
    menu_id: number;
};

const API_URL = "http://127.0.0.1:8000/api";
const DeleteStock = (stock: Stock) => {
    const [modal, setModal] = useState(false);
    // const [menu_id, setMenu_id] = useState("");
    const [isMutating, setIsMutating] = useState(false);
    const router = useRouter();
    const handleChange = () => setModal(!modal);
    const handleDelete = async (stockId: Number) => {
        setIsMutating(true);
        let params = { id: stockId }
        let endpoint = `${API_URL}/stock/${stockId}`;
        // const data = { menu_id: menu_id };
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
                        Are sure to delete this data ?
                    </h3>
                    <div className="modal-action">
                        <button type="button" className="btn" onClick={handleChange}>
                            Close
                        </button>
                        {!isMutating ? (
                            <button
                                type="button"
                                onClick={() => handleDelete(stock.id)}
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

export default DeleteStock;
