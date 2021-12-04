import { useEffect } from "react";
import { default as logo } from "../../images/logo.svg"
import { NavLink } from "react-router-dom";
import { navigation } from "../../bootstrap/js/index";

const NavBar = () => {
	useEffect(() => {
        navigation();
    }, [])

	return (
		<div className="navigation">
			<div className="container-fluid" id="nav-fluid-container">
				<div className="row">
					<div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center">
						<div className="logo">
							<a href="index.html"><img src={logo} /></a>
						</div>
					</div>

					<div className="col-xs-11 col-sm-11 col-md-11 col-lg-11 text-right">
						<div className="primary-nav">
							<nav>
								<ul>
									<li><NavLink to="/">Home</NavLink></li>
									<li><NavLink to="/portfolio">Portfolio</NavLink></li>
									<li><NavLink to="/contact">Contact</NavLink></li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NavBar;