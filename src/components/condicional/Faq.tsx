import Pergunta from "./Pergunta";

export default function Faq() {
    return (
        <div className="flex flex-col gap-2 w-[90%] md:w-3/4">
            <Pergunta texto="Quem descobriu o Brasil?" resposta="sei não"/>
            <Pergunta texto="O que é Typescript?" resposta="sei não"/>
            <Pergunta texto="React é um framework" resposta="sei não"/>
            <Pergunta texto="Quais as principais funcionalidades do NextJS" resposta="sei não"/>
        </div>
    )
}