import { useState } from "react";

function App() {
  const [song, setSong] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("Pop");
  const [filterGenre, setFilterGenre] = useState("All");

  const [songs, setSongs] = useState([]);

  function handleSongChange(event) {
    setSong(event.target.value);
  }

  function handleArtistChange(event) {
    setArtist(event.target.value);
  }

  function handleGenreChange(event) {
    setGenre(event.target.value);
  }

  function addSong() {
    if (song.trim() !== "" && artist.trim() !== "") {
      const newSong = {
        name: song,
        artist: artist,
        genre: genre
      };

      setSongs([...songs, newSong]);

      setSong("");
      setArtist("");
      setGenre("Pop");
    }
  }

  function deleteSong(index) {
    const newSongs = songs.filter(
      (item, itemIndex) => itemIndex !== index
    );

    setSongs(newSongs);
  }

  const filteredSongs =
    filterGenre === "All"
      ? songs
      : songs.filter((item) => item.genre === filterGenre);

  return (
    <div className="music-app">

      <header className="music-header">
        <div className="brand">
          <div className="music-logo">♫</div>

          <div>
            <h2>VibeBox</h2>
            <span>YOUR MUSIC SPACE</span>
          </div>
        </div>

        <div className="header-count">
          <span>TRACKS</span>
          <strong>{songs.length}</strong>
        </div>
      </header>

      <main className="music-content">

        <section className="hero-section">
          <div>
            <p className="hero-label">YOUR PERSONAL PLAYLIST</p>

            <h1>
              Your music.
              <br />
              Your <span>vibe.</span>
            </h1>

            <p className="hero-description">
              Create your own collection of songs and
              keep your favorite sounds in one place.
            </p>
          </div>

          <div className="sound-wave">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </section>

        <section className="add-section">

          <div className="section-title">
            <span>01</span>
            <h2>Add a track</h2>
          </div>

          <div className="form-grid">

            <div className="input-box">
              <label>SONG NAME</label>

              <input
                type="text"
                placeholder="Enter song name"
                value={song}
                onChange={handleSongChange}
              />
            </div>

            <div className="input-box">
              <label>ARTIST</label>

              <input
                type="text"
                placeholder="Enter artist name"
                value={artist}
                onChange={handleArtistChange}
              />
            </div>

            <div className="input-box">
              <label>GENRE</label>

              <select
                value={genre}
                onChange={handleGenreChange}
              >
                <option>Pop</option>
                <option>Rock</option>
                <option>Hip Hop</option>
                <option>Electronic</option>
                <option>Classical</option>
                <option>Jazz</option>
              </select>
            </div>

            <button
              className="add-song-button"
              onClick={addSong}
            >
              <span>+</span>
              Add Track
            </button>

          </div>
        </section>

        <section className="playlist-section">

          <div className="playlist-heading">

            <div className="section-title">
              <span>02</span>
              <h2>Your Playlist</h2>
            </div>

            <select
              className="filter-select"
              value={filterGenre}
              onChange={(event) =>
                setFilterGenre(event.target.value)
              }
            >
              <option value="All">All Genres</option>
              <option value="Pop">Pop</option>
              <option value="Rock">Rock</option>
              <option value="Hip Hop">Hip Hop</option>
              <option value="Electronic">Electronic</option>
              <option value="Classical">Classical</option>
              <option value="Jazz">Jazz</option>
            </select>

          </div>

          {filteredSongs.length === 0 ? (
            <div className="empty-playlist">
              <div className="empty-icon">♫</div>

              <h3>No tracks here yet</h3>

              <p>
                Add your first song and start building
                your personal playlist.
              </p>
            </div>
          ) : (
            <div className="song-list">

              {filteredSongs.map((item, index) => (
                <div className="song-card" key={index}>

                  <div className="song-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="album-icon">
                    ♫
                  </div>

                  <div className="song-info">
                    <h3>{item.name}</h3>

                    <p>{item.artist}</p>
                  </div>

                  <span className="genre-tag">
                    {item.genre}
                  </span>

                  <button
                    className="delete-song"
                    onClick={() => deleteSong(index)}
                  >
                    ×
                  </button>

                </div>
              ))}

            </div>
          )}

        </section>

      </main>

      <footer className="music-footer">
        <span>VibeBox</span>
        <p>Build your playlist. Find your vibe.</p>
      </footer>

    </div>
  );
}

export default App;