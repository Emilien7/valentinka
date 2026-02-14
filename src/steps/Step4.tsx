import {type FC, useState} from "react";

export const Step4: FC = () => {
    const [show, setShow] = useState(false)

    const handleClick = () => {
        setShow(true)
    }

    return (
        <>
            <div>3. Когда мы поженились?</div>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                <button onClick={handleClick} style={{width: '400px', paddingLeft: '50px', textAlign: 'start', backgroundColor: show ? 'green' : 'transparent'}}>A. В мае</button>
                <button onClick={handleClick} style={{width: '400px', paddingLeft: '50px', textAlign: 'start', backgroundColor: show ? 'green' : 'transparent'}}>B. В 2019 году</button>
                <button onClick={handleClick} style={{width: '400px', paddingLeft: '50px', textAlign: 'start', backgroundColor: show ? 'green' : 'transparent'}}>C. 31 числа</button>
                <button onClick={handleClick} style={{width: '400px', paddingLeft: '50px', textAlign: 'start', backgroundColor: show ? 'green' : 'transparent'}}>D. Весной</button>
            </div>
            {show && <div>Это было не сложно!</div>}
        </>
    )
}