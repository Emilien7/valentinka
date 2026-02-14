import {type FC, useState} from "react";
import Nika from '../assets/Nika.jpg'

export const Step10: FC = () => {
    const [coords, setCoords] = useState<{x: number, y: number}>()
    const [show, setShow] = useState(false)

    return (
        <>
            {show ? <div>
                <img src={Nika} style={{height: '70vh'}} />
                <p style={{fontSize: 48}}>Люблю тебя бесконечно!</p>
            </div> : <><div>Будешь моей валентинкой?</div>
                <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
                    <button onClick={() => setShow(true)}>Естественно</button>
                    <button style={(coords && {position: 'absolute', top: coords.x, left: coords.y, transition: 'all 0.2s ease'})} onMouseEnter={(event) => {
                        const x = Math.random() * (window.innerWidth - event.pageX);
                        const y = Math.random() * (window.innerHeight - event.pageY);
                        setCoords({x, y})
                    }}>Ни за что</button>
                </div></>}
        </>
    )
}