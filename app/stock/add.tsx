"use client"
import React, { SyntheticEvent, use } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from "next/navigation";

const API_URL = 'http://127.0.0.1:8000/api'
const AddStock = () => {
    const [modal, setModal] = useState(false)
    const [menu_id, setMenu_id] = useState(Number)
    const [jumlah, setJumlah] = useState(Number);
    const [isMutating, setIsMutating] = useState(false)
    const router = useRouter()
    const handleChange = () => setModal(!modal)
    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()
        setIsMutating(true)
        let endpoint = `${API_URL}/stock`
        const data = { menu_id: menu_id, jumlah: jumlah }
        const res = await axios.post(endpoint, data);

        console.log(res)

        setMenu_id(Number)
        setJumlah(Number)
        setIsMutating(false);
        router.refresh()
        setModal(false)
    }
    return (
        <div>
            <button className="btn" onClick={handleChange}>
                Add New
            </button>
            <input
                type="checkbox"
                checked={modal}
                onChange={handleChange}
                className="modal-toggle"
            />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Add New Stock</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label font-bold">Menu Id</label>
                            <input
                                type="text"
                                value={menu_id}
                                onChange={(e) => setMenu_id(Number(e.target.value))}
                                className="input w-full input-bordered"
                                placeholder="Menu Id"
                            />
                            <label className="label font-bold">Jumlah</label>
                            <input
                                type="text"
                                value={jumlah}
                                onChange={(e) => setJumlah(Number(e.target.value))}
                                className="input w-full input-bordered"
                                placeholder="Jumlah"
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
}

export default AddStock