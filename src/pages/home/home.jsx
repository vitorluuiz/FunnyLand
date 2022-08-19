import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../../assets/css/styles.css'
import '../../assets/css/home.css'

export default function Home() {

    const [PlayersList, setPlayersList] = useState([]);
    const [Tagclan, setTagClan] = useState('');

    function SearchClan(event) {
        event.preventDefault();

        axios('https://api.clashofclans.com/v1/clans/%232Q2JU2JJY/members', {
            headers: {
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImQ0MTU3OGVjLTc1MDktNDU3ZC04YWFkLTgwMTA4NGQxODM4ZSIsImlhdCI6MTY2MDg2NjY5MCwic3ViIjoiZGV2ZWxvcGVyL2E2M2I1MDRkLWFhZDEtYTY0Mi0wMmMyLTU4YTA0YjIwZDJlNCIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjU0Ljg2LjUwLjEzOSIsIjE5MS4xODAuMTY3LjE4Il0sInR5cGUiOiJjbGllbnQifV19.PY5fo2UxeQxHmnbR3JxlHKr454eCRTKXUehhRv9sG39UuMdCOB0fwacmKIXaBGdrPSnJnVbeqzPit5wiBPC-SA'
            }
        })
            .then(response => {
                console.log(response.data)
                if (response.status === 200) {
                    setPlayersList(response.data)
                }
            });
    }

    return (
        <div>
            <main className='column container align centralize'>
                <div>
                    <form className='column align'>
                        <div className='input_suport__div column'>
                            <label htmlFor='searchClan'>Id do seu clan</label>
                            <input onChange={(e) => setTagClan(e.target.value)} value={Tagclan} id='searchClan' placeholder='#334D43HF'></input>
                        </div>
                        <button onClick={SearchClan} className='confirm__btn' >Verificar</button>
                    </form>

                    <section>
                        {PlayersList.map((player) => [
                            <article>
                                {player.name}
                            </article>
                        ])}
                    </section>
                </div>
            </main>
        </div>
    )
}