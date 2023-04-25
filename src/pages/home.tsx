import { useRef } from "react";
import useAnimateHook from "../hooks/animateHook";

export default function Home() {
  const element1 = useRef<HTMLDivElement>(null);
  const element2 = useRef<HTMLDivElement>(null);
  const element3 = useRef<HTMLDivElement>(null);

  useAnimateHook([element1, element2, element3]);

  return (
    <div className="overflow-hidden">
      <div className="container">
        <div
          ref={element1}
          className="flex flex-col items-start text-left pr-[40%] mb-[200px] hidden-left"
        >
          <h1>Home</h1>
          <p>
            Anim anim Lorem nulla esse dolor Lorem mollit reprehenderit eiusmod
            proident nulla reprehenderit est. Occaecat ea proident dolore labore
            labore mollit minim. Velit mollit aliquip irure esse officia esse do
            ad dolore. Laborum exercitation cupidatat consequat irure ullamco
            quis ex aute.
          </p>
        </div>
        <div
          ref={element2}
          className="flex flex-col items-end text-right pl-[40%] mb-[200px] hidden-right"
        >
          <h1 className="text-[35px]">About</h1>
          <p>
            Anim anim Lorem nulla esse dolor Lorem mollit reprehenderit eiusmod
            proident nulla reprehenderit est. Occaecat ea proident dolore labore
            labore mollit minim. Velit mollit aliquip irure esse officia esse do
            ad dolore. Laborum exercitation cupidatat consequat irure ullamco
            quis ex aute.
          </p>
        </div>
        <div
          ref={element3}
          className="flex flex-col items-center text-center px-[20%] mb-[200px] hidden-center"
        >
          <h1>Music</h1>
          <p>
            Anim anim Lorem nulla esse dolor Lorem mollit reprehenderit eiusmod
            proident nulla reprehenderit est. Occaecat ea proident dolore labore
            labore mollit minim. Velit mollit aliquip irure esse officia esse do
            ad dolore. Laborum exercitation cupidatat consequat irure ullamco
            quis ex aute.
          </p>
        </div>
      </div>
    </div>
  );
}
