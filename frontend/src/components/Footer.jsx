import "./Footer.css"

function Footer(){
    return (
        <div style={{backgroundColor:"black"}} class="pt-2">
<link
    rel="stylesheet"
    type="text/css"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
  />
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
          <br/>
          <h4> Contact Us</h4>
          <h6> Phono No: </h6>
          <h6> Email: </h6>
          <h6> Location: </h6>
        </div>
        
        <div class="d-flex flex-sm-row justify-content-end py-4 my-4 border-top" style={{color: "white"}}>
      <p>© 2024 SeDriCa. IIT BOMBAY.</p>
      </div>
      </div>
    </div>
  </footer>
        </div>
    )
}

export default Footer;