import styles from "./Form.module.scss";
import React, { useRef } from "react";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Form = () => {
  const name = useRef<HTMLInputElement>();
  const age = useRef<HTMLInputElement>();
  const phone = useRef<HTMLInputElement>();
  const [sex, setSex] = React.useState<string>("");
  const [blood, setBlood] = React.useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSex(event.target.value);
  };
  const handleblood = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBlood(event.target.value);
  };
  const gender = ["male", "female", "other"];
  const Blood = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name.current && age.current && phone.current) {
      const obj = {
        name: name.current.value,
        blood: blood,
        number: phone.current.value,
        age: age.current.value,
        sex: sex,
      };
      if (!obj.blood || !obj.number || !obj.sex || !obj.name || !obj.age) {
        alert("Please enter the all inputs");
      } else {
        const sendData = async () => {
          try {
            const link = "https://blood-donor-farook.herokuapp.com/api/donor";
            // const link = "http://localhost:4000/api/donor";
            const res = await fetch(link, {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify(obj),
            });
            const data = await res.json();
            if (!data) throw new Error(data.message);
            alert(data.message);
          } catch (e) {
            alert(e);
          }
        };
        sendData();
      }
    }
  };

  return (
    <div className={`${styles.formBox}`}>
      <div className={`${styles.txt}`}>
        <h2>Setup your Donor Account</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={`${styles.form}`}>
          <TextField
            id="outlined-textarea"
            label="name"
            placeholder="jhon doe"
            multiline
            inputRef={name}
          />

          <TextField
            id="outlined-textarea"
            label="age"
            placeholder="18"
            type={"number"}
            inputRef={age}
          />
          <TextField
            id="outlined-textarea"
            label="phone number"
            placeholder="9999999999"
            type={"number"}
            inputRef={phone}
          />
          <TextField
            id="outlined-select-currency"
            select
            label="Select your gender"
            value={sex}
            onChange={handleChange}
            className={styles.input}
          >
            {gender.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-select-currency"
            select
            label="Select your Blood group"
            value={blood}
            onChange={handleblood}
            className={styles.input}
          >
            {Blood.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <Button variant="contained" type="submit" className={styles.btn}>
            submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
