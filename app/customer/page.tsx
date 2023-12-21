export const metadata = {
    title: "Customer",
}
import axios from 'axios'
import Link from 'next/link'
import AddCustomer from './add'
import DeleteCustomer from './delete'
import EditCustomer from './edit'

type Customer = {
    id: number;
    name: string;
    email: string;
    phone: number;
    alamat: string;
}
const getCustomer = async () => {
    const res = await axios.get("http://127.0.0.1:8000/api/customer");

    return res.data.data
}
const CustomerList = async () => {
    const customer: Customer[] = await getCustomer()
    return (
        <div className="py-10 px-10">
            <div className="py-2">
                <AddCustomer />
            </div>
            <table className="table table-zebra">
                <thead>
                    <tr className="bg-base-200">
                        <th>No.</th>
                        <th>Nama Customer</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Alamat</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {customer.map((customer, index) => (
                        <tr key={customer.id}>
                            <td>{index + 1}</td>
                            <td>{customer.name}</td>
                            <td>{customer.email}</td>
                            <td>{customer.phone}</td>
                            <td>{customer.alamat}</td>
                            <td className="flex">
                                <div className="mr-1">
                                    <EditCustomer {...customer} />
                                </div>

                                <DeleteCustomer {...customer} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CustomerList;
