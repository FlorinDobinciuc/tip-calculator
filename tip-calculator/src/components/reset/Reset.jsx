import ResetButton from "../resetButton/ResetButton";
import TipAmount from "../resultsShown/TipAmount";

function Reset() {
  return (
    <div className="reset">
      <TipAmount title="Tip Amount" />
      <TipAmount title="Total" />
      <ResetButton />
    </div>
  );
}

export default Reset;
