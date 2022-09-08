import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import OpenIcon from '../assets/img/ExpandIcon.svg'

import '../assets/css/styles.css'
import '../assets/css/sideBar.css'

export default function SideBar({ parentToChild }) {

    const [isClosed, setClosed] = useState(false);

    function SearchCurrentScreen() {
        var CurrentItem = document.getElementById(parentToChild).classList;
        CurrentItem.add('side_bar_item__current');
        CurrentItem.remove('press_btn', 'side_bar_item');
    }

    function SetCurrentScreen(item) {
        localStorage.setItem('clashWar-CurrentScreen', item.target.id)
    }

    function CloseSideBar() {
        setClosed(true);
        document.getElementById('main').classList.add('full');
    }

    function OpenSideBar() {
        document.getElementById('main').classList.remove('full');
        setClosed(false);

        setInterval(function SearchCurrentScreen() {
            let CurrentItem = document.getElementById(localStorage.getItem('clashWar-CurrentScreen')).classList;
            CurrentItem.add('side_bar_item__current');
            CurrentItem.remove('press_btn', 'side_bar_item');
        }, 50)
    }

    useEffect(SearchCurrentScreen, [])

    return (
        <div>
            {isClosed === false ?

                <aside className='column side_bar_background'>
                    <section className='column side_bar_suport'>
                        <Link to='/' onClick={SetCurrentScreen} id="1" className='side_bar_item press_btn'>Home</Link>
                        <Link to='/Cassino' onClick={SetCurrentScreen} id="2" className='side_bar_item press_btn'>Cassino</Link>
                        <Link to='/Temas' onClick={SetCurrentScreen} id="3" className='side_bar_item press_btn'>Temas</Link>
                    </section>

                    <section className='column align side_bar_switch_suport'>
                        <button onClick={CloseSideBar} className='side_bar_switch press_btn column centralize align'>Fechar aba</button>
                    </section>
                </aside>
                :
                <aside onClick={OpenSideBar} className='closed_side_bar column centralize align'><img src={OpenIcon} /></aside>
            }
        </div>
    )
}

