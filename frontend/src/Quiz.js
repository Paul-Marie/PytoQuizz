import { useEffect, useState, memo } from 'react';
import './style.css';

const Quiz = () => {
  const [questions, setQuestions] = useState();
  const [field,     setField    ] = useState('');
  const [score,     setScore    ] = useState(0);

  useEffect(() => {
    const result = fetch(`localhost:${4242}/questions`);
    setQuestions(result);
  }, []);

  const handleChange = ({ target }) => setField(target?.value);

  const handleSubmit = async () => {
    const result = await fetch(`localhost:${4242}`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ answer: field })
    });
    console.log(result);
    setField("");
  };

  return (
    <div className="App">
      <header className="App-header">
        {questions.map(({ text, image }) => (
          <>
            <p>
              {text}
            </p>
            <img src={image} className="App-logo" alt="logo" />
            <input type="text" value={field} onChange={handleChange} />
            <button onClick={handleSubmit}>
              Valider
            </button>
          </>
        ))}
      </header>
    </div>
  );
}

export default memo(Quiz);
