import React, { useEffect } from "react";

const UserDetailsModal = ({ className, isOpen, onClose, children, overlayClassName }) => {
  // Effect hook to handle modal behavior when it mounts, updates, or unmounts
  useEffect(() => {
    // Function to handle the escape key press to close the modal
    const handleEscape = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };

    // If the modal is open, disable scrolling of the body and add event listener for escape key
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscape);
    } else {
      // If the modal is closed, enable scrolling of the body
      document.body.style.overflow = "auto";
    }

    // Cleanup function to reset body scrolling and remove event listener when modal unmounts or updates
    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]); // Run effect when isOpen or onClose changes

  // If modal is not open, return null (don't render anything)
  if (!isOpen) return null;

  // Render the modal and overlay
  return (
    <>
      {/* Overlay div to cover the background */}
      <div
        className={`modal-overlay ${overlayClassName}`}
        onClick={onClose} // Close modal when overlay is clicked
      />
      {/* Modal content */}
      <div className={`modal ${className}`}>
        {/* Children passed to the modal */}
        {children}
        {/* Close button to close the modal */}
        <button className="modal-close" onClick={onClose}>
          Close
        </button>
      </div>
    </>
  );
};

export default UserDetailsModal;
