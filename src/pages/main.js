import logo from '../logo.svg';
import '../App.css';

function Main() {
    return (
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            المشروع الاول | دائرة التوقيت المتحركة
          </p>
          <p dir='rtl'>
            تم تطوير المشروع باستخدام <b>React.Js</b>
          </p>
          <h5>تطوير المهندس : حسن سمير قاري</h5>
          <br></br>
          <a
            className="App-link btn btn-dark"
            href="./circle"
            // target="_blank"
            rel="noopener noreferrer"
          >
            <b>عرض المشروع</b>
          </a>
        </header>
      </div>
    );
  }
  
  export default Main;