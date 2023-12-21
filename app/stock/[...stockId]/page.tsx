const StockDetail = ({ params }: { params: { stockId: string } }) => {
    return <div>Stock {params.stockId}</div>;
};

export default StockDetail