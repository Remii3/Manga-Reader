import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import BookDetailsPage from "./pages/BookDetailsPage";
import BooksPage from "./pages/BooksPage";
import AuthPage from "./pages/AuthPage";
import Main from "./components/Layout/Main";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  return (
    <Fragment>
      <Main>
        <Routes>
          <Route path="/*" element={<MainPage />}></Route>
          <Route path="/Books/*" element={<BooksPage />}></Route>
          <Route path="/Books/:bookId" element={<BookDetailsPage />}></Route>
          <Route path="/Auth" element={<AuthPage />} />
          <Route path="/Favorites" element={<FavoritesPage />} />
        </Routes>
      </Main>
    </Fragment>
  );
}

export default App;
