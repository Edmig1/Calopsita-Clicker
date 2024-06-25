import logo from './logo.svg';
import './App.css';
import Priquito from "./components/Priquito";
import {useEffect, useState} from "react";
import CardUps from "./components/CardUps";
import CardSecs from "./components/CardSecs";

function App() {
    const [cliques, setCliques] = useState(0);
    const [power, setPower] = useState(1);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        if (seconds >= 1) {
            const add = () => {
                setCliques(prevCliques => prevCliques + seconds); // Atualiza o estado de cliques corretamente
                setTimeout(add, 1000); // Chama a função add novamente após 1500ms
            };

            add(); // Inicia o ciclo de adição de cliques
        }
    }, [seconds]); // Adiciona seconds como uma dependência para reagir às mudanças

    return (
        <div className="main" style={{backgroundImage: 'url("/fundocerto.png")'}}>
            <div className={'esquerda'}>
                <Priquito power={power} setPower={setPower} cliques={cliques} setCliques={setCliques}></Priquito>
            </div>
            <div className={'direita'}>
                <div className={'upgrades'}>
                    <CardUps qtd={1} texto={'+1 Clicks'} preco={50} power={power} setPower={setPower} cliques={cliques} setCliques={setCliques}></CardUps>
                    <CardUps qtd={2} texto={'+2 Clicks'} preco={150} power={power} setPower={setPower} cliques={cliques} setCliques={setCliques}></CardUps>
                    <CardSecs seconds={seconds} setSeconds={setSeconds} qtd={1} texto={'+1 Clicks/s'} preco={250} cliques={cliques} setCliques={setCliques}></CardSecs>
                    <CardUps qtd={5} texto={'+5 Clicks'} preco={500} power={power} setPower={setPower} cliques={cliques} setCliques={setCliques}></CardUps>
                </div>
            </div>
        </div>
    );
}

export default App;