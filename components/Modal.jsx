
const Modal = ({ isOpen, onClose, children}) => {
    if (!isOpen) return null;

  return (
    <div className="absolute inset-0 bg-gray-900/40 flex items-center justify-center p-4 z-50"
    onClick={onClose}>
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative"
        onClick={(e) => e.stopPropagation()}>
            <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                &times;
            </button>

            {children}
        </div>
    </div>
  )
}

export default Modal