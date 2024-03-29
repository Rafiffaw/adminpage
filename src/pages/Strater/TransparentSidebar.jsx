import React, { Component } from "react";

export class TransparentSidebar extends Component {
  render() {
    return (
      <>
        <div class="main-content">
          <section class="section">
            <div class="section-header">
              <h1>Kritik Dan Saran</h1>
              <div class="section-header-breadcrumb">
                <div class="breadcrumb-item active">
                  <a href="#">Dashboard</a>
                </div>
                <div class="breadcrumb-item">
                  <a href="#">Pesan</a>
                </div>
                
              </div>
            </div>

            <div class="section-body">
              <h2 class="section-title">Kritik Dan Saran</h2>
              <p class="section-lead">
                This page is just an example for you to create your own page.
              </p>
              <div class="card">
                <div class="card-header">
                  <h4>Example Card</h4>
                </div>
                <div class="card-body">
                  <p>
                    rehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div class="card-footer bg-whitesmoke">This is card footer</div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default TransparentSidebar;
