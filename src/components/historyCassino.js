import React, { useEffect, useState } from "react";

import '../assets/css/cassino.css'

export default function HistorySection({ currentResult, update }) {

    const [ResultList, setResultList] = useState([]);
    const [Update, setUpdated] = useState(0);
    const [isSort, setSorted] = useState(false);

    function SortLastTen() {
        if (!isSort) {
            for (let i = 1; i <= 31; i++) {
                let result = Math.random();
                let itemList;
                if (result > 0.51) {
                    itemList = 'red';
                }
                if (result < 0.49) {
                    itemList = 'black';
                }
                if (result < 0.51 && result > 0.49) {
                    itemList = 'green';
                }
                ResultList.push(itemList);
            }
        }
        if(ResultList.length > 8){
            ResultList.shift();
        }
        setSorted(true);
    }

    function RefreshLastResult() {
        if (!currentResult == '') {
            ResultList.push(currentResult);
            setUpdated(Update + 1);
        }
    }

    useEffect(SortLastTen, [Update]);
    useEffect(RefreshLastResult, [update]);

    return (
        <div className="column cassino_history_background">
            {ResultList.map((Result => {
                return (
                    <div className={Result + ' item_list_history'}></div>
                )
            }))}

        </div>
    )
}