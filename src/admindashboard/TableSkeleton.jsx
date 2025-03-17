import React from 'react';

const TableSkeleton = () => {
  // Create an array with a fixed number of rows (e.g., 5)
  const skeletonRows = Array.from({ length: 5 });

  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg p-4">
    {/* Add Product Button */}
    <div className="flex justify-end mb-4">
      <button className="border bg-gray-200 text-black font-bold px-5 py-2 rounded-[5px] cursor-not-allowed">
        Add Product
      </button>
    </div>

    <table className="min-w-full table-auto text-left text-sm text-gray-500">
      <thead className="bg-gray-100 text-xs uppercase text-gray-700">
        <tr>
          <th className="px-6 py-3">Image</th>
          <th className="px-6 py-3">Story Name</th>
          <th className="px-6 py-3">Description</th>
          <th className="px-6 py-3">Action</th>
        </tr>
      </thead>
      <tbody>
        {skeletonRows.map((_, index) => (
          <tr key={index} className="border-b hover:bg-gray-50">
            <td className="px-6 py-4">
              <div className="w-16 h-16 bg-gray-300 rounded-md animate-pulse"></div>
            </td>
            <td className="px-6 py-4">
              <div className="h-4 bg-gray-300 rounded w-3/4 animate-pulse"></div>
            </td>
            <td className="px-6 py-4">
              <div className="h-4 bg-gray-300 rounded w-full animate-pulse"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6 animate-pulse mt-2"></div>
            </td>
            <td className="px-6 py-4 flex gap-3">
              <div className="h-8 w-8 bg-gray-300 rounded-full animate-pulse"></div>
              <div className="h-8 w-8 bg-gray-300 rounded-full animate-pulse"></div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default TableSkeleton;
