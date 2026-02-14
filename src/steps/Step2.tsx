import {type FC, useState} from "react";

export const Step2: FC = () => {
    const [show, setShow] = useState(false)

    const handleClick = () => {
        setShow(true)
    }

    return (
        <>
            <div>1. Как зовут нашу собаку?</div>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                <button onClick={handleClick} style={{width: '400px', paddingInline: '50px', textAlign: 'start', backgroundColor: show ? 'green' : 'transparent'}}>A. Арчи</button>
                <button onClick={handleClick} style={{width: '400px', paddingInline: '50px', textAlign: 'start', backgroundColor: show ? 'green' : 'transparent'}}>B. Бусян</button>
                <button onClick={handleClick} style={{width: '400px', paddingInline: '50px', textAlign: 'start', backgroundColor: show ? 'green' : 'transparent'}}>C. Бубс</button>
                <button onClick={handleClick} style={{width: '400px', paddingInline: '50px', textAlign: 'start', backgroundColor: show ? 'green' : 'transparent'}}>D. Бусинка</button>
            </div>
            {show && <div>Конечно же верно!</div>}
        </>
    )
}