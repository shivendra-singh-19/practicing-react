import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const list = [
    {
      id: 1,
      name: 'Shivendra',
      image:
        'https://fastly.picsum.photos/id/1059/500/500.jpg?hmac=vkSTZzQMQHneBTUcuv-6yKHPrhi8w_LQGw_06cfVTWU',
      pending: 0,
      isOpen: false,
    },
    {
      id: 2,
      name: 'Rushikesh',
      image:
        'https://fastly.picsum.photos/id/893/500/500.jpg?hmac=NfGk1D2zgPk729HHOGCKVuPTL0jAke1me6qVwwpXPyM',
      pending: 0,
      isOpen: false,
    },
    {
      id: 3,
      name: 'Anirudh',
      image:
        'https://fastly.picsum.photos/id/335/500/500.jpg?hmac=9Qm7bkWdKyCgSIb3VKfQjH_sdBBcBA00_npsh_WUQjI',
      pending: 0,
      isOpen: false,
    },
  ];

  const [openCard, setOpenCard] = useState(false);
  const [people, setPeople] = useState(list);
  const [person, setPerson] = useState({});

  function handleCardOpening(id) {
    const updatedPeople = people.map((person) => {
      if (person.id === id) {
        if (person.isOpen) {
          setOpenCard(false);
          return {
            ...person,
            isOpen: false,
          };
        } else {
          setOpenCard(true);
          return {
            ...person,
            isOpen: true,
          };
        }
      }

      return {
        ...person,
        isOpen: false,
      };
    });

    const matchingPerson = updatedPeople.filter((i) => {
      if (i.id === id) {
        return true;
      }
      return false;
    });

    setPerson(matchingPerson[0]);
    setPeople(updatedPeople);
  }

  function handleValuesUpdate() {}

  return (
    <div className="App">
      <ListCard people={people} toOpenCalculator={handleCardOpening} />
      {openCard ? (
        <Calculator person={person} toUpdateValue={handleValuesUpdate} />
      ) : (
        ' '
      )}
    </div>
  );
}

function ListCard(props) {
  const { people, toOpenCalculator } = props;
  return (
    <div className="list-container">
      <div className="list-card">
        {people.map((person) => {
          return (
            <List
              person={person}
              toOpenCalculator={toOpenCalculator}
              key={person.id}
            />
          );
        })}
      </div>
      <button className="add-friend">Add friend</button>
    </div>
  );
}

function List(props) {
  const { person, toOpenCalculator } = props;
  return (
    <div className="card">
      <div className="person">
        <div className="main">
          <div className="image-div">
            <img src={person.image} className="image" />
          </div>
          <div className="name">{person.name}</div>
          <button
            className="button"
            onClick={() => {
              toOpenCalculator(person.id);
            }}
          >
            {person.isOpen ? `Close` : `Select`}
          </button>
        </div>
        <div className="description">They have everything.</div>
      </div>
    </div>
  );
}

function Calculator(props) {
  const { person, toUpdateValue } = props;
  const [bill, setBill] = useState(0);
  const [yourExpense, setYourExpense] = useState(0);
  const [friendExpense, setFriendExpense] = useState(0);
  const [payer, setPayer] = useState('');
  function handleSubmit(e) {
    console.log(e);
  }
  return (
    <div className="calculator">
      <div className="calculator-heading">SPLIT BILL WITH {person.name}</div>
      <form onSubmit={(e) => handleSubmit(e.target.value)}>
        <div className="row">
          <div className="field">Bill value</div>
          <div className="input-field">
            <input
              type="text"
              value={bill}
              onChange={(e) => setBill(Number(e.target.value))}
            />
          </div>
        </div>
        <div className="row">
          <div className="field">Your expense</div>
          <div className="input-field">
            <input
              type="text"
              value={yourExpense}
              onChange={(e) => setYourExpense(Number(e.target.value))}
            />
          </div>
        </div>
        <div className="row">
          <div className="field">{person.name}'s expense</div>
          <div className="input-field">
            <input
              type="text"
              value={friendExpense}
              onChange={(e) => setFriendExpense(Number(e.target.value))}
            />
          </div>
        </div>
        <div className="row">
          <div className="field">Who is paying the bill?</div>
          <div className="input-field">
            <select className="select-field">
              <option value={'Shivendra'}>Me</option>
              <option value={'Anirudh'}>Anirudh</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="submit-div">
            <input type="submit" className="submit-button" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
