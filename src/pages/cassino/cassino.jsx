import React, { useState } from 'react';
import '../../assets/css/styles.css'
import '../../assets/css/cassino.css'
import { useEffect } from 'react';
import { render } from 'react-dom';
import SideBar from '../../components/side_bar.js'
import MainHeader from '../../components/main_Header';
import CassinoContent from '../../components/cassino_content';

export default function Cassino() {

    const [Lista, setLista] = useState([]);
    const [Item, setItem] = useState('');

    return (
        <div className='row'>
            <SideBar screen={'side2'} />

            <main className='column align centralize'>
                <div id='cassino' className='cassino_suport_background column'>
                    <MainHeader />

                    <CassinoContent />
                </div>
            </main>
        </div>
    )
}