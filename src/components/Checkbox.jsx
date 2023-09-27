export default function Checkbox(className, text, ...rest) {
  return (
    <label className={className}>
      <input type="checkbox" {...rest} />
      <span> I agree to the Terms & Conditions</span>
    </label>
  );
}
