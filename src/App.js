import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import BookDetailsPage from "./pages/BookDetailsPage";
import BooksPage from "./pages/BooksPage";
import AuthPage from "./pages/AuthPage";
import Layout from "./components/Layout/Layout";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  return (
    <Fragment>
      <Layout>
        <Routes>
          <Route path="/*" element={<MainPage />}></Route>
          <Route path="/Books/*" element={<BooksPage />}></Route>
          <Route path="/Books/:bookId" element={<BookDetailsPage />}></Route>
          <Route path="/Auth" element={<AuthPage />} />
          <Route path="/Favorites" element={<FavoritesPage />} />

          {/* <Route path="/*" element={<h1>Not found</h1>}></Route> */}
        </Routes>
      </Layout>
    </Fragment>
  );
}

export default App;
