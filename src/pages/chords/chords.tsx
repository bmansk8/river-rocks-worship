import { greaterLambChart } from "./charts/greaterLambChart";

export default function Chords(){
    return(
        <div className="container">
            <h1>Chords</h1>

            <div className="flex flex-col mt-20">
                <h2>Our Victory</h2>
                <pre>
                {greaterLambChart}
                </pre>
            </div>
        </div>
    )
}