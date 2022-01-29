import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import BookDetailsPage from "./pages/BookDetailsPage";
import BooksPage from "./pages/BooksPage";

import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Fragment>
      <Layout>
        <Routes>
          <Route path="/*" element={<MainPage />}></Route>
          <Route path="/Books/*" element={<BooksPage />}></Route>
          <Route path="/Books/:bookId" element={<BookDetailsPage />}></Route>
          {/* <Route path="/auth" element={}/> */}
          {/* <Route path="*" element={<h1>Not found</h1>}></Route> */}
        </Routes>
      </Layout>
    </Fragment>
  );
}

export default App;
