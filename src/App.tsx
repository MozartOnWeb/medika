import "./App.css";

//import component
import NavBar from "./components/NavBar";

//import image
import MainImage from "../src/assets/images/main.jpg";

function App() {
  return (
    <main>
      <NavBar />
      <section className="hero">
        <div className="hero__first">
          <img src={MainImage} alt="main_image" />
          <div className="hero__first__left">
            <h1>
              Meditation for <br />
              Mind, Body and Soul
            </h1>
            <p>
              Connect with Your Inner Self and Improve Focus and <br />
              cultivate Mindfulness and Live in the Present Moment.
            </p>
            <button className="start__program">
              Start Program
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 9L9 1M9 1H3M9 1V7"
                  stroke="#242424"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="hero__first__right">
            <div className="hero__top__right__card">
              <div className="hero__top__right__card__left">
                <h3>569+</h3>
                <p>
                  More than 569 tests have <br /> done this yearn in our lab.
                </p>
                <div className="hero__top__right__card__left__images">
                  <img src={MainImage} alt="main_image" />
                  <img src={MainImage} alt="main_image" />
                  <img src={MainImage} alt="main_image" />
                </div>
              </div>
              <div className="hero__top__right__card__right">
                <div>
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 9L9 1M9 1H3M9 1V7"
                      stroke="#242424"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="hero__top__right__buttons">
              <button className="hero__top__right__button">
                Medicine
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 9L9 1M9 1H3M9 1V7"
                    stroke="#fff"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="hero__top__right__button">
                Labs
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 9L9 1M9 1H3M9 1V7"
                    stroke="#fff"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="hero__top__right__button">
                Test & Results
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 9L9 1M9 1H3M9 1V7"
                    stroke="#fff"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="hero__second">
          <img src={MainImage} alt="main_image" />
          <div className="hero__second__top">
            <button>Visite type</button>
            <div>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 9L9 1M9 1H3M9 1V7"
                  stroke="#242424"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <p>
            General <br /> Consultation
          </p>
        </div>

        <div className="hero__third"></div>

        <div className="hero__fourth"></div>
      </section>
    </main>
  );
}

export default App;
