import css from './Priquito.module.css'

function priquito(props) {
    function press(){
        props.setCliques(props.cliques +props.power)
    }
    return (
        <div className={css.tudo}>
            <p className={css.presses} >{props.cliques}</p>
            <button onClick={()=>press()} className={css.priquito}>
                <img src="/priquito.png" alt=""/>
            </button>
        </div>
    );
}

export default priquito;
