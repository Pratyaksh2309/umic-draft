import logo from "../assets/maxresdefault.png"

function Header(){
   return(
   <div>
         <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand"> <img src={logo} alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span> </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">Umic</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/competitions">Competition</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/alumni">Alumni</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/sponsors">Sponsors</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Teams</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Aerove</a></li>
                            <li><a class="dropdown-item" href="#">Sedrica</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            </div>
        </nav> 
    </div>
   )
}

export default Header;
