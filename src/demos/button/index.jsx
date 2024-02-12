import { useState } from "react"
import Modal from "../../components/modal"
const ButtonDemo = ()=> {
    const handleClick = ()=> {
        setShowModal(true)
    }
    const [showModal, setShowModal] = useState(false)
    const onModalClose = (state)=> {
        setShowModal(state)
    }
    return (
        <>
        <div className="main-container">
            <button onClick={handleClick}>
                click me
            </button>
            <div className="button" onClick={handleClick}>
                click me
            </div>
        </div>
        <Modal showModal={showModal} handleClose={onModalClose} modalMessage={"Hello future Globers!"}/>
        </>
        
    )
}

export default ButtonDemo