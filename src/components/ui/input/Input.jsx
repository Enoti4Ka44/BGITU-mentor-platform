function Input(props) {
  return (
    <div>
      {props.label && (
        <label style={{ fontWeight: "bold", fontSize: "20px" }}>
          {props.label}
        </label>
      )}

      <input {...props} />
    </div>
  );
}

export default Input;
