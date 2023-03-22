import "./App.scss";

function App() {
  return (
    <div className="wrapper">
      <header>
        <h1>Search for books</h1>
        <input type="text" />
        <b>Categories:</b>
        <select name="user_profile_color_2" required="required">
          <option value="">Выберите значение</option>
          <option value="1">Синий</option>
        </select>
        <b>Sorting by:</b>
        <select name="user_profile_color_2" required="required">
          <option value="">Выберите значение</option>
          <option value="1">Синий</option>
        </select>
      </header>
      <main className="content">
        <div className="found-book">Found</div>
        <div className="books-card">
          <div className="books-card_img">
            <img src="" alt="" />
          </div>
          <div className="books-card_info">
            <p className="detail">
              <span>computers</span>
              <strong>Learn Javascript</strong>
              <span>Автор</span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
