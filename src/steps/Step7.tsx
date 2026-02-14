import {type FC, useState} from "react";

export const Step7: FC = () => {
    const [show, setShow] = useState(false)

    const handleClick = () => {
        setShow(true)
    }

    return (
        <>
            <div>5. Я люблю тебя, а ты меня?</div>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                <button onClick={handleClick} style={{width: '400px', paddingLeft: '50px', textAlign: 'start', backgroundColor: show ? 'green' : 'transparent'}}>A. Да</button>
                <button onClick={handleClick} style={{width: '400px', paddingLeft: '50px', textAlign: 'start', backgroundColor: show ? 'green' : 'transparent'}}>B. Конечно</button>
                <button onClick={handleClick} style={{width: '400px', paddingLeft: '50px', textAlign: 'start', backgroundColor: show ? 'green' : 'transparent'}}>C. Абсолютно</button>
                <button onClick={handleClick} style={{width: '400px', paddingLeft: '50px', textAlign: 'start', backgroundColor: show ? 'green' : 'transparent'}}>D. Варианта "нет" нет, поэтому тоже да</button>
            </div>
            {show && <div>И все это еще и с бусинкой!</div>}
        </>
    )
}