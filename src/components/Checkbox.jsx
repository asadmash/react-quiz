export default function Checkbox(text, ...rest) {
  return (
    <label>
      <input type="checkbox" {...rest} />
      <span> I agree to the Terms & Conditions</span>
    </label>
  );
}
