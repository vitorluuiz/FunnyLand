import { wait } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState } from "react";

import '../assets/css/cassino.css'
import HistorySection from "./historyCassino";

export default function CassinoContent() {

    return (
        <div className="row cassino_content_background">
            <section className="suport_cassino_content column">
                <div id="result" className="header_double row">
                    Double
                </div>

                <div className="double_option_suport row">
                    <button id="black" className="double_option press_btn">Black</button>
                    <button id="red" className="double_option press_btn">Red</button>
                </div>

            </section>

            <HistorySection />
        </div>
    )
}
