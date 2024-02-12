import { useState } from "react"
import Modal from "../../components/modal"
const LinkDemo = ()=> {
    const [showModal, setShowModal] = useState(false)
    const handleClick = ()=> {
        setShowModal(true)
    }
    const onModalClose = (state)=>{
        setShowModal(state)
    }
    return (
        <>
            <div className="main-container">
                <a onClick={handleClick}>learn more</a>
                <button onClick={handleClick} className="button-link">learn more</button>
            </div>
            <Modal showModal={showModal} handleClose={onModalClose} modalMessage="I'm the king of the world"/>
        </>
    )
}

export default LinkDemo