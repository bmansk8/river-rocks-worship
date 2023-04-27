import { useRef } from "react";
import useAnimateHook from "../../hooks/animateHook";
import "./home.css";

export default function Home() {
  const element1 = useRef<HTMLDivElement>(null);
  const element2 = useRef<HTMLDivElement>(null);
  const element3 = useRef<HTMLDivElement>(null);

  useAnimateHook([element2, element3]);

  return (
    <div className="overflow-hidden">
      <div className="headerBackground"></div>
      <div className="container">
        <div
          ref={element1}
          className="flex flex-col items-start text-left mb-[150px] p-5 bg-black mt-10 md:mt-[-35px] md:mx-[-40px] md:p-10 border-accent border-b-2 border-r-2"
        >
          <h1>Home</h1>
          <p className="md:pr-[40%]">
            Anim anim Lorem nulla esse dolor Lorem mollit reprehenderit eiusmod
            proident nulla reprehenderit est. Occaecat ea proident dolore labore
            labore mollit minim. Velit mollit aliquip irure esse officia esse do
            ad dolore. Laborum exercitation cupidatat consequat irure ullamco
            quis ex aute.
          </p>
        </div>
        <div className="flex flex-col items-end text-right md:py-5 md:pl-[20%] xl:pl-[40%] mb-[150px] aboutBackground">
          <div ref={element2} className="hidden-right">
            <div className="bg-black opacity-[.75] p-5 md:mr-5">
              <h1 className="text-[35px]">Vision</h1>
              <p>
                River Rocks Church is a church that disciples believers to have
                a love for the Word of God, operate in the power of the Holy
                Spirit, and have a personal responsibility for the Great
                Commission. River Rocks Worship is formulated by a group of
                believers who call River Rocks Church ‘home’, as well as
                friends, that are more like family, that worship the same God
                from all over the country. Each person has a passion to bring
                followers of Jesus Christ into the throne room of God in song.
                Whether it be in adoration of our God and who He is, confession
                of our failures in light of that, or pleading with the Lord of
                all creation on behalf of the needs in the body, every song has
                one consistent characteristic - this is about Him, and not about
                man. We pray the Lord uses these songs to remind you of His
                truths, His character, and His promises, so that just one more
                person may be transformed by Jesus Christ. Maybe that one person
                is sitting in front of you. Or maybe that one person is you.
              </p>
            </div>
          </div>
        </div>
        <div
          ref={element3}
          className="flex flex-col items-center text-center md:px-[20%] mb-[100px] hidden-center"
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
