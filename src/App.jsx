import "./App.css";
import React, { useState } from "react";
import contacts from "./contacts.json";

function App() {
  const initialContacts = contacts.slice(0, 5);
  const [contactList, setContactList] = useState(initialContacts);
  const newArray = contacts.filter(function (el) {
    return !initialContacts.includes(el);
  });
  const randomContact = newArray[Math.floor(Math.random() * newArray.length)];


  function handleSort(){
    const sortedData=[...contactList].sort((a,b)=>{
      return a.name>b.name ? 1 : -1
    })
    setContactList(sortedData);
    console.log(contactList)
  }

  




  return (
    <div>
      <h1>ACTORS</h1>
      <table>
        <thead>
        <tr>
          <th><button
        onClick={() => {
          setContactList((prevContacts) => [...prevContacts, randomContact]);
        }}
      >
        Add New Actor
      </button></th>
      <th><button onClick={handleSort}>Sort by Name</button></th>
      <th><button>Sort by Popularity</button></th>

        </tr>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Oscar</th>
            <th>Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contactList.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} alt={contact.name} />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar && <p>🏆</p>}</td>
              <td>{contact.wonEmmy && <p>🏆</p>}</td>
            </tr>
          ))}
        </tbody>
      </table>

      
    </div>
  );
}

export default App;
