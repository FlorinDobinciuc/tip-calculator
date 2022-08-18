function Input({ labelName, placeholderName }) {
  return (
    <div className="input">
      <label htmlFor="input">{labelName}</label>
      <input type="text" className="text-input" placeholder={placeholderName} />
    </div>
  );
}

export default Input;
