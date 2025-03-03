function InputText({ labelfor, type, placeholder, idOf, value, onChange }) {
  return (
    <div className="mb-4">
      <label htmlFor={idOf} className="block text-sm font-medium text-gray-700">
        {labelfor}
      </label>
      <input
        type={type}
        id={idOf}
        name={idOf}  // The name should match the state key for proper input handling
        placeholder={placeholder}
        value={value}  // Bind value to the state value
        onChange={onChange}  // Bind onChange to handle input changes
        className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      />
    </div>
  );
}

export default InputText;
