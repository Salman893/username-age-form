import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Modal from "../UI/Modal";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] =useState(null);

  const nameHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const ageHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    if(enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
        setError({title: 'Invalid Input', 'message': 'Please Enter Username and Age'});
        return;
    }

    if(+enteredAge < 0) {
        setError({title: 'Invalid Age', 'message': 'Please enter age greater than 0'});
        return;
    }

    const userData = {
      id: Math.random(),
      name: enteredName,
      age: enteredAge,
    };

    setEnteredName("");
    setEnteredAge("");

    props.onUserData(userData);
  };

  const errorHandler = event => {
      setError(null);
  }

  return (
    <div>
      {error && <Modal title={error.title} message={error.message} onClick={errorHandler}/>}
      {!error && <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            name="username"
            id="username"
            value={enteredName}
            onChange={nameHandler}
          />
          <label htmlFor="age">Age(in Years)</label>
          <input
            type="number"
            name="age"
            id="age"
            value={enteredAge}
            onChange={ageHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>}
    </div>
  );
};

export default AddUser;
