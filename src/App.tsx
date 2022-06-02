import React from "react";
import YoutubeToMp3 from 'components/YoutubeToMp3'

function App() {

  const NavBar = () => (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm">
            <div className="container">
                <nav className="my-2 my-md-0 mr-md-3">
                  <h4>Fabrício System</h4>
                    {/* <img src={ImgDsDark} alt="DevSuperior" width="120" /> */}
                </nav>
            </div>
        </div>
  )

  return (
    <>
      <NavBar />
      <iframe name="Play" src="https://sinalpublico.com/player3/ch.php?canal=sbt" 
        height='400' width='640' allowFullScreen> 
        </iframe>
      <YoutubeToMp3 />
    </>
  );
}

export default App;
