import React, { useState } from 'react';
import '../../assets/css/styles.css'
import '../../assets/css/home.css'
import { useEffect } from 'react';
import { render } from 'react-dom';
import SideBar from '../../components/side_bar.js'

export default function Home() {

    const [Lista, setLista] = useState([]);
    const [Code, setCode] = useState('');

    function PostCode() {
        if (Code == 1000) {
            let currentMoney = parseInt(localStorage.getItem('clashWar-CassinoMoney'));
            localStorage.setItem('clashWar-CassinoMoney', currentMoney + parseInt(1000));
        }

        if (Code == 0) {
            localStorage.setItem('clashWar-CassinoMoney', 0);
        }
    }

    return (
        <div className='row'>
            <SideBar screen={'side1'} />

            <main id='main' className='column align centralize'>
                <h1>FunnyLand</h1>
                <div className='block_home_suport column centralize align'>
                    <form className='column align'>
                        <div className='input_suport__div column'>
                            <input onChange={(e) => setCode(e.target.value.toUpperCase())} value={Code} id='searchClan' placeholder='#334D43HF'></input>
                        </div>
                        <button onClick={PostCode} className='confirm__btn press_btn' >Verificar</button>
                    </form>
                </div>
            </main>
        </div>
    )
}