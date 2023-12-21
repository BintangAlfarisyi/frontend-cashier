const CustomerDetail = ({ params }: { params: { customerId: string } }) => {
    return <div>Customer {params.customerId}</div>;
};

export default CustomerDetail