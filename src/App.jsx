import StatsBlock from "./components/StatsBlock"

function App() {

  return (
    <div className="App">
        <main>
          <section className="box">
            <div className="profile-info">
              <img src="src/assets/image-victor.jpg"/>
              <h4>Victor Crest <span>26</span></h4>
              <p>London</p>
            </div>
            <div className="profile-stats">
              <StatsBlock num='80K' type='Followers'/>
              <StatsBlock num='803K' type='Likes'/>
              <StatsBlock num='1.4K' type='Photos'/>
            </div>
          </section>
        </main>
    </div>
    
  )
}

export default App
