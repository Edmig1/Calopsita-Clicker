import css from './CardUps.module.css'

function CardUps(props) {
    function press(){
        if(props.cliques >= parseInt(props.preco)){
            props.setPower(props.power + props.qtd)
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
