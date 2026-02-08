import "./DataCard.css";

const DataCard = ({ data, onDelete }) => {
  return (
    <div className="save-data-card">
      <div className="card-content">{data}</div>
      <button className="delete-btn" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default DataCard;
