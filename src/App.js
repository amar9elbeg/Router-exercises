import { Navbar } from "./components/navBar";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home } from "./components/home";
import { Users } from "./components/users/users";
import { Fetch } from "./components/fetch";
import { Form } from "./components/form";
import { useState } from "react";
import { v1 as uuid } from "uuid";
import { UserDetail } from "./components/users/user-detail";

const dummyData = [
  {
    userName: "uugnaa",
    birthDay: "11/5/2022",
    id: "10",
    firstName: "uugnaa",
    lastName: "Myagmarjav",
    nationality: "mongol",
  },
  {
    userName: "jeje",
    birthDay: "11/5/2022",
    id: "5",
    firstName: "jeje",
    lastName: "enkhjin",
    nationality: "mongol",
  },
];

function App() {
  const [users, setUsers] = useState(dummyData);

  return (
    <div className="App" style={{ margin: 0, padding: 0 }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="users" element={<Users users={users} />} />
          <Route path="user/:userId" element={<UserDetail users={users} />} />

          <Route path="form" element={<Fetch />} />
          <Route path="fetch" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
