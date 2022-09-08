import React from "react";

import '../../assets/css/temas.css'

import SideBar from "../../components/side_bar";

export default function Temas() {

    function ChangeColor(click) {
        let page = document.querySelector('html')
        let appliedColor = localStorage.getItem('clashWar-ColorTheme');

        if(appliedColor != click.target.id){
            page.classList.add(click.target.id);
            page.classList.remove(appliedColor)
            localStorage.setItem('clashWar-ColorTheme', click.target.id)
        }
    }

    return (
        <div className="row">
            <SideBar parentToChild={'3'} />

            <main id="main" className="column centralize align temas_background">
                <section className="row centralize temas_colors_suport">

                    <article className="color_option row centralize align">
                        <button id="standard" onClick={ChangeColor} className="press_btn color_option__btn">Padrão</button>
                    </article>

                    <article className="color_option row centralize align">
                        <button id="coral" onClick={ChangeColor} className="press_btn color_option__btn">Coral</button>
                    </article>

                    <article className="color_option row centralize align">
                        <button id="skyBlue" onClick={ChangeColor} className="press_btn color_option__btn">Céu claro</button>
                    </article>

                    <article className="color_option row centralize align">
                        <button id="rose" onClick={ChangeColor} className="press_btn color_option__btn">Rose</button>
                    </article>

                    <article className="color_option row centralize align">
                        <button id="blackWhite" onClick={ChangeColor} className="press_btn color_option__btn">Neutro</button>
                    </article>

                </section>
            </main>
        </div>

    )
}