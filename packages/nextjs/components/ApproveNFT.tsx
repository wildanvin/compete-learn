import React, { useState } from "react";

export const ApproveNFT: React.FC = () => {
  const [inputAddreses, setInputAddreses] = useState<string[]>(["", "", "", "", ""]);
  const options = ["Módulo 1", "Módulo 2"];
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleInputChange = (index: number, value: string) => {
    const updatedValues = [...inputAddreses];
    updatedValues[index] = value;
    setInputAddreses(updatedValues);
  };

  const handleSubmit = () => {
    // Handle the submission of inputAddreses here
    console.log("Submitted values:", inputAddreses);
  };

  return (
    <div className="p-4 w-full sm:w-1/2">
      <h1 className="text-2xl mb-4">Aprovar NFT de cada módulo</h1>
      <div className="p-4">
        <div className="relative">
          <select
            value={selectedOption || ""}
            onChange={e => handleOptionSelect(e.target.value)}
            className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            <option className="text-black" value="" disabled>
              Selecciona el módulo:
            </option>
            {options.map((option, index) => (
              <option className="text-black" key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path
                d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
                fillRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      {inputAddreses.map((value, index) => (
        <input
          key={index}
          type="text"
          value={value}
          onChange={e => handleInputChange(index, e.target.value)}
          className="w-full mb-6 p-2 border border-gray-300 rounded"
          placeholder={`ETH address ${index + 1}`}
        />
      ))}
      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Aprobar
      </button>
    </div>
  );
};
