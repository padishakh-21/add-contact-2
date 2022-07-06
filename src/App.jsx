import React, { useState } from "react";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [isName, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");


  const addContact = (e)=>{
    
    if(e.key === "Enter" && isName !== "" && surname !== "" && phone !== ""){
      const contact = {
        id: new Date().getTime(),
        isName: isName,
        surname: surname,
        phoneNumber: phone
      };
      setContacts([contact, ...contacts])
      

      setName("");
      setSurname("");
      setPhone("")
    }
  }
  

  return (
    <>
      <div className="container-md container-fluid">
        <h2 className="title text-center text-primary py-4 mb-5">
          Add contact
        </h2>
        <div className="contact-box row justify-content-center">
          <form className="form col-12 col-sm-10 col-md-4" 
          onKeyPress={addContact}
          onSubmit={(e)=>{e.preventDefault()}}
          >
            <input
              type="text"
              className="form-control mb-3"
              placeholder=" name"
              value ={isName}
              onChange = {(e)=> setName(e.target.value.trim())}
              required
            ></input>
            <input
              type="text"
              className="form-control mb-3"
              placeholder=" surname"
              value ={surname}
              onChange = {(e)=> setSurname(e.target.value.trim())}
              required
            ></input>
            <input
              type="number"
              className="form-control mb-3"
              placeholder=" phone number"
              value ={phone}
              onChange = {(e)=> setPhone(e.target.value.trim())}
              required
            ></input>
          </form>

          <ul className="contact-list col-12 col-sm-10 col-md-8">
            {contacts.length !== 0 ? contacts.map((item)=>{
              return (
                <li className="contact-item card mb-4" key={item.id}>
                <div className="card-body">
                <p className="contact-name fw-bold text-success">
                  Name: <span className="name fw-normal text-dark">{item.isName}</span>
                </p>
                <p className="contact-surname fw-bold text-success">
                  Surname:{" "}
                  <span className="surname fw-normal text-dark">{item.surname}</span>
                </p>
                <p className="contact-number fw-bold text-success">
                  Phone number:{" "}
                  <a href="tel: 123456789" className="number fw-normal text-info text-decoration-none">{item.phoneNumber}</a>
                </p>
                </div>
                <button className="btn btn-danger" onClick={()=>{setContacts(contacts.filter((data)=> data.id !== item.id))}}>Delate</button>
                </li>
              )
            })
            :
            <h1 className="text-center text-secondary">List empty</h1>
            
            }
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
