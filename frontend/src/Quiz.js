import { useEffect, useState, memo } from 'react';
import './style.css';

const Quiz = ({ theme }) => {
  const [questions, setQuestions] = useState();
  const [error,     setError    ] = useState();
  const [field,     setField    ] = useState('');
  const [score,     setScore    ] = useState(0);
  const [index,     setIndex    ] = useState(0);

  useEffect(() => {
    (async () => {
      const result = await fetch(`http://localhost:${4242}/questions${theme ? `?theme=${theme}` : ''}`);
      setQuestions(await result.json());
    })();
  }, [theme]);

  const handleChange = ({ target }) => setField(target?.value);
  const handleNext   = () => {
    setError();
    setField("");
    setIndex(index + 1);
  }

  const handleSubmit = async () => {
    const result = await fetch(`http://localhost:${4242}/questions/${questions?.[index]?._id}`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ answer: field })
    });
    if (result.status === 204) {
      setScore(score + 1);
    } else if (result.status === 400) {

    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {questions?.[index]?.text}
        </p>
        <img src={questions?.[index]?.image} className="App-logo" alt="logo" />
        <input type="text" value={field} onChange={handleChange} />
        <br/>
        <button onClick={handleSubmit}>
          Valider
        </button>
        {error && (
          <>
            Perdu la bonne réponse était: <code>{questions?.[index]?.answer}</code>
            <button onClick={handleNext}>
              Suivant
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default memo(Quiz);
