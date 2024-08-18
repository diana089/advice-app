import { useState, useEffect } from "react"
import { fetchAdvice } from "./fetchAdvice"
import { AdviceData } from "./types";
import "./advice.css";
import  AdviceButton from './img/dice.png';
import  Divider from './img/pattern-divider-desktop.svg';

export const Advice = () => {
    const [currentAdvice, setCurrentAdvice] = useState<AdviceData>({id: 0, advice: 'lol'});

    const getAdvice = () => {
        fetchAdvice().then(({slip}: {slip: AdviceData}) => {
            setCurrentAdvice(slip);
        });
    }

    const handleGetAdvice = () => {
        getAdvice();
    }

    useEffect(() => {
        getAdvice();
    }, [])

    return (
        <div className="advice-block">
            <p className="advice-id" id="advice-id">ADVICE #{currentAdvice.id}</p>
            <p className="advice" id="advice">{currentAdvice.advice}</p>
            <img src={Divider} className="advice-block__img"/>
            <button onClick={handleGetAdvice} className="generate-button"><img className="advice-block__img" src={ AdviceButton }/></button>
        </div>
    )
}