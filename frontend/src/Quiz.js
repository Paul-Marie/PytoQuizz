import { useEffect, useState, memo } from 'react';
import './style.css';

const Quiz = ({ theme }) => {
  const [questionsList, setQuestionsList] = useState();
  const [question,      setQuestion     ] = useState();
  const [error,         setError        ] = useState();
  const [field,         setField        ] = useState('');
  const [score,         setScore        ] = useState(0);
  const [index,         setIndex        ] = useState(0);

  useEffect(() => {
    (async () => {
      const result = await fetch(`http://localhost:${4242}/questions${theme ? `?theme=${theme}` : ''}`);
      const questions = await result.json();
      setQuestionsList(questions);
      setQuestion(questions?.[0]);
    })();
  }, [theme]);

  const handleChange = ({ target }) => setField(target?.value);
  const handleNext   = () => {
    setError();
    setField("");
    setQuestion(questionsList[index + 1]);
    setIndex(index + 1);
  }

  const handleSubmit = async () => {
    const result = await fetch(`http://localhost:${4242}/questions/${question?._id}`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ answer: field })
    });
    if (result.status === 204) {
      setScore(score + 1);
      handleNext();
    } else if (result.status === 400) {
      setError(true);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {question ? (
          <>
            <p>
              {question?.text}
            </p>
            <img
              className="App-logo"
              src={question?.image}
              alt="logo"
            />
            {!error && (
              <>
                <input
                  className="input"
                  type="text"
                  value={field}
                  onChange={handleChange}
                />
                <br/>
                <button
                  className="button"
                  onClick={handleSubmit}
                >
                  Valider
                </button>
              </>
            )}
            {error && (
              <>
                Perdu la bonne réponse était: <code>{question?.answer}</code>
                <button
                  className="button"
                  onClick={handleNext}
                >
                  Suivant
                </button>
              </>
            )}
          </>
        ) : (
          <>
            <p>
              Voila ! tu as fini le Quiz avec <code>{score}/{questionsList?.length ?? 0}</code> points !
            </p>
            <button
              className="button"
              onClick={() => window.location.reload(false)}
            >
              Recommencer
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default memo(Quiz);
