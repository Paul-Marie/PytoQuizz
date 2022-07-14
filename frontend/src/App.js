import { useEffect, useState } from 'react';
import Quiz from './Quiz';
import './style.css';

function App() {
  const [themesList, setThemesList] = useState();
  const [theme,      setTheme     ] = useState();
  const [score,      setScore     ] = useState(0);

  useEffect(() => {
    (async () => {
      const result = await fetch(`http://localhost:${4242}/themes`, {
        method: "GET",
        headers: { 'Content-Type': 'application/json' }
      });
      setThemesList(await result.json());
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {theme !== undefined ? (
          <Quiz theme={theme} />
        ) : (
          <>
            <p>
              Choisissez votre <code>Thème</code>.
            </p>
            <button onClick={() => setTheme(null)}>
              Tous
            </button>
            {themesList?.map((topic, i) => (
              <button key={i} onClick={() => setTheme(topic)}>
                {topic}
              </button>
            ))}
          </>
        )}
      </header>
    </div>
  );
}

export default App;
