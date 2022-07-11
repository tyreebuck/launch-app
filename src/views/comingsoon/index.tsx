import './comingsoon.css';

export default function Rarities() {
  return (
    <>
      <section>
        <div className="bg-set">
          <div
            className="container"
            style={{
              maxWidth: "unset",
              height: "100%",
              background: "#203060",
              boxShadow:
                "-5px 0 0 0 white, 5px 0 0 0 white, 0 -5px 0 0 white, 0 5px 0 0 white",
            }}
          >
            <div className="text-banner text-center">
              <h1>WILL BE REVEAL AFTER MINT</h1>
              <a className="text-button" href="">BACK TO HOME</a>
            </div>
            <img className="img-banner" src="assets/rakki.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
