
import { useState } from "react"

function DataTable() {

  const [data, setData] = useState([
    { x: 1, y: 2 },
    { x: 2, y: 4 },
    { x: 3, y: 6 }
  ])
  const addRow = () => {
    setData([...data, { x: 0, y: 0 }])
  }
  
  function handleInputChange(index: number, field: "x" | "y", value: string) {
    const newData = [...data]
    newData[index][field] = Number(value)
    setData(newData)
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-blue-500">
        Experimental Data
      </h2>

      <table className="border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border p-2 bg-gray-100">
              X Value
            </th>

            <th className="border p-2 bg-gray-100">
              Y Value
            </th>
          </tr>
        </thead>

        <tbody>

          {data.map((row, index) => (
            <tr key={index}>

              <td className="border p-2">
                <input
                  type="number"
                  value={row.x}
                  onChange={(e) => handleInputChange(index, "x", e.target.value)}
                />
              </td>

              <td className="border p-2">
                <input
                  type="number"
                  value={row.y}
                  onChange={(e) => handleInputChange(index, "y", e.target.value)}
                />
              </td>

            </tr>
          ))}

        </tbody>

      </table>

      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={addRow}
      >
        + Add Row
      </button>

    </div>
  )
}

export default DataTable