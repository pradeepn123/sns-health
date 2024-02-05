import React, { useEffect, useState } from "react";

export default () => {
  const [modalContent, setModalContent] = useState();
  const [modalOpen, setModalOpen] = useState(false);

  window.OpenReactModal = (component) => {
    setModalContent(component)
    setTimeout(() => {
      setModalOpen(true);
    });
    document.addEventListener('keydown', checkForEscape)
  }

  const checkForEscape = (event) => {
    console.log('kwydown')
    if (event.key === "Escape") {
      closeModal();
    }
  }

  function closeModal() {
    document.removeEventListener('keydown', checkForEscape)
    setModalOpen(false);
    setTimeout(() => {
      setModalContent('')
    }, 150)
  }

  useEffect(() => {
    if (modalOpen) {
      document.body.classList.add("no-scroll")
    } else {
      document.body.classList.remove("no-scroll")
    }
  }, [modalOpen])

  return (
    <>
      {modalContent &&
        <div className="react-modal-wrapper">
          <div className="react-modal__overlay" onClick={closeModal}></div>
          <div className={`react-modal__content-wrapper${modalOpen ? " open" : ""}`}>
            <button className="react-modal__close-btn" onClick={closeModal}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                <g clipPath="url(#a)">
                  <circle cx="12" cy="12" r="12" fill="#E9E9E9" />
                  <path
                    stroke="#B3B3B3"
                    strokeLinecap="square"
                    strokeWidth={1.797}
                    d="m8 16 4-4m0 0 4 4m-4-4L8 8m4 4 4-4"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h24v24H0z" />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <div className="react-modal__content">
              {modalContent}
            </div>
          </div>
        </div>
      }
    </>
  )
}