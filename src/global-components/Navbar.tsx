export default function Navbar() {
  return (
    <div className="sticky top-0 left-0 bg-black border-b-accent border-b-2 z-10">
      <div className="container">
        <div className="flex flex-row items-center py-5 justify-between">
          <div className="flex h-[50px] w-[50px]">
            <a href="https://riverrockschurch.com/">
            <img src="/riverRocksLogo.svg" className="h-[50px] w-[50px]" alt="river rocks logo"></img>
            </a>
          </div>
          <div className="flex flex-row gap-5">
            <a href="/">Home</a>
            <a href="/chords">Chords</a>
            <a href="/music" >Music</a>
            <a href="/https://open.spotify.com/artist/20Iwd9omhOUAYfRckrZv3U?si=LQngkXziTxaxiX96docRIg" >Spotify</a>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
