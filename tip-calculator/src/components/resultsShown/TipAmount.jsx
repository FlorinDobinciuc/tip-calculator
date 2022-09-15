function TipAmount({ title }) {
  return (
    <>
      <div className="tipAmount">
        <h4>{title}</h4>
        <span>/ person</span>
      </div>
      <div className="initial-amount">
        <span>$ 0.00</span>
      </div>
    </>
  );
}

export default TipAmount;
