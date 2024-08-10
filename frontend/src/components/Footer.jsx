

function Footer(){
    return (
        <div style={{backgroundColor:"black"}} class="pt-2">
        <div class="container" data-bs-theme="dark" >
  <footer class="py-4">
  <h1 class="text-body-secondary fw-bold">Contact Us</h1>
    <div class="row">
      <div class="col-6 col-md-2 mb-3">
        <hr/>
        <h5>Socials</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Instagram</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Youtube</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">LinkedIn</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">X</a></li>
        </ul>
      </div>

    </div>

    <div class="d-flex flex-column flex-sm-row justify-content-between py-4 border-top">
      <p>© 2024 Company, Inc. All rights reserved.</p>
    </div>

  </footer>
</div>
        </div>
    )
}

export default Footer;