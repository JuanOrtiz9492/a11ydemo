import { useEffect, useState } from "react"

const Modal = ({showModal, modalMessage, handleClose})=> {
    const [isOpen, setIsOpen] = useState(false)
    const closeModal = ()=> {
        setIsOpen(false)
        handleClose(false)
    }
    useEffect(()=> {
        if(showModal) {
            setIsOpen(true)
        }
    },[showModal])
    return(
        <div className={`modal-backdrop ${isOpen? 'visible': ''}`}>
            <dialog open={isOpen}>
                <div className="modal-container">
                    <button className="close-button" onClick={closeModal}>X</button>
                    <p>{modalMessage}</p>
                    <button onClick={closeModal}>Continue</button>
                </div>
            </dialog>
        </div>
    )
}
export default Modal