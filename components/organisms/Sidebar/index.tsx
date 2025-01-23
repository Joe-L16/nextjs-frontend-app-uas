import Button from '@/components/atoms/Button';
import React from 'react';

export default function Sidebar() {
  return (
    <>
      <div id="layoutSidenav_nav">
        <nav
          className="sb-sidenav accordion sb-sidenav-dark"
          id="sidenavAccordion"
        >
          <div className="sb-sidenav-menu">
            <div className="nav">
              <div className="sb-sidenav-menu-heading">Core</div>
              <Button type="link" className={['nav-link']} href="/">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-users"></i>
                </div>
                Authors
              </Button>
              <Button type="link" className={['nav-link']} href="/books">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-book"></i>
                </div>
                Books
              </Button>
              <div className="sb-sidenav-menu-heading">Interface</div>
              <Button
                type="link"
                href="#"
                className={['nav-link', 'collapsed']}
                data-bs-toggle="collapse" 
                data-bs-target="#collapseLayouts"
                aria-expanded="false"
                aria-controls="collapseLayouts"
              >
                <div className="sb-nav-link-icon">
                  <i className="fas fa-columns"></i>
                </div>
                Layouts
                <div className="sb-sidenav-collapse-arrow">
                  <i className="fas fa-angle-down"></i>
                </div>
              </Button>
              <div
                className="collapse"
                id="collapseLayouts"
                aria-labelledby="headingOne"
                data-bs-parent="#sidenavAccordion"
              >
                <nav className="sb-sidenav-menu-nested nav">
                  <Button type="link" href="layout-static.html" className={['nav-link']}>
                    Static Navigation
                  </Button>
                  <Button type="link" href="layout-sidenav-light.html" className={['nav-link']}>
                    Light Sidenav
                  </Button>
                </nav>
              </div>
              <Button
                type="link"
                href="#"
                className={['nav-link', 'collapsed']}
                data-bs-toggle="collapse"
                data-bs-target="#collapsePages"
                aria-expanded="false"
                aria-controls="collapsePages"
              >
                <div className="sb-nav-link-icon">
                  <i className="fas fa-book-open"></i>
                </div>
                Pages
                <div className="sb-sidenav-collapse-arrow">
                  <i className="fas fa-angle-down"></i>
                </div>
              </Button>
              <div
                className="collapse"
                id="collapsePages"
                aria-labelledby="headingTwo"
                data-bs-parent="#sidenavAccordion"
              >
                <nav
                  className="sb-sidenav-menu-nested nav accordion"
                  id="sidenavAccordionPages"
                >
                  <Button
                    type="link"
                    href="#"
                    className={['nav-link', 'collapsed']}
                    data-bs-toggle="collapse"
                    data-bs-target="#pagesCollapseAuth"
                    aria-expanded="false"
                    aria-controls="pagesCollapseAuth"
                  >
                    Authentication
                    <div className="sb-sidenav-collapse-arrow">
                      <i className="fas fa-angle-down"></i>
                    </div>
                  </Button>
                  <div
                    className="collapse"
                    id="pagesCollapseAuth"
                    aria-labelledby="headingOne"
                    data-bs-parent="#sidenavAccordionPages"
                  >
                    <nav className="sb-sidenav-menu-nested nav">
                      <Button type="link" href="login.html" className={['nav-link']}>
                        Login
                      </Button>
                      <Button type="link" href="register.html" className={['nav-link']}>
                        Register
                      </Button>
                      <Button type="link" href="password.html" className={['nav-link']}>
                        Forgot Password
                      </Button>
                    </nav>
                  </div>
                  <Button
                    type="link"
                    href="#"
                    className={['nav-link', 'collapsed']}
                    data-bs-toggle="collapse"
                    data-bs-target="#pagesCollapseError"
                    aria-expanded="false"
                    aria-controls="pagesCollapseError"
                  >
                    Error
                    <div className="sb-sidenav-collapse-arrow">
                      <i className="fas fa-angle-down"></i>
                    </div>
                  </Button>
                  <div
                    className="collapse"
                    id="pagesCollapseError"
                    aria-labelledby="headingOne"
                    data-bs-parent="#sidenavAccordionPages"
                  >
                    <nav className="sb-sidenav-menu-nested nav">
                      <Button type="link" href="401.html" className={['nav-link']}>
                        401 Page
                      </Button>
                      <Button type="link" href="404.html" className={['nav-link']}>
                        404 Page
                      </Button>
                      <Button type="link" href="500.html" className={['nav-link']}>
                        500 Page
                      </Button>
                    </nav>
                  </div>
                </nav>
              </div>
              <div className="sb-sidenav-menu-heading">Addons</div>
              <Button type="link" href="charts.html" className={['nav-link']}>
                <div className="sb-nav-link-icon">
                  <i className="fas fa-chart-area"></i>
                </div>
                Charts
              </Button>
              <Button type="link" href="tables.html" className={['nav-link']}>
                <div className="sb-nav-link-icon">
                  <i className="fas fa-table"></i>
                </div>
                Tables
              </Button>
            </div>
          </div>
          <div className="sb-sidenav-footer">
            <div className="small">Logged in as:</div>
            Start Bootstrap
          </div>
        </nav>
      </div>
    </>
  );
}
