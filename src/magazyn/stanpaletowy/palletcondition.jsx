import React from "react";
import logo from "/public/img/logo.jpg";
import "../stanpaletowy/aspectpallets.css";
import { useState } from "react";
import { Helmet } from "react-helmet";

export const StanPaletowy = () => {
  const [free, setFree] = useState("");
  const [rawmaterial, setRawMaterial] = useState("");
  const [andersa, setAndersa] = useState("");
  const [finishedProduct, setFinishedProduct] = useState("");
  const [result, setResult] = useState("");
  const [messageBody, setMessageBody] = useState("");
  const [paletyWczoraj, setPaletyWczoraj] = useState("");
  const [przyjete, setPrzyjete] = useState("");
  const [paletyWydane, setPaletyWydane] = useState("");

  const handleCountResult = () => {
    if (
      free === 0 &&
      rawmaterial === 0 &&
      andersa === 0 &&
      finishedProduct === 0
    )
      setResult(2040 - free - finishedProduct + rawmaterial + andersa);

    // wysyłanie e-mail
    setMessageBody(`\n
    Wolne miejsca: ${free} \n 
    Palety na bufor / II hala / rampa: ${rawmaterial} \n
    Palety na Andersa: ${andersa} \n 
    Palety wyrobu gotowego: ${finishedProduct} \n 
    Suma palet na Magazynie: ${result}`);
  };

  // liczenie palet w trzecim boxie
  const handlePaletyWydane = () => {
    setPaletyWydane(Number(paletyWczoraj) + Number(przyjete) - Number(result));
  };

  //brak zera na początku

  return (
    <>
      <Helmet>
        <title>Stan Paletowy</title>
      </Helmet>
      <div id="header">
        <div className="main-logo">
          <a id="logo" href="/">
            <img className="logo" src={logo} alt="logo" />
          </a>
        </div>
      </div>
      <div className="box-conatiner">
        <div className="box box1">
          <div className="content">
            <h1>Oblicz ilość palet</h1>
            <div className="tytul2">
              <p>Wpisz dane aby wykonać obliczenie</p>
            </div>
            <form>
              <div className="free">
                <p>Ile jest wolnych miejsc?</p>
              </div>
              <input
                type="number"
                min="0"
                id="free"
                placeholder="Wpisz ilość wolnych miejsc"
                value={free}
                onChange={(e) => setFree(Number(e.target.value))}
                onKeyDown={(e) =>
                  (e.key === "-" || e.key === "+") && e.preventDefault()
                }
              />
              <div className="rawmaterial">
                <p>Ile palet jest na bufor / II hala / rampa?</p>
              </div>
              <input
                type="number"
                min="0"
                id="rawmaterial"
                placeholder="Wpisz łączną ilość palet"
                value={rawmaterial}
                onChange={(e) => setRawMaterial(Number(e.target.value))}
                onKeyDown={(e) =>
                  (e.key === "-" || e.key === "+") && e.preventDefault()
                }
              />
              <div className="Andersa">
                <p>Ile palet jest na Andersa?</p>
              </div>
              <input
                type="number"
                min="0"
                id="andersa"
                placeholder="Wpisz ilość palet na Andersa"
                value={andersa}
                onChange={(e) => setAndersa(Number(e.target.value))}
                onKeyDown={(e) =>
                  (e.key === "-" || e.key === "+") && e.preventDefault()
                }
              />
              <div className="finished_product ">
                <p>Ile palet jest wyrobu gotowego?</p>
              </div>
              <input
                type="number"
                min="0"
                id="finished_product"
                placeholder="Wpisz ilość palet wyrobu gotowego"
                value={finishedProduct}
                onChange={(e) => setFinishedProduct(Number(e.target.value))}
                onKeyDown={(e) =>
                  (e.key === "-" || e.key === "+") && e.preventDefault()
                }
              />
              <button
                className="btn btn1"
                type="button"
                id="btn1"
                onClick={handleCountResult}
              >
                Oblicz
              </button>
            </form>
          </div>
        </div>
        <div className="box box2">
          <div className="content">
            <h1>Suma palet na Magazynie</h1>
            <p>Poniżej jest wynik łącznej ilości palet surowca</p>
            <div className="result" id="result">
              {result}
            </div>
            <a
              className="btn btn2"
              href={`mailto:adres@odbiorcy.pl?subject=Stan Paletowy&body=${encodeURIComponent(
                messageBody
              )}`}
            >
              Wyślij e-mail
            </a>
          </div>
        </div>

        <div className="box box3">
          <div className="content">
            <h1>Ilość palet wydanych</h1>
            <div className="yesterday">
              <p>Ile palet łącznie było poprzedniego dnia ?</p>
            </div>
            <input
              min="0"
              type="number"
              id="yesterday"
              placeholder="Wpisz ilość palet"
              value={paletyWczoraj}
              onChange={(event) => setPaletyWczoraj(event.target.value)}
              onKeyDown={(e) =>
                (e.key === "-" || e.key === "+") && e.preventDefault()
              }
            />
            <div className="delivery_yesterday">
              <p>Ile palet przyjętych z poprzedniego dnia ?</p>
            </div>
            <input
              min="0"
              type="number"
              id="delivery_yesterday"
              placeholder="Wpisz ilość palet przyjętych"
              value={przyjete}
              onChange={(event) => setPrzyjete(event.target.value)}
              onKeyDown={(e) =>
                (e.key === "-" || e.key === "+") && e.preventDefault()
              }
            />
            <p>Poniżej jest wynik ilości palet wydanych </p>
            <div className="result" id="result_spent">
              {paletyWydane}
            </div>
            <button
              className="btn btn1"
              type="button"
              id="btn2"
              onClick={handlePaletyWydane}
            >
              Oblicz
            </button>
          </div>
        </div>
      </div>

      <footer>
        <p className="autor">Made by - Mateusz Trochimowicz</p>
      </footer>
    </>
  );
};
