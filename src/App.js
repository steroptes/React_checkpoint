import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="container-fluid">
        <div class="row no-gutter">
          <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
          <div class="col-md-8 col-lg-6">
            <div class="login d-flex align-items-center py-5">
              <div class="container">
                <div class="row">
                  <div class="col-md-9 col-lg-8 mx-auto">
                    <h3 class="login-heading mb-4 font-weight-bold">Welcome! </h3>
                    <form>
                      <div class="form-label-group">
                        <input type="text" id="inputFirstName" class="form-control" placeholder="First Name" required autofocus></input>
                        <label for="inputFirstName">First Name</label>
                      </div>
                      <div class="form-label-group">
                        <input type="text" id="inputLastName" class="form-control" placeholder="Laste Name" required autofocus></input>
                        <label for="inputLastName">Last Name</label>
                      </div>
                      <div class="form-label-group">
                        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus></input>
                          <label for="inputEmail">Email address</label>
                      </div>

                        <div class="form-label-group">
                          <input type="password" id="inputPassword" class="form-control" placeholder="Password" required></input>
                            <label for="inputPassword">Password</label>
                        </div>

                        <div class="custom-control custom-checkbox mb-3">
                          <input type="checkbox" class="custom-control-input" id="customCheck1"></input>
                          <label class="custom-control-label" for="customCheck1">Subscribe to the newsletter</label>
                        </div>
                            <button class="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">Subscribe</button>
                      </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
