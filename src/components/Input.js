function Input({ label, value, setValue, ...rest }) {
  return (
    <>
      <label for="fNumber">{label}</label>
      <input {...rest} value={value} onChange={(e) => setValue(e.target.value)} />
    </>
  );
}

export default Input;
