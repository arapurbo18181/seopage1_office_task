import React, { useState } from "react";
import { tableHeads } from "../dummy";
import { useApi } from "../context/ApiContext";

const TablePage = () => {
  const { Data } = useApi();
  const [columnVisibility, setColumnVisibility] = useState(
    tableHeads.reduce((acc, columnName) => {
      acc[columnName] = true; // Initially, all columns are visible
      return acc;
    }, {})
  );

  const handleColumnToggle = (columnName) => {
    setColumnVisibility((prevVisibility) => ({
      ...prevVisibility,
      [columnName]: !prevVisibility[columnName],
    }));
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg py-10 space-y-10">
      <div className="mb-4">
        <label className="font-bold">Select Columns to Display:</label>
        <div className="flex space-x-2">
          {tableHeads.map((columnName, index) => (
            <label key={index} className="flex items-center space-x-1">
              <input
                type="checkbox"
                checked={columnVisibility[columnName]}
                onChange={() => handleColumnToggle(columnName)}
              />
              <span>{columnName}</span>
            </label>
          ))}
        </div>
      </div>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            {tableHeads.map(
              (columnName, index) =>
                columnVisibility[columnName] && (
                  <th key={index} scope="col" className="px-6 py-3">
                    {columnName}
                  </th>
                )
            )}
          </tr>
        </thead>
        <tbody>
          {Data.map((item, index) => (
            <tr key={index} className="bg-white border-b hover:bg-gray-50">
              {tableHeads.map(
                (columnName, columnIndex) =>
                  columnVisibility[columnName] && (
                    <td key={columnIndex} className="px-6 py-4 max-w-max">
                      {item[columnName] ? item[columnName] : "null value"}
                    </td>
                  )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablePage;
