// InputField.jsx
export default function InputField({ label, ...props }) {
  return (
    <div className="flex flex-col mb-4">
      {label && <label className="mb-1 font-medium">{label}</label>}
      <input className="border p-2 rounded" {...props} />
    </div>
  );
}