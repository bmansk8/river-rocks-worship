import SongComponent from "./components/song";
import { iframes } from "./songs";

export default function Music() {
  return (
    <div className="overflow-hidden">
      <div className="container mt-10 mb-20">
        <h1>Our Music!</h1>
        <p>Here are some of our tracks and some background behind each one</p>
      </div>
      <div className="container gap-[100px] mb-20">
        {iframes.map((song)=>{
          return <SongComponent title={song.title} description={song.description} iframe={song.iframe} />
        })}
      </div>
    </div>
  );
}