import React, { useEffect, useState } from "react";

import '../assets/css/cassino.css'
import HistorySection from "./historyCassino";

export default function CassinoContent() {

    const [CurrentMoney, setMoney] = useState(0);
    const [CurrentBet, setBet] = useState(0);
    const [TypeBet, setTypeBet] = useState('');
    const [Result, setResult] = useState('');
    const [Update, setUpdated] = useState(0);
    const [Option, setOption] = useState('');

    function SearchSettings() {
        setMoney(parseInt(localStorage.getItem('clashWar-CassinoMoney')));
    }

    function SetPlayerBet() {
        if (CurrentMoney >= TypeBet && TypeBet > 0) {
            let typeBet = parseInt(TypeBet);

            setBet(CurrentBet + typeBet);
            localStorage.setItem('clashWar-CassinoMoney', CurrentMoney - typeBet);
        }
    }

    function ChoseOption(item) {
        setOption(item.target.id);
    }

    function UpdateMoney(currentMoney, currentBet, multi) {
        currentMoney = currentMoney + currentBet * multi;
        return currentMoney;
    }

    function SortResult() {
        let result = Math.random();
        let resultScreen = document.getElementById('result_screen').classList;

        resultScreen.remove('black', 'red', 'green')

        if (result > 0.51) {
            resultScreen.add('red');
            setResult('red');
        }

        if (result < 0.49) {
            resultScreen.add('black');
            setResult('black');
        }

        if (result < 0.51 && result > 0.49) {
            resultScreen.add('green');
            setResult('green');
        }
        setUpdated(Update + 1);
    }

    useEffect(SearchSettings, [CurrentBet]);

    return (
        <div className="row cassino_content_background">
            <section className="column content_game">
                <div className="column draw_game">

                    <div className="row align header_double">
                        <span>Saldo: R${CurrentMoney}</span>
                        <span>{Option}</span>
                        <span>Apostas da rodada: R${CurrentBet}</span>
                    </div>

                    <div className="column align centralize draw_game_sort_suport">
                        <span id="time" className="row align centralize sort_time">Próximo sorteio em: 10 Segundos</span>
                        <div id="result_screen" onClick={SortResult} className="row align centralize sort_roulette"></div>
                    </div>
                </div>

                <div className="row align select_double">

                    <div className="row align centralize input_bet_background">
                        <div className="row align input_bet_suport">
                            <input value={TypeBet} onChange={(e) => setTypeBet(e.target.value)} placeholder="Valor da aposta"></input>
                            <div>
                                <button onClick={SetPlayerBet} className="press_btn">Aposta</button>
                            </div>
                        </div>
                    </div>

                    <div className="row suport_options">

                        <article className="row align centalize bet_btn">
                            <button id="red" onClick={ChoseOption} className="press_btn red">Red</button>
                        </article>

                        <article className="row align centalize bet_btn">
                            <button id="black" onClick={ChoseOption} className="press_btn black">Black</button>
                        </article>

                        <article className="row align centalize bet_btn">
                            <button id="green" onClick={ChoseOption} className="press_btn green">Green</button>
                        </article>

                    </div>
                </div>
            </section>

            <HistorySection update={Update} currentResult={Result} />
        </div>
    )
}