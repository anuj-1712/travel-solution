import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Form from "./Components/Form";
import { AppContext } from "./ContextApi/contextapi";
import List from "./Components/List";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <AppContext>
        <Header />
        <Form />
        <List />
        <Footer />
      </AppContext>
    </>
  );
}

export default App;
