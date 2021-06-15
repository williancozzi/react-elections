export default function Candidate() {
    return (
        <div className="border-1 shadow w-48 h-48">
            <div>
                <span>foto</span>
                <div className="flex flex-col">
                    <span>porcentagem</span>
                    <span>votos</span>
                </div>
                <div className="flex flex-col">
                    <span>Nome</span>
                    <span>eleito ?</span>
                </div>
            </div>
        </div>
    );
}
