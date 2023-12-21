export const metadata = {
    title: "Stock",
}
import axios from 'axios'
import Link from 'next/link'
import AddStock from './add'
import DeleteStock from './delete'
import EditStock from './edit'

type Stock = {
    id: number;
    menu_id: string;
    jumlah: number;
}
const getStock = async () => {
    const res = await axios.get("http://127.0.0.1:8000/api/stock");

    return res.data.data
}
const StockList = async () => {
    const stock: Stock[] = await getStock()
    return (
        <div className="py-10 px-10">
            <div className="py-2">
                <AddStock />
            </div>
            <table className="table table-zebra">
                <thead>
                    <tr className="bg-base-200">
                        <th>No.</th>
                        <th>Menu Id</th>
                        <th>Jumlah</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {stock.map((stock, index) => (
                        <tr key={stock.id}>
                            <td>{index + 1}</td>
                            <td>{stock.menu_id}</td>
                            <td>{stock.jumlah}</td>
                            <td className="flex">
                                <div className="mr-1">
                                    <EditStock {...stock} />
                                </div>

                                <DeleteStock {...stock} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StockList;
