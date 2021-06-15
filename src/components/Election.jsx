export default function Election() {
    return (
        <div className="p-2 w-full  ">
            <div className="mb-4">
                <h1>
                    <strong>Eleição em xxx</strong>
                </h1>
            </div>
            <div className="flex flex-row justify-around space-x-2 mb-4">
                <h2>
                    <strong>Total de eleitores: </strong>
                </h2>

                <h2>
                    <strong>Abstenção: </strong>
                </h2>

                <h2>
                    <strong>Comparecimento: </strong>
                </h2>
            </div>

            <span>x candidates</span>
        </div>
    );
}
