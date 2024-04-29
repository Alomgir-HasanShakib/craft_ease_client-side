import { Link } from "react-router-dom";

const Table = ({ craft }) => {
  const {
    _id
  } = craft;
  return (
    <div>
      <Link to={`/craftdetails/${_id}`}>
        <button className="btn bg-btn font-extrabold text-white w-full">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default Table;
