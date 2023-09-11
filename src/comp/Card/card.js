import {BoxPagPrincipal, Fonte4} from "./styled" 



function Card(props){
    return(
    <>
    <BoxPagPrincipal onClick={props.reproduz}>
        <b>{props.titulo}</b>
        <Fonte4>{props.conteudo}</Fonte4>
    </BoxPagPrincipal>
    </>
    )
}
export default Card