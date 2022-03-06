import styles from "./Form.module.scss";
import React from "react";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Form = () => {
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
  return (
    <div className={`${styles.formBox}`}>
      <div className={`${styles.txt}`}>
        <h2>Setup your Donor Account</h2>
      </div>
      <form>
        <div className={`${styles.form}`}>
          <TextField
            id="outlined-textarea"
            label="name"
            placeholder="jhon doe"
            multiline
          />

          <TextField
            id="outlined-textarea"
            label="age"
            placeholder="18"
            type={"number"}
          />
          <TextField
            id="outlined-textarea"
            label="phone number"
            placeholder="9999999999"
            type={"number"}
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
