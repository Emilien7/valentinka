import {type FC, useState} from "react";

export const Step5: FC = () => {
    const [show, setShow] = useState(false)

    const handleClick = () => {
        setShow(true)
    }

    return (
        <>
            <div>4. Что ты умеешь делать лучше всего?</div>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                <button onClick={handleClick} style={{width: '400px', paddingLeft: '50px', textAlign: 'start', backgroundColor: show ? 'green' : 'transparent'}}>A. Катать на сноуборде</button>
                <button onClick={handleClick} style={{width: '400px', paddingLeft: '50px', textAlign: 'start', backgroundColor: show ? 'green' : 'transparent'}}>B. Кодить</button>
                <button onClick={handleClick} style={{width: '400px', paddingLeft: '50px', textAlign: 'start', backgroundColor: show ? 'green' : 'transparent'}}>C. Танцевать</button>
                <button onClick={handleClick} style={{width: '400px', paddingLeft: '50px', textAlign: 'start', backgroundColor: show ? 'green' : 'transparent'}}>D. Читать</button>
            </div>
            {show && <div>И это правильный ответ!</div>}
        </>
    )
}