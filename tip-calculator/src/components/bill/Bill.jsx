import Input from "../input/Input";
import Tip from "../tip/Tip";
import CustomTip from "../customTip/CustomTip";

function Bill() {
  return (
    <div className="bill">
      <Input labelName="Bill" placeholderName="$" />
      <p>Select Tip %</p>
      <section>
        <Tip percentage={5} />
        <Tip percentage={10} />
        <Tip percentage={15} />
        <Tip percentage={25} />
        <Tip percentage={50} />
        <CustomTip />
      </section>
      <Input labelName="Number of People" placeholderName="People" />
    </div>
  );
}

export default Bill;
