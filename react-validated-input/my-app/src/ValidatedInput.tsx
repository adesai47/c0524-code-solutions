import { useState, ChangeEvent } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

function ValidatedInput() {
  const [inputValue, setInputValue] = useState('');
  const [validationMessage, setValidationMessage] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.length >= 6) {
      setIsValid(true);
      setValidationMessage('');
    } else {
      setIsValid(false);
      setValidationMessage('Password must be at least 6 characters long.');
    }
  };

  return (
    <div className="flex w-full m-12">
      <label>
        <span className="text-gray-700">Password</span>
        <div className="relative w-80">
          <input
            type="password"
            className="w-full py-1 pl-2 pr-8 border border-gray-200 rounded"
            value={inputValue}
            onChange={handleChange}
          />
          <div className="absolute inset-y-0 right-2 flex items-center">
            {isValid ? (
              <FaCheck className="text-green-500" />
            ) : (
              <FaTimes className="text-red-500" />
            )}
          </div>
        </div>
        {validationMessage && (
          <div className="p-1 text-red-700">{validationMessage}</div>
        )}
      </label>
    </div>
  );
}

export default ValidatedInput;
