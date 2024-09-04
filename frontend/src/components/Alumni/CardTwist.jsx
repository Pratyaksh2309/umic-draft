function MyCard() {
    return (
      <>
        <style
          dangerouslySetInnerHTML={{
            __html: `
             
              .cols {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
              }
              .col {
                width: calc(20% - 1rem); /* Reduce width for smaller size */
                margin: 0.5rem; /* Reduce margin */
                cursor: pointer;
              }
              .container2 {
                transform-style: preserve-3d;
                perspective: 1000px;
                width: 140px;
              }
              .front,
              .back {
                background-size: cover;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25);
                border-radius: 50%;
                background-position: center;
                transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
                backface-visibility: hidden;
                text-align: center;
                min-height: 140px; /* Reduce minimum height */
                height: auto;
                color: #fff;
              }
              .back {
                background: linear-gradient(45deg, #cedce7 0%, #596a72 100%);
              }
              .front:after {
                position: absolute;
                top: 0;
                left: 0;
                z-index: 1;
                width: 140px;
                height: 140px;
                content: '';
                display: block;
                opacity: 0.6;
                background-color: #000;
                backface-visibility: hidden;
                border-radius: 50%;
              }
              .container2:hover .front,
              .container2:hover .back {
                transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
              }
              .back {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                font-size: 0.8rem;
              }
              .inner {
                transform: translateY(-50%) translateZ(60px) scale(0.94);
                top: 50%;
                position: absolute;
                left: 0;
                width: 140px;
                padding: 1rem; /* Adjust padding */
                box-sizing: border-box;
                perspective: inherit;
                z-index: 2;
              }
              .container2 .back {
                transform: rotateY(180deg);
                transform-style: preserve-3d;
              }
              .container2 .front {
                transform: rotateY(0deg);
                transform-style: preserve-3d;
              }
              .container2:hover .back {
                transform: rotateY(0deg);
                transform-style: preserve-3d;
              }
              .container2:hover .front {
                transform: rotateY(-180deg);
                transform-style: preserve-3d;
              }
              .front .inner p {
                font-size: 1.6rem; /* Reduce font size */
                margin-bottom: 1rem; /* Reduce margin */
                position: relative;
              }
              .front .inner p:after {
                width: 1.2rem; /* Adjust width */
                height: 2px;
                position: absolute;
                background: #c6d4df;
                display: block;
                left: 0;
                right: 0;
                margin: 0 auto;
                bottom: -0.5rem; /* Adjust bottom position */
              }
              .front .inner span {
                color: rgba(255, 255, 255, 0.7);
                font-family: 'Montserrat';
                font-weight: 300;
              }
              @media screen and (max-width: 64rem) {
                .col {
                  width: calc(30% - 1rem);
                }
              }
              @media screen and (max-width: 48rem) {
                .col {
                  width: calc(40% - 1rem);
                }
              }
              @media screen and (max-width: 32rem) {
                .col {
                  width: 100%;
                  margin: 0 0 1rem 0;
                }
              
            `
          }}
        />
        <div className="flex ">
            <div className="col" ontouchstart="this.classList.toggle('hover');">
              <div className="container2">
                <div
                  className="front"
                  style={{
                    backgroundImage:
                      "url(https://th.bing.com/th?id=OLC.bkOvL06Gy8OS4g480x360&w=211&h=140&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2)"
                  }}
                >
                  <div className="inner">
                    <p>INDIA</p>
                    <span>Taj Mahal</span>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <p>
                      Taj Mahal is a beautiful and most attractive historical place in
                      India
                    </p>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
        
      </>
    );
  }
  
  export default MyCard;
  