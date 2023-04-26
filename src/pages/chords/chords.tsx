import { useRef } from "react";
import useAnimateHook from "../../hooks/animateHook";
import { ourVictory } from "./charts/ourVictory";
import { kingJesusCome } from "./charts/kingJesusCome";
import { greaterLamb } from "./charts/greaterLamb";

import "./chords.css";

export default function Chords() {
  const div1 = useRef(null);
  const div2 = useRef(null);
  const div3 = useRef(null);
  useAnimateHook([div1, div2, div3]);

  return (
    <div className="overflow-hidden">
      <div className="container flex flex-col">
        <div className="text-center chordsBackground py-[100px] md:py-[150px]">
          <div className="bg-black opacity-[.75] p-5">
            <h1 className="opacity-[1]">Chords</h1>
            <p className="opacity-[1]">
              Here are chord charts for all our music. Feel free to play these
              for worship, or just to personally worship the Lord
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-20 my-20">
          <div ref={div1} className="flex flex-col hidden-left">
            <h2>Our Victory</h2>
            <pre>{ourVictory}</pre>
          </div>

          <div ref={div2} className="flex flex-col items-end hidden-right">
            <h2>King Jesus Come</h2>
            <pre>{kingJesusCome}</pre>
          </div>

          <div ref={div3} className="flex flex-col hidden-left">
            <h2>Greater Lamb</h2>
            <pre>{greaterLamb}</pre>
          </div>
        </div>

        <span className="text-[10px] text-right">* these charts are intended for tablet and above screen sizes</span>
      </div>
    </div>
  );
}
