"use client"
import React, { SyntheticEvent, use } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from "next/navigation";

type Menu = {
    id: number;
    name: string;
    price: number;
    images: string;
    desk: string;
    jenis_id: number;
};
const API_URL = 'http://127.0.0.1:8000/api'
const EditMenu = (menu: Menu) => {
    const [modal, setModal] = useState(false);
    const [name, setName] = useState(menu.name)
    const [price, setPrice] = useState(menu.price);
    const [images, setImages] = useState(menu.images);
    const [desk, setDesk] = useState(menu.desk);
    const [jenis_id, setJenis_id] = useState(menu.jenis_id);
    const [isMutating, setIsMutating] = useState(false);
    const router = useRouter();
    const handleChange = () => setModal(!modal);

    const handleUpdate = async (e: SyntheticEvent) => {
        e.preventDefault();
        setIsMutating(true);
        let endpoint = `${API_URL}/menu/${menu.id}`;
        const data = { name: name, price: price, images: images, desk: desk, jenis_id: jenis_id }
        await axios.patch(endpoint, data);
        setName('')
        setPrice(Number)
        setImages('')
        setDesk('')
        setJenis_id(Number)
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
                                placeholder="Name jenis"
                            />
                            <label className="label font-bold">Price</label>
                            <input
                                type="text"
                                value={price}
                                onChange={(e) => setPrice(Number(e.target.value))}
                                className="input w-full input-bordered"
                                placeholder="Price"
                            />
                            <label className="label font-bold">Image</label>
                            <input
                                type="text"
                                value={images}
                                onChange={(e) => setImages(e.target.value)}
                                className="input w-full input-bordered"
                                placeholder="Image"
                            />
                            <label className="label font-bold">Desk</label>
                            <input
                                type="text"
                                value={desk}
                                onChange={(e) => setDesk(e.target.value)}
                                className="input w-full input-bordered"
                                placeholder="Desk"
                            />
                            <label className="label font-bold">Jenis Id</label>
                            <input
                                type="text"
                                value={jenis_id}
                                onChange={(e) => setJenis_id(Number(e.target.value))}
                                className="input w-full input-bordered"
                                placeholder="Jenis Id"
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

export default EditMenu