import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import OpenIcon from '../assets/img/ExpandIcon.svg'

import '../assets/css/styles.css'
import '../assets/css/sideBar.css'

export default function SideBar({ screen }) {
    // O parâmetro screen é acessado da classe pai, para trazer a informação de qual tela está sendo mostrada

    const sideBar = document.getElementById('sideBar');

    // Variável para controlar o fechamento da barra lateral
    const [isClosed, setClosed] = useState(false);
    const [isListener, setEvent] = useState(false);

    // Função para definir o inicio do sistema
    function SearchCurrentSettings() {
        // Cria uma váriavel para representar a selecão da side bar com o Id indicado
        var currentItem = document.getElementById(screen).classList;
        // Adiciona a classe que corresponde a um item selecionado
        currentItem.add('side_bar_item__current');
        // Exclui as ckasses que correspondem a um item não selecionado
        currentItem.remove('press_btn', 'side_bar_item');

        // Seleciona o elemento Html
        let page = document.querySelector('html')
        // Busca no armazenamento local a cor selecionada no dispositivo
        let appliedColor = localStorage.getItem('clashWar-ColorTheme');
        // Caso seja em encontrada uma cor
        if (appliedColor != null) {
            // Adiciona a classe já definida no Armazenamento local
            page.classList.add(appliedColor);
        }
        // Caso não seja encontrada uma cor, é aplicado um tema padrão inicial
        else {
            page.classList.add('standard');
        }
    }

    // Função para fechar a barra lateral
    function CloseSideBar() {
          // Altera o state para definir que a barra lateral está fechada
        setClosed(true);
        // Adiciona uma classe para a main definindo que a mesma foi ampliada
        document.querySelector('main').classList.add('full');  
    }

    // Função para abrir a barra lateral
    function OpenSideBar() {
        // Removendo a classe 'full' definindo que a main está em seu tamanho padrão
        document.querySelector('main').classList.remove('full');
        // Altera o state para definir que a barra lateral foi fechada
        setClosed(false);

        // Invoca a função 'SearchCurrentSettings' para atualizar o sistema da barra lateral
        setTimeout(SearchCurrentSettings, 50);
    }

    
    useEffect(SearchCurrentSettings, [])

    return (
        <div>
            {isClosed === false ?
                <aside id='sideBar' className='column side_bar_background'>
                    <section className='column side_bar_suport'>
                        <Link to='/' id="side1" className='side_bar_item press_btn'>Home</Link>
                        <Link to='/Cassino' id="side2" className='side_bar_item press_btn'>Cassino</Link>
                        <Link to='/Temas' id="side3" className='side_bar_item press_btn'>Temas</Link>
                    </section>

                    <section className='column align side_bar_switch_suport'>
                        <button onClick={CloseSideBar} className='side_bar_switch press_btn column centralize align'>Fechar aba</button>
                    </section>
                </aside>
                :
                <aside onClick={OpenSideBar} className='closed_side_bar column centralize align'><img src={OpenIcon} /></aside>
            }
        </div >
    )
}

