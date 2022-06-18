
export default function Characters(props) {
  const { characters, setCharacters } = props;

  const resetCharacters = () => {
    console.log('clicked')
    setCharacters(null);
  }

  return (
    <div className="characters">
      <h1>Characters</h1>
      <span className="back-home" onClick={resetCharacters}>Back to home</span>    
      <div className="container-characters">
        {characters.map((character, index) => (
          <div className="character-container" key={index}>
            <div>
              <img src={character.image} alt={character.name}></img>
            </div>
            <div>
              <h3>{character.name}</h3>
              <h6>
                {character.status === "Alive" ? (
                  <>
                    <span className="alive"></span>
                    Alive
                  </>
                ) : (
                  <>
                    <span className="dead"></span>
                    Dead
                  </>
                )}
              </h6>
              <p className="text-grey">
                <span>Episodes: </span>
                <span>{character.episode.length}</span>
              </p>
              <p>
                <span className="text-grey">Species: </span>
                <span>{character.species}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <span className="back-home" onClick={resetCharacters}>Back home</span>
    </div>
  )
}
