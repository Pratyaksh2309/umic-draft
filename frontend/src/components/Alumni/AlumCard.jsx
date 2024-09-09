import MyCard from "./CardTwist";



function AlumCard() {
  
  let x = 'https://th.bing.com/th?id=OLC.bkOvL06Gy8OS4g480x360&w=211&h=140&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2'

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .containr {
              display: flex;
              flex-wrap: wrap;
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
      <div className="containr">
        <div className="card-content">
          <MyCard img={x} />
          <h2 className="fw-normal">Heading</h2>
          <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
        </div>
        <div className="card-content">
        <MyCard img={x} />
          <h2 className="fw-normal">Heading</h2>
          <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
        </div>
        <div className="card-content">
        <MyCard img={x} />
          <h2 className="fw-normal">Heading</h2>
          <p>Another exciting bit of representative placeholder content. This time, we've moved on to the third column.</p>
        </div>
      </div>
    </>
  );
}

export default AlumCard;
