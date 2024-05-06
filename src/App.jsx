import "./App.css";
import image from "./assets/me.jpg";

function App() {
  const navigateTo = (url) => {
    window.open(url, "_blank");
  };
  const showEmail = () =>{
    alert("mertcanalgan@gmail.com")
  }
  return (
    <>
      <img className="image" src={image} alt="Mertcan Algan" />
      <h1>Mertcan Algan</h1>
      <p>Yazılım Geliştirici</p>
      <p>Tobb Ekonomi ve Teknoloji Üniversitesi Malzeme Bilimi ve Nanoteknoloji Mühendisliği Mezunuyum.</p>
      <p>2 senedir Javascript, 1 senedir Java ile hem çalıştığım hem de kişisel projelerimde aktif olarak kullanıyorum. Bu süre zarfında, çeşitli web uygulamaları ve mobil uygulamalar geliştirdim. Javascript ile dinamik kullanıcı arayüzleri oluştururken, Java kullanarak veritabanı işlemleri üzerine yoğunlaştım.</p>
      <p>Diller: Javascript, Java</p>
      <p>Frameworkler: React, React Native, Spring Boot</p>
      <div className="button-container">
        <button
          className="btn"
          onClick={() => navigateTo("https://www.linkedin.com/in/m-algan/")}
        >
          <i className="fa-brands fa-linkedin-in"/>
          {" "}
          LinkedIn 
        </button>
        <button
          className="btn"
          onClick={() => navigateTo("https://github.com/MertcanAlgan")}
        >
          <i className="fa-brands fa-github"/>
          {" "}
          Github
        </button>
        <button
          className="btn"
          onClick={() => navigateTo("https://www.biöneri.com/anasayfa/0")}
        >
          <i className="fa-regular fa-comment"/>
          {" "}
          BiÖneri
        </button>
        <button
          className="btn"
          onClick={() => navigateTo("https://www.apple.com/tr/app-store/")}
        >
          <i className="fa-regular fa-futbol"/>
          {" "}
          Tahmiin
        </button>
        <button
          className="btn"
          onClick={() => showEmail()}
        >
          <i className="fa-regular fa-envelope"/>
          {" "}
          İletişim
        </button>
      </div>
    </>
  );
}

export default App;
