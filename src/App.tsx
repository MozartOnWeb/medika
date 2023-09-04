import "./App.css";

//import component
import NavBar from "./components/NavBar";

//import image
import MainImage from "../src/assets/images/main.jpg";
import User1 from "../src/assets/images/user1.jpg";
import User2 from "../src/assets/images/user2.jpg";
import User3 from "../src/assets/images/user3.jpg";

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
                  <img src={User1} alt="main_image" />
                  <img src={User2} alt="main_image" />
                  <img src={User3} alt="main_image" />
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

        <div className="hero__third">
          <p className="hero__third__top">
            Quality Medical Services <br />
            at Your Fingertips
          </p>
          <div className="hero__third__bottom">
            <img src={MainImage} alt="main_image" />

            <div className="hero__second__top">
              <button>Service</button>
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
              Dentist <br /> Appointment
            </p>
          </div>
        </div>

        <div className="hero__fourth">
          <img src={MainImage} alt="main_image" />
          <div className="hero__fourth__top">
            <div className="hero__fourth__top__left">
              <h4>231 hours</h4>
              <p>
                <span>Classes</span> • Online
              </p>
            </div>
            <div className="hero__fourth__top__right">
              <p>See all</p>
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

          <div className="hero__fourth__bottom">
            <h4>
              Exercice tips from world <br /> best mentors
            </h4>
            <form action="">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe free</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
