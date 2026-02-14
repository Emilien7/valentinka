import {type FC, useState} from "react";

export const Step3: FC = () => {
    const [show, setShow] = useState(false)

    const handleClick = () => {
        setShow(true)
    }

    return (
        <>
            <div>2. Что мы любим делать вместе?</div>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                <button onClick={handleClick} style={{width: '400px', paddingLeft: '50px', textAlign: 'start', backgroundColor: show ? 'green' : 'transparent'}}>A. Катать на сноуборде</button>
                <button onClick={handleClick} style={{width: '400px', paddingLeft: '50px', textAlign: 'start', backgroundColor: show ? 'green' : 'transparent'}}>B. Батониться</button>
                <button onClick={handleClick} style={{width: '400px', paddingLeft: '50px', textAlign: 'start', backgroundColor: show ? 'green' : 'transparent'}}>C. Целоваться</button>
                <button onClick={handleClick} style={{width: '400px', paddingLeft: '50px', textAlign: 'start', backgroundColor: show ? 'green' : 'transparent'}}>D. Кушать</button>
            </div>
            {show && <div>Ну естественно!</div>}
        </>
    )
}