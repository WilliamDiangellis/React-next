interface TabelaSerieAProps {
    times: string[]
}

export default function TabelaSerieA(props: TabelaSerieAProps) {
    console.log(props.times);

    for (let i = 0; i < props.times.length; i++) {
        console.log(props.times[i]);
    }

    return (
        <ol>
            <li>Time</li>
        </ol>
    )
}