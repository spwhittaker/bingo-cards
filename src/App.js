import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [options, setOptions] = useState([
    "Hastings gets the wrong end of the stick but looks great doing it",
    "Poirot is mistaken for French",
    "Poirot disparages something British",
    "Inspector Japp prematurely declares the case solved",
    "Hastings does something heroic/physical",
    "Miss Lemon uses her super-admin powers",
    "Hitler or Mussolini mentioned",
    "Poirot tidies his moustache",
    "Servant or similar has a strong regional accent",
    "Someone comments on how 'modest Poirot is",
    "Mysterious letters",
    "Info related to crime in newspaper",
    "Close up of Poirot's face dropping after talking to someone he doesn't actually like",
    "Mention of the war",
    "Hastings travels",
    "Hastings in the Army reference",
    "Hastings explaining British sayings or expressions to Poirot",
    "Poirot comes up with his own take on a British saying",
    "Japp turns up to the scene after Poirot",
    "Poirot comments that these things always happen when poirot is around",
    "Poisoning (strychnine)",
    "Poirot smizes",
    "Poirot insists on travelling by train",
    "Poirot complains about the countryside",
    "Hastings is obsessed with fast cars 🚗",
    "Hastings fancies a pretty lady",
    "Poirot OCD moment",
    "Foreign characters have English accents",
    "Someone makes a comment about foreigners",
  ]);

  const [foundOptions, setFoundOptions] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const [optionsVisible, setOptionsVisible] = useState(true);
  const [bingoCardChoices, setBingoCardChoices] = useState([]);
  const [newOption, setNewOption] = useState("");
  const [winState, setWinState] = useState(false);

  useEffect(() => {
    if (
      (foundOptions[0] &&
        foundOptions[1] &&
        foundOptions[2] &&
        foundOptions[3] &&
        foundOptions[4]) ||
      (foundOptions[5] &&
        foundOptions[6] &&
        foundOptions[7] &&
        foundOptions[8] &&
        foundOptions[9]) ||
      (foundOptions[10] &&
        foundOptions[11] &&
        foundOptions[12] &&
        foundOptions[13] &&
        foundOptions[14]) ||
      (foundOptions[15] &&
        foundOptions[16] &&
        foundOptions[17] &&
        foundOptions[18] &&
        foundOptions[19]) ||
      (foundOptions[20] &&
        foundOptions[21] &&
        foundOptions[22] &&
        foundOptions[23] &&
        foundOptions[24]) ||
      (foundOptions[0] &&
        foundOptions[5] &&
        foundOptions[10] &&
        foundOptions[15] &&
        foundOptions[20]) ||
      (foundOptions[1] &&
        foundOptions[6] &&
        foundOptions[11] &&
        foundOptions[16] &&
        foundOptions[21]) ||
      (foundOptions[2] &&
        foundOptions[7] &&
        foundOptions[12] &&
        foundOptions[17] &&
        foundOptions[22]) ||
      (foundOptions[3] &&
        foundOptions[8] &&
        foundOptions[13] &&
        foundOptions[18] &&
        foundOptions[23]) ||
      (foundOptions[4] &&
        foundOptions[9] &&
        foundOptions[14] &&
        foundOptions[19] &&
        foundOptions[24]) ||
      (foundOptions[0] &&
        foundOptions[6] &&
        foundOptions[12] &&
        foundOptions[18] &&
        foundOptions[24]) ||
      (foundOptions[4] &&
        foundOptions[8] &&
        foundOptions[12] &&
        foundOptions[16] &&
        foundOptions[20])
    ) {
      setWinState(true);
    }
  }, [foundOptions]);
  const fillCard = () => {
    const optionsList = [...options];
    const bingoList = [];
    for (let i = 0; i < 25; i++) {
      let listOptionNum = Math.floor(Math.random() * optionsList.length);
      setFoundOptions([
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ]);
      setWinState(false);
      bingoList.push(optionsList[listOptionNum]);
      optionsList.splice(listOptionNum, 1);
    }

    bingoList.splice(12, 1, "FREE PICK - SOMEONE IS MURDERED");

    setBingoCardChoices(bingoList);
  };

  return (
    <div className="App">
      {winState && <div>You win!</div>}
      <button onClick={() => setOptionsVisible(!optionsVisible)}>
        {!optionsVisible && "Show"}
        {optionsVisible && "Hide"} all current options
      </button>
      {optionsVisible && (
        <>
          <div className="options-box">
            <ul>
              {options.map((option) => (
                <li key={option}>{option}</li>
              ))}
            </ul>
          </div>
          <span>
            <input
              type="text"
              name="newOptionField"
              id="newOptionField"
              placeholder="Add additional option here"
              onChange={(e) => {
                setNewOption(e.target.value);
              }}
            ></input>
            <button
              key="add-option"
              name="add-option"
              onClick={() => {
                console.log(newOption);
                if (options.find((e) => e === newOption)) {
                  alert("That option is already in the list!");
                }
                if (!options.find((e) => e === newOption)) {
                  setOptions([...options, newOption]);
                  document.getElementById("newOptionField").value = "";
                }
              }}
            >
              Add new option
            </button>
          </span>
        </>
      )}
      <button onClick={fillCard}>Generate your bingo card</button>
      {bingoCardChoices.length > 0 && (
        <div className="card-container">
          <div className="bingo-card">
            {bingoCardChoices.map((e, i) => {
              return (
                <div
                  className={`option-box ${
                    foundOptions[i] ? "selected-option" : ""
                  }`}
                  key={i}
                  onClick={() => {
                    const newFoundOptions = [...foundOptions];
                    newFoundOptions[i] = !newFoundOptions[i];
                    setFoundOptions([...newFoundOptions]);
                  }}
                >
                  <span className="option-text">{e}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
