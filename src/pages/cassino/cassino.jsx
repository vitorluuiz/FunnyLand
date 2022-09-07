import React, { useState } from 'react';
import '../../assets/css/styles.css'
import '../../assets/css/cassino.css'
import { useEffect } from 'react';
import { render } from 'react-dom';
import SideBar from '../../components/side_bar.js'

export default function Cassino() {

    const [Lista, setLista] = useState([]);
    const [Item, setItem] = useState('');
    const [CountClick, setCountClick] = useState();

    return (
        <div className='row'>
            <SideBar />

            <main id='main' className='column align centralize'>
                <h1 id='cassino'>Cassino</h1>
                <div id='cassino' className='block_home_suport column centralize align'>
                    
                </div>
            </main>
        </div>
    )
}