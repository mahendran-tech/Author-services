const data = [
  { reviewers: "1 Reviewer", time: "7 business days", price: "$320" },
  { reviewers: "2 Reviewers", time: "7 business days", price: "$630" },
  { reviewers: "3 Reviewers", time: "7 business days", price: "$940" },
];

const DeliveryPricingTable = () => {
  return (
    <div className="deliverytable py-4">
      <h3 className="text-center fw-bold mb-4">Delivery and Pricing</h3>
      <div className="table-responsive px-3">
        <table className="table table-bordered text-center align-middle">
          <thead className="table-light custom-thead">
            <tr>
              <th>No. of Reviewers</th>
              <th>Turnaround Time</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx}>
                <td>{row.reviewers}</td>
                <td>{row.time}</td>
                <td>{row.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeliveryPricingTable;
