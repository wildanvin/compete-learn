import React, { useState } from "react";

export const ApproveNFT: React.FC = () => {
  const [inputValues, setInputValues] = useState<string[]>(["", "", "", "", ""]);

  const handleInputChange = (index: number, value: string) => {
    const updatedValues = [...inputValues];
    updatedValues[index] = value;
    setInputValues(updatedValues);
  };

  const handleSubmit = () => {
    // Handle the submission of inputValues here
    console.log("Submitted values:", inputValues);
  };

  return (
    <div className="p-4 w-full sm:w-1/2">
      <h1 className="text-2xl mb-4">Text Input Form</h1>
      {inputValues.map((value, index) => (
        <input
          key={index}
          type="text"
          value={value}
          onChange={e => handleInputChange(index, e.target.value)}
          className="w-full mb-2 p-2 border border-gray-300 rounded"
          placeholder={`Input ${index + 1}`}
        />
      ))}
      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Submit
      </button>
    </div>
  );
};
