import {type FC, useState} from "react";

export const Step6: FC = () => {
    const [show, setShow] = useState(false)

    const handleClick = () => {
        setShow(true)
    }

    return (
        <>
            <div>5. Что нас ждет в будущем?</div>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                <button onClick={handleClick} style={{width: '400px', paddingLeft: '50px', textAlign: 'start', backgroundColor: show ? 'green' : 'transparent'}}>A. Свой дом</button>
                <button onClick={handleClick} style={{width: '400px', paddingLeft: '50px', textAlign: 'start', backgroundColor: show ? 'green' : 'transparent'}}>B. Новая машина</button>
                <button onClick={handleClick} style={{width: '400px', paddingLeft: '50px', textAlign: 'start', backgroundColor: show ? 'green' : 'transparent'}}>C. Больше любви</button>
                <button onClick={handleClick} style={{width: '400px', paddingLeft: '50px', textAlign: 'start', backgroundColor: show ? 'green' : 'transparent'}}>D. Все, что захотим</button>
            </div>
            {show && <div>И все это еще и с бусинкой!</div>}
        </>
    )
}