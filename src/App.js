import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
    console.log("Teste no console do navegador");

    return (
        <div className="w-full">
            <Header />

            <Main />
        </div>
    );
}
