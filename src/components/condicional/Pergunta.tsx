import { useState } from "react"
import If from "./If"
import { IconChevronDown } from "@tabler/icons-react"

interface PerguntaProps {
    texto: string
    resposta: string
}

export default function Pergunta(props: PerguntaProps) {
    const [aberta, setAberta] = useState<boolean>(false)
    return (
        <div 
            className={`
            border border-zinc-600 rounded-md overflow-hidden
        `}
        >
            <div className="bg-zinc-800 p-5 cursor-pointer select-none" onClick={() => setAberta(!aberta)}>
                <span>{props.texto}</span>
                <IconChevronDown />
            </div>
            <If test={aberta}>
                <div className="p-5"> {props.resposta}</div>                
            </If>
        </div>
    )
}
            
                
                