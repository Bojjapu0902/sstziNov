class HeaderComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="position-relative"> 
            <!-- start navigation -->
            <nav class="navbar navbar-expand-lg header-transparent  bg-white  header-reverse position-relative" data-header-hover="light">
                <div class="container-fluid">
                    <div class="col-auto col-xxl-3 col-lg-3 me-lg-0 me-auto">
                        <a class="navbar-brand" href="index.html">
                            <img src="img/logo_main.png" data-at2x="img/logo_main.png" alt="" class="default-logo">
                            <img src="img/logo_main.png" data-at2x="img/logo_main.png" alt="" class="alt-logo">
                            <img src="img/logo_main.png" data-at2x="img/logo_main.png" alt="" class="mobile-logo"> 
                        </a>
                    </div>
                    <div class="col-auto menu-order position-static">
                        <button class="navbar-toggler float-start" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-label="Toggle navigation">
                            <span class="navbar-toggler-line"></span>
                            <span class="navbar-toggler-line"></span>
                            <span class="navbar-toggler-line"></span>
                            <span class="navbar-toggler-line"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav"> 
                            <ul class="navbar-nav alt-font"> 
                                <li class="nav-item"><a href="index.html" class="nav-link">Home</a></li>
                                <li class="nav-item"><a href="about.html" class="nav-link">About</a></li>
                                
                                <li class="nav-item dropdown dropdown-with-icon-style02">
                                    <a href="jquery:valid(0)" class="nav-link"> Projects </a>
                                    <i class="fa-solid fa-angle-down dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                     <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink"> 
                                        <li><a href="ongoing.html">On Going Projects</a></li>
                                        <li><a href="completedProjects.html">Completed Projects</a></li>
                                        
                                    </ul>
                                </li>
                                
                                <li class="nav-item"><a href=" service.html" class="nav-link">Services</a></li>
                                
                               

                               
                                <!---li class="nav-item"><a href="profile.html" class="nav-link">Portfolio</a></li--->
                                <li class="nav-item"><a href="careers.html" class="nav-link">Careers</a></li>
                                <li class="nav-item"><a href="contact.html" class="nav-link">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-auto col-xxl-2 col-lg-3 text-end d-none d-sm-flex">
                        <div class="header-icon">
                            <div class="d-none d-xxl-inline-block me-25px xxl-me-10px"><div class="alt-font fs-15 xl-fs-13 widget-text fw-500"></div></div>
                            <div class="header-button"><a href="./img/SStzigane.pdf" target="_blank" class="btn btn-small btn-rounded btn-base-color btn-box-shadow me-15px"><i class="feather icon-feather-file icon-small me-3px align-middle"></i> Brochure</a></div>
                        </div> 
                        
                         <button id="theme-toggle" class="theme-toggle mt-25px d-none">
                            <span class="sun-icon">☀️</span>
                            <span class="moon-icon">🌙</span>
                         </button>
                    </div>

                   

                </div>
            </nav>
            <!-- end navigation -->
        </header>
        `;
    
    }

}

customElements.define("header-component", HeaderComponent);



/* ===================================
      Dark & Light Mode
     ====================================== */

        const toggleBtn = document.getElementById("theme-toggle");

        // check saved preference
        if (localStorage.getItem("theme")) {
            document.documentElement.setAttribute("data-theme", localStorage.getItem("theme"));
        } else {
            document.documentElement.setAttribute("data-theme", "light");
        }

        toggleBtn.addEventListener("click", () => {
            const currentTheme = document.documentElement.getAttribute("data-theme");
            const newTheme = currentTheme === "light" ? "dark" : "light";

            document.documentElement.setAttribute("data-theme", newTheme);
            localStorage.setItem("theme", newTheme);
        });


       
        document.addEventListener("DOMContentLoaded", function () {

            const dropdown = document.querySelector(".dropdown-with-icon-style02");
            const menu = dropdown.querySelector(".dropdown-menu");

            dropdown.addEventListener("mouseenter", () => {
                menu.classList.add("show");
            });

            dropdown.addEventListener("mouseleave", () => {
                menu.classList.remove("show");
            });

        });







