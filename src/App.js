import "./App.scss";

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <h1>Search for books</h1>
        <div className="search">
          <div className="search__box">
            <svg
              className="feather feather-search"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" x2="16.65" y1="21" y2="16.65" />
            </svg>
            <input type="text" className="search-input" />
          </div>
        </div>
        <div className="sort">
          <div className="sort__category">
            <b>Categories:</b>
            <select
              name="category_choose"
              required="required"
              className="sort-select"
            >
              <option value="">Выберите значение</option>
              <option value="1">Синий</option>
            </select>
          </div>
          <div className="sort__type">
            <b>Sorting by:</b>
            <select
              name="sort_choose"
              required="required"
              className="sort-select"
            >
              <option value="">Выберите значение</option>
              <option value="1">Синий</option>
            </select>
          </div>
        </div>
      </header>
      <main className="content">
        <p className="found-book">Found</p>
        <div className="books-card">
          <div className="books-card__img">
            <img
              src="https://books.google.com/books/content?id=WnogjOIFY3oC&printsec=frontcover&img=1&zoom=5&source=gbs_api"
              alt="book"
            />
          </div>
          <div className="books-card__info">
            <p className="books-detail">
              <span>computers</span>
              <strong>Learn Javascript</strong>
              <span>Автор</span>
            </p>
          </div>
        </div>
        <div className="books-card">
          <div className="books-card__img">
            <img
              src="https://books.google.com/books/content?id=WnogjOIFY3oC&printsec=frontcover&img=1&zoom=5&source=gbs_api"
              alt="book"
            />
          </div>
          <div className="books-card__info">
            <p className="books-detail">
              <span>computers</span>
              <strong>Learn Javascript</strong>
              <span>Автор</span>
            </p>
          </div>
        </div>
        <div className="books-card">
          <div className="books-card__img">
            <img
              src="https://books.google.com/books/content?id=WnogjOIFY3oC&printsec=frontcover&img=1&zoom=5&source=gbs_api"
              alt="book"
            />
          </div>
          <div className="books-card__info">
            <p className="books-detail">
              <span>computers</span>
              <strong>Learn Javascript</strong>
              <span>Автор</span>
            </p>
          </div>
        </div>
        <div className="books-card">
          <div className="books-card__img">
            <img
              src="https://books.google.com/books/content?id=WnogjOIFY3oC&printsec=frontcover&img=1&zoom=5&source=gbs_api"
              alt="book"
            />
          </div>
          <div className="books-card__info">
            <p className="books-detail">
              <span>computers</span>
              <strong>Learn Javascript</strong>
              <span>Автор</span>
            </p>
          </div>
        </div>
        <div className="books-card">
          <div className="books-card__img">
            <img
              src="https://books.google.com/books/content?id=WnogjOIFY3oC&printsec=frontcover&img=1&zoom=5&source=gbs_api"
              alt="book"
            />
          </div>
          <div className="books-card__info">
            <p className="books-detail">
              <span>computers</span>
              <strong>Learn Javascript</strong>
              <span>Автор</span>
            </p>
          </div>
        </div>
        <div className="books-card">
          <div className="books-card__img">
            <img
              src="https://books.google.com/books/content?id=WnogjOIFY3oC&printsec=frontcover&img=1&zoom=5&source=gbs_api"
              alt="book"
            />
          </div>
          <div className="books-card__info">
            <p className="books-detail">
              <span>computers</span>
              <strong>Learn Javascript</strong>
              <span>Автор</span>
            </p>
          </div>
        </div>
        <div className="books-card">
          <div className="books-card__img">
            <img
              src="https://books.google.com/books/content?id=WnogjOIFY3oC&printsec=frontcover&img=1&zoom=5&source=gbs_api"
              alt="book"
            />
          </div>
          <div className="books-card__info">
            <p className="books-detail">
              <span>computers</span>
              <strong>Learn Javascript</strong>
              <span>Автор</span>
            </p>
          </div>
        </div>
        <div className="books-card">
          <div className="books-card__img">
            <img
              src="https://books.google.com/books/content?id=WnogjOIFY3oC&printsec=frontcover&img=1&zoom=5&source=gbs_api"
              alt="book"
            />
          </div>
          <div className="books-card__info">
            <p className="books-detail">
              <span>computers</span>
              <strong>Learn Javascript</strong>
              <span>Автор</span>
            </p>
          </div>
        </div>
        <div className="books-card">
          <div className="books-card__img">
            <img
              src="https://books.google.com/books/content?id=WnogjOIFY3oC&printsec=frontcover&img=1&zoom=5&source=gbs_api"
              alt="book"
            />
          </div>
          <div className="books-card__info">
            <p className="books-detail">
              <span>computers</span>
              <strong>Learn Javascript</strong>
              <span>Автор</span>
            </p>
          </div>
        </div>
        <div className="books-card">
          <div className="books-card__img">
            <img
              src="https://books.google.com/books/content?id=WnogjOIFY3oC&printsec=frontcover&img=1&zoom=5&source=gbs_api"
              alt="book"
            />
          </div>
          <div className="books-card__info">
            <p className="books-detail">
              <span>computers</span>
              <strong>Learn Javascript</strong>
              <span>Автор</span>
            </p>
          </div>
        </div>
        <div className="books-card">
          <div className="books-card__img">
            <img
              src="https://books.google.com/books/content?id=WnogjOIFY3oC&printsec=frontcover&img=1&zoom=5&source=gbs_api"
              alt="book"
            />
          </div>
          <div className="books-card__info">
            <p className="books-detail">
              <span>computers</span>
              <strong>Learn Javascript</strong>
              <span>Автор</span>
            </p>
          </div>
        </div>
        <div className="books-card">
          <div className="books-card__img">
            <img
              src="https://books.google.com/books/content?id=WnogjOIFY3oC&printsec=frontcover&img=1&zoom=5&source=gbs_api"
              alt="book"
            />
          </div>
          <div className="books-card__info">
            <p className="books-detail">
              <span>computers</span>
              <strong>Learn Javascript</strong>
              <span>Автор</span>
            </p>
          </div>
        </div>
        <div className="books-card">
          <div className="books-card__img">
            <img
              src="https://books.google.com/books/content?id=WnogjOIFY3oC&printsec=frontcover&img=1&zoom=5&source=gbs_api"
              alt="book"
            />
          </div>
          <div className="books-card__info">
            <p className="books-detail">
              <span>computers</span>
              <strong>Learn Javascript</strong>
              <span>Автор</span>
            </p>
          </div>
        </div>
        <div className="books-card">
          <div className="books-card__img">
            <img
              src="https://books.google.com/books/content?id=WnogjOIFY3oC&printsec=frontcover&img=1&zoom=5&source=gbs_api"
              alt="book"
            />
          </div>
          <div className="books-card__info">
            <p className="books-detail">
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
