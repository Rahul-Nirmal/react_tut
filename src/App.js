import "./App.css";
import Header from "./component/header";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";


function App() {
  const [form, setForm] = useState({});
  // const [email, setEmail] = useState(" ");
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, form]);
    setForm({form})
  };

  const removeItem = (index) => {
    let arr = data;
    arr.splice(index, 1)
    setData([...arr]);
  }
  
  return (
    <div className="App">
      <Header />
      {/*form section */}
      <div className="form">
        <Stack direction="row" spacing={2}>
          <TextField
            id="outlined-basic"
            label="name"
            variant="outlined"
            value={form.name}
            onChange={(event) => setForm({...form, name: event.target.value})}
          />
          <TextField
            id="outlined-basic"
            label="email"
            variant="outlined"
            value={form.email}
            onChange={(event) => setForm({...form, email: event.target.value})}
          />
          <Button onClick={addData} variant="contained" color="success">
            <AddIcon />
          </Button>
        </Stack>
      </div>
      {/* Data */}
      <div className="data">
        <div className="dataValue">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
      </div>
      {data.map((element, index) => {
        return (
          <div key={index} className="dataValue">
            <h4>{element.name}</h4>
            <h4>{element.email}</h4>
            <Stack>
              <Button onKe onClick={()=>removeItem(index)} variant="contained" color="error">
                <DeleteIcon />
              </Button>
            </Stack>
          </div>
        );
      })}
    </div>
  );
}

export default App;
