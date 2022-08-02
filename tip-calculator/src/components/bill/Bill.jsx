import Input from "../input/Input";
import Tip from "../tip/Tip";

function Bill() {
  return (
    <div className="bill">
      <Input />
      <p>Select Tip %</p>
      <section>
        <Tip percentage={5} />
        <Tip percentage={10} />
        <Tip percentage={15} />
        <Tip percentage={25} />
        <Tip percentage={50} />
      </section>
    </div>
  );
}

export default Bill;
