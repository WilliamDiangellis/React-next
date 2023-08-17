import TabelaSerieA from "@/components/listas/TabelaSerieA"
import { IconBallFootball } from "@tabler/icons-react"

export default function PaginaListaBasica() {
    const times = [
        'Botafogo',
        'Palmeiras',
        'Grêmio',
        'Flamengo',
        'Bragantino',
        'Athletico-PR',
        'Fluminense',
        'Cuiabá',
        'São Paulo',
        'Atlético-MG'
    ]

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="flex items-center gap-2 text-5xl font-black">
                <IconBallFootball size={50} stroke={1} className="text-green-400" />
                Tabela Série A
            </h1>
            <TabelaSerieA times={times} />
        </div>
    )
}
