const Navbar = ()=>{
  return (
    <div>
         <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="container">
            <div className="navbar-header page-scroll">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                    <span className="sr-only">Toggle menu</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand page-scroll" href="#page-top">Welcome</a>
            </div>

            <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav">
                    <li className="hidden">
                        <a className="page-scroll" href="#page-top"></a>
                    </li>
                    <li>
                        <a className="page-scroll" href="#about">About</a>
                    </li>
                    <li>
                        <a className="page-scroll" href="#whatwedo">What We Do</a>
                    </li>
                    <li>
                        <a className="page-scroll" href="#contact">Contact</a>
                    </li>
                </ul>
                {/* <!-- .navbar-collapse --> */}
            </div>
            {/* 	<!-- .container --> */}
        </div>
    </nav>
    </div>
  )

}
export default Navbar
