export default function Navbar() {
  return (
    <div className="sticky top-0 left-0 bg-black border-b-accent border-b-2 z-10">
      <div className="container">
        <div className="flex flex-row py-5 justify-between">
          <div className="">
            <img src="" alt="river rocks logo"></img>
          </div>
          <div className="flex flex-row gap-5">
            <a href="/">Home</a>
            <a href="">River Rocks Church</a>
            <a href="/chords">Chords</a>
            <a href="/music" >Music</a>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
