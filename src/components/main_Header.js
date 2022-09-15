import React, { useEffect, useState } from 'react';

import '../assets/css/main_Header.css'

export default function MainHeader() {
    const [CurrentSection, setSection] = useState('header1');

    function SearchCurrentSection() {
        var currentSection = document.getElementById(CurrentSection);
        currentSection.classList.add('main_header_item__current')
        currentSection.classList.remove('main_header_item')
    }

    function SetCurrentSection(item) {
        var pastSection = document.getElementById(CurrentSection).classList;
        var newSection = document.getElementById(item.target.id).classList;
        if (pastSection != newSection) {
            pastSection.add('main_header_item')
            pastSection.remove('main_header_item__current')

            newSection.add('main_header_item__current')
            newSection.remove('main_header_item')
            setSection(item.target.id);
        }
    }

    useEffect(SearchCurrentSection, [])

    return (
            <header className='row align centralize main_header_suport'>
                <button id='header1' onClick={SetCurrentSection} className='main_header_item press_btn'>Double</button>
                <button id='header2' onClick={SetCurrentSection} className='main_header_item press_btn'>Jackpot</button>
            </header>
    )
}