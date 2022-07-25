import ReactDOM from 'react-dom'
import './Model.css'
export default function Model({children, handleClose}) {
  return ReactDOM.createPortal( (
    <div className="model-backdrop">
    <div className="model">
        {children}
    <button onClick={handleClose}>Close</button>
    </div>
    </div>
  ),document.body)
}
   