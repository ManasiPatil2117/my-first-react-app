import ReactDOM from 'react-dom'
import './Model.css'
export default function Model({ children, handleClose, isSaleModal }) {
  return ReactDOM.createPortal((
    <div className="model-backdrop">
      <div className="model" style={{
        border: "4px solid",
        borderColor: isSaleModal ? "#ff4500" : "#555",
        textAlign: "center"
      }}>
        {children}
        <button 
        onClick={handleClose}
        className={isSaleModal ? "Sale-btn" : ""}
        >Close</button>
      </div>
    </div>
  ), document.body)
}
