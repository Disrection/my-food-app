// FormGroup.jsx (wrapper for form sections)
export default function FormGroup({ children, title }) {
  return (
    <fieldset className="border p-4 rounded mb-4">
      {title && <legend className="font-semibold px-2">{title}</legend>}
      {children}
    </fieldset>
  );
}