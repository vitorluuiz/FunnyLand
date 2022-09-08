import React, { useState } from 'react';
import '../../assets/css/styles.css'
import '../../assets/css/home.css'
import { useEffect } from 'react';
import { render } from 'react-dom';
import SideBar from '../../components/side_bar.js'

export default function Home() {

    const [Lista, setLista] = useState([]);
    const [Item, setItem] = useState('');

    function LoadSettings() {
        // seleciona todos os elementos do Html
        let page = document.querySelector('html')
        let appliedColor = localStorage.getItem('clashWar-ColorTheme');
        if (appliedColor != null) {
            // Adiciona a classe já definida no Armazenamento local
            page.classList.add(localStorage.getItem('clashWar-ColorTheme'));
        }
        else {
            page.classList.add('standard');
        }
    }

    useEffect(LoadSettings, [])

    return (
        <div className='row'>
            <SideBar parentToChild={'1'} />

            <main id='main' className='column align centralize'>
                <h1>ClashWar</h1>
                <div className='block_home_suport column centralize align'>
                    <form className='column align'>
                        <div className='input_suport__div column'>
                            <input onChange={(e) => setItem(e.target.value.toUpperCase())} value={Item} id='searchClan' placeholder='#334D43HF'></input>
                        </div>
                        <button className='confirm__btn press_btn' >Verificar</button>
                    </form>

                    <section>
                        {Lista.map((item) => [
                            <article>
                                {item}
                            </article>
                        ])}
                    </section>
                </div>
            </main>
        </div>
    )
}