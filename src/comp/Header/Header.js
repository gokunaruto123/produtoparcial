import { ContainerHeader, Texto, Titulo } from "./styled"
import { Button } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import React, { useState } from "react"
import { Textarea, } from "@chakra-ui/react"
import {
    useDisclosure,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
} from '@chakra-ui/react'

function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    const navigate = useNavigate()

    const [texto, setTexto] = useState('')

    const proSobre = () => {
        navigate('/sobre')
    }
    const proHome = () => {
        navigate('/')
    }
    const praDenu = () => {
        navigate('/denuncie')
    }

    const textoNovo = (e) =>{
        setTexto(e.target.value)

    }

    return (
        <>

       
            <ContainerHeader>
                <Button onClick={proHome} colorScheme="white" variant='ghost'>THE TALK</Button>
                <div>
                    <Button onClick={onOpen} colorScheme="white" variant='ghost'>Denuncie</Button>


                    <AlertDialog motionPreset='slideInBottom' leastDestructiveRef={cancelRef} onClose={onClose} isOpen={isOpen} isCentered>
                        <AlertDialogOverlay />
                        <AlertDialogContent>
                            <Textarea 
                            placeholder="Digite sua denúncia.." 
                            resize="none" 
                            value={texto}
                            onChange={textoNovo}
                            rows="5" 
                            // cols="6" 
                            // minLength='1' 
                            />
                            <AlertDialogFooter>
                            {texto ? (<Button ref={cancelRef} 
                            onClick={onClose} 
                            disabled="false">
                            Enviar
                            </Button>
                            ):(
                            <Button ref={cancelRef} 
                            onClick={onClose} 
                            isDisabled="true">
                            Enviar
                            </Button>)
            
                                         }
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                    <Button onClick={proSobre} colorScheme="white" variant='ghost'>Sobre</Button>
                </div>
            </ContainerHeader>
        </>
    )
}
export default Header
