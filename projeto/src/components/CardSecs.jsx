import css from './CardSecs.module.css'

function CardUps(props) {
    function press(){
        if(props.cliques >= parseInt(props.preco)){
            props.setSeconds(props.seconds + props.qtd)
            props.setCliques(props.cliques - parseInt(props.preco))
        }
    }
    return (
        <button onClick={()=>press()} className={css.tudo}>
            <p>{props.texto}</p>
            <p>{props.preco}</p>
        </button>
    );
}

export default CardUps;
