import React, { useState } from "react";

// import { validateEmail } from "../utils/helpers";

function GuestPortal() {
  const [formState, setFormState] = useState({
    wedding: "not selected",
    firstName: "",
    lastName: "",
    foodChoice: "not selected",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { wedding, firstName, lastName, foodChoice } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "name") {
      // const isValid = validateEmail(e.target.value);
      //   if (!isValid) {
      //     setErrorMessage("Your email is invalid.");
      //   } else {
      //     setErrorMessage("");
      //   }
      // } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

  return (

        </div>
        <div className="my-2">
          <label htmlFor="name">First Name:</label>
          <input
            type="text"
            name="firstName"
            defaultValue={firstName}
            onBlur={handleChange}
          />
        </div>
      </form>
    </section>
  );
}

export default GuestPortal;
