import { useRef, useState } from "react"

const STARS_COUNT = 5;
const STARS = new Array(STARS_COUNT).fill(0)
const Raiting = ()=> {
    const [raiting, setRaiting] = useState(-1)
    const rateContainerRef = useRef(null);
    const handleClick = (index)=> {
        setRaiting(index)
    }
    const handleKeyUp = (event)=> {
        const keyPressed = event.key
        const starElementList = rateContainerRef.current.children
        if(keyPressed === 'Enter' || keyPressed === ' '){
            setRaiting(0)
        }
        else if(keyPressed === 'ArrowRight' || keyPressed === 'ArrowUp') {
            if(raiting < STARS_COUNT - 1) {
                setRaiting((prevRaiting)=>{
                    starElementList[prevRaiting + 1].focus()
                    return prevRaiting + 1
                })
            } else {
                starElementList[0].focus()
                setRaiting(0)
            }
        }
        else if(keyPressed === 'ArrowLeft' || keyPressed === 'ArrowDown') {
            if(raiting > 0) {
                setRaiting((prevRaiting)=> {
                    starElementList[prevRaiting - 1].focus()
                    return prevRaiting - 1})
            } else {
                starElementList[STARS_COUNT - 1].focus()
                setRaiting(STARS_COUNT - 1)
                
            }
        }
    }
    return (
        <div className="raiting-container" role="radiogroup" aria-label="rate us" ref={rateContainerRef}>
            {STARS.map((_,index)=> (
                <div key={index} className={`five-pointed-star ${raiting >= index ? 'active' : ''}`} 
                onClick={()=> handleClick(index)}
                tabIndex={`${index ===0 ? '0':'-1'}`}
                onKeyUp={handleKeyUp}
                role="radio"
                aria-checked={raiting === index}
                aria-label={`${index + 1} points`}
                ></div>
            ))}
        </div>
        
    )
}

export default Raiting
