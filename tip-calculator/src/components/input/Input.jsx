function Input({ labelName, placeholderName }) {
  return (
    <div className="input">
      <label htmlFor="input">{labelName}</label>
      <input
        type="number"
        className="text-input"
        placeholder={placeholderName}
        required
      />
    </div>
  );
}

export default Input;
