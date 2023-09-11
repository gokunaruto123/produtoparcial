import { Button, Textarea } from "@chakra-ui/react"
import { CardContainer, ImgCard, TitCard, DivCard, TxtCard, DivPost } from "./styled"
import Card from "../Card/card"
import { Divider } from '@chakra-ui/react'
import Footer from "../Footer/Footer"
function Report(){


    const array = [
        {
            titulo: 'Eu fui abordado por um policial no carnaval..',
            conteudo: 'Certa vez no carnaval de Porto Alegre fui abordado por um policial e quando perguntei por que estava sendo abordado, simplesmente tomei um soco no rosto.'
        },
        {
            titulo: 'oi2',
            conteudo: 'conteudo'
        },
        {
            titulo: 'oi3',
            conteudo: 'conteudo'
        }
    ]


    const novoCard = array.map((conteudo, index) =>{
        return(
            <Card
            key={index}
            titulo={conteudo.titulo}
            conteudo={conteudo.conteudo}
            />
        )
    })
    return(
    <>
    <CardContainer>
    {/* <Textarea placeholder="Digite sua denúncia.." resize="none" rows="5" cols=""/>
    
    <DivCard> 
    <Button variant="outline">enviar</Button>
    </DivCard> */}

    <DivPost>
        {novoCard}
        
    </DivPost>
    </CardContainer>
    </>
    )
}
export default Report