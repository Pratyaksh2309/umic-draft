import MyCard from "./CardTwist";

function AlumCard() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .container {
              display: flex;
              justify-content: space-between;
              gap: 2rem;
              max-width: 80rem;
              margin: 0 auto;
              padding: 2rem;
            }
            .card-content {
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: center;
              width: 100%;
              max-width: 300px; /* Adjust width for smaller screens */
              margin: 1rem;
            }
            @media screen and (max-width: 768px) {
              .container {
                flex-direction: column;
                align-items: center;
              }
            }
          `
        }}
      />
      <div className="container">
        <div className="card-content">
          <MyCard />
          <h2 className="fw-normal">Heading</h2>
          <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
        </div>
        <div className="card-content">
          <MyCard />
          <h2 className="fw-normal">Heading</h2>
          <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
        </div>
        <div className="card-content">
          <MyCard />
          <h2 className="fw-normal">Heading</h2>
          <p>Another exciting bit of representative placeholder content. This time, we've moved on to the third column.</p>
        </div>
      </div>
    </>
  );
}

export default AlumCard;
