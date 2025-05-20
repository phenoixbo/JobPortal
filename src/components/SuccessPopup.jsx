import "../styles/styles.css";

function SuccessPopup({ message }) {
  return (
    <div className="popup">
      <p>{message}</p>
    </div>
  );
}

export default SuccessPopup;
