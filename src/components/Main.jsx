import Select from "./Select";
import Election from "./Election";
import Candidates from "./Candidates";
import Candidate from "./Candidate";

export default function Main() {
    return (
        <div className="w-full container mx-auto mt-2 p-4 text-center">
            <h2>Escolha o município</h2>
            <Select />
            <div className="border mt-4">
                <Election />
                <div className="p-2">
                    <Candidates>
                        <Candidate />
                        <Candidate />
                        <Candidate />
                        <Candidate />
                        <Candidate />
                        <Candidate />
                    </Candidates>
                </div>
            </div>
        </div>
    );
}
