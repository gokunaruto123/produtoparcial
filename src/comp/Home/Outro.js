import Card from "../Card/card"
// import styled from "./styled"
import { ContainerHome } from "./styled"
function Home(props){
    console.log(props.reproduzVideo)
    return(
<ContainerHome>
    <Card reproduz={props.reproduz}
    titulo={"Video 1"}/>

    <Card reproduz={props.reproduz}
    link={"https://picsum.photos/400/400?a=1 "}
    titulo={"Video 2"}/>

    <Card reproduz={props.reproduz}
    link={"https://picsum.photos/400/400?a=1 "}
    titulo={"Video 3"}/>

    <Card reproduz={props.reproduz}
    link={"https://picsum.photos/400/400?a=1 "}
    titulo={"Video 4"}/>

    <Card reproduz={props.reproduz}
    link={"https://picsum.photos/400/400?a=1 "}
    titulo={"Video 5"}/>

    <Card reproduz={props.reproduz}
    link={"https://picsum.photos/400/400?a=1 "}
    titulo={"Video 6"}/>

    <Card reproduz={props.reproduz}
    link={"https://picsum.photos/400/400?a=1 "}
    titulo={"Video 7"}/>

    <Card reproduz={props.reproduz}
    link={"https://picsum.photos/400/400?a=1 "}
    titulo={"Video 8"}/>

    <Card reproduz={props.reproduz}
    link={"https://picsum.photos/400/400?a=1 "}
    titulo={"Video 9"}/>

    <Card reproduz={props.reproduz}
    link={"https://picsum.photos/400/400?a=1 "}
    titulo={"Video 10"}/>

</ContainerHome>
 )
}
export default Home