import {ContainerNav} from "./styled"
import {MenuNav} from "./styled"
function Nav(props){
    return(
        <ContainerNav>
                <ul>
                    <MenuNav>Início</MenuNav>
                    <MenuNav>Em alta</MenuNav>
                    <MenuNav>Inscrições</MenuNav>
                    <hr></hr>
                    <MenuNav>Originais</MenuNav>
                    <MenuNav>Histórico</MenuNav>
                </ul>
            </ContainerNav>
    )
}
export default Nav