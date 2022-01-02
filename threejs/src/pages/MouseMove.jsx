import { useRef, useState } from "react";

const MouseMove = () => {
    const [x, setX] = useState();
    const [y, setY] = useState();
    const pinkPoint = useRef(null);
    const moveFunction = (e) => {
        setX(e.clientX)
        setY(e.clientY)
        pinkPoint.current.style.transfrom ="translate(100px,100px)"
    }

    return(
        <div 
            ref={pinkPoint}
            style={{background: "pink", height:"100px", width:"100px"}}  
            onMouseMove={moveFunction} >
            hello
        </div>
    )
}

export default MouseMove;