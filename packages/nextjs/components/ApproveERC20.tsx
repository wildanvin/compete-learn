import React, { useState } from "react";

export const ApproveERC20: React.FC = () => {
  const [inputValues, setInputValues] = useState<{ text: string; number: number }[]>([
    { text: "", number: 0 },
    { text: "", number: 0 },
    { text: "", number: 0 },
    { text: "", number: 0 },
    { text: "", number: 0 },
  ]);

  const handleTextChange = (index: number, value: string) => {
    const updatedValues = [...inputValues];
    updatedValues[index].text = value;
    setInputValues(updatedValues);
  };

  const handleNumberChange = (index: number, value: number) => {
    const updatedValues = [...inputValues];
    updatedValues[index].number = value;
    setInputValues(updatedValues);
  };

  const handleSubmit = () => {
    // Handle the submission of inputValues here
    console.log("Submitted values:", inputValues);
  };

  return (
    <div className="p-4 w-full sm:w-1/2">
      <h1 className="text-2xl mb-4">Aprobar LEARN token</h1>
      {inputValues.map((value, index) => (
        <div key={index} className="flex mb-2">
          <input
            type="text"
            value={value.text}
            onChange={e => handleTextChange(index, e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded mr-2 text-black"
            placeholder={`ETH Address ${index + 1}`}
          />
          <input
            type="number"
            value={value.number}
            onChange={e => handleNumberChange(index, parseInt(e.target.value))}
            className="w-1/4 p-2 mb-4 border border-gray-300 rounded text-black"
            placeholder={`# de tokens ${index + 1}`}
          />
        </div>
      ))}
      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Aprobar
      </button>
    </div>
  );
};
