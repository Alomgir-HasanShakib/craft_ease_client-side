
const Table = () => {
  return (
    <div>
      <div className="overflow-x-auto bg-secondary">
        <table className="table text-white text-xs md:text-xl">
          {/* head */}
          <thead className="bg-primary text-white">
            <tr>
              <th>Item_name</th>
              <th>Rating</th>
              <th>userName</th>
              <th>Customizable</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            <tr>
              <td className="bg-secondary">{item_name}</td>
              <td className="bg-primary">{rating}</td>
              <td className="bg-secondary">{userName}</td>
              <td className="bg-btn">{customize}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
