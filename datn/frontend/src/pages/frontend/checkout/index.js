import React from "react";
function Checkout(){
    return(
        <>
        <div class="bg-primary">
    <div class="container py-4">
      {/*<!-- Breadcrumb -->*/}
      <nav class="d-flex">
        <h6 class="mb-0">
          <a href="" class="text-white-50">Home</a>
          <span class="text-white-50 mx-2"> - </span>
          <a href="" class="text-white-50">2. Shopping cart</a>
          <span class="text-white-50 mx-2"> - </span>
          <a href="" class="text-white"><u>3. Order info</u></a>
          <span class="text-white-50 mx-2"> - </span>
          <a href="" class="text-white-50">4. Payment</a>
        </h6>
      </nav>
      {/*<!-- Breadcrumb -->*/}
    </div>
  </div>
  <section class="bg-light py-5">
  <div class="container">
    <div class="row">
      <div class="col-xl-8 col-lg-8 mb-4">
        <div class="card mb-4 border shadow-0">
          <div class="p-4 d-flex justify-content-between">
            <div class="">
              <h5>Have an account?</h5>
              <p class="mb-0 text-wrap ">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            </div>
            <div class="d-flex align-items-center justify-content-center flex-column flex-md-row">
              <a href="#" class="btn btn-outline-primary me-0 me-md-2 mb-2 mb-md-0 w-100">Register</a>
              <a href="#" class="btn btn-primary shadow-0 text-nowrap w-100">Sign in</a>
            </div>
          </div>
        </div>

        {/*<!-- Checkout -->*/}
        <div class="card shadow-0 border">
          <div class="p-4">
            <h5 class="card-title mb-3">Guest checkout</h5>
            <div class="row">
              <div class="col-6 mb-3">
                <p class="mb-0">First name</p>
                <div class="form-outline">
                  <input type="text" id="typeText" placeholder="Type here" class="form-control" />
                </div>
              </div>

              <div class="col-6">
                <p class="mb-0">Last name</p>
                <div class="form-outline">
                  <input type="text" id="typeText" placeholder="Type here" class="form-control" />
                </div>
              </div>

              <div class="col-6 mb-3">
                <p class="mb-0">Phone</p>
                <div class="form-outline">
                  <input type="tel" id="typePhone" value="+48 " class="form-control" />
                </div>
              </div>

              <div class="col-6 mb-3">
                <p class="mb-0">Email</p>
                <div class="form-outline">
                  <input type="email" id="typeEmail" placeholder="example@gmail.com" class="form-control" />
                </div>
              </div>
            </div>

            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label" for="flexCheckDefault">Keep me up to date on news</label>
            </div>

            <hr class="my-4" />

            <h5 class="card-title mb-3">Shipping info</h5>

            <div class="row mb-3">
              <div class="col-lg-4 mb-3">
                {/*<!-- Default checked radio -->*/}
                <div class="form-check h-100 border rounded-3">
                  <div class="p-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Express delivery <br />
                      <small class="text-muted">3-4 days via Fedex </small>
                    </label>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 mb-3">
                {/*<!-- Default radio -->*/}
                <div class="form-check h-100 border rounded-3">
                  <div class="p-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label class="form-check-label" for="flexRadioDefault2">
                      Post office <br />
                      <small class="text-muted">20-30 days via post </small>
                    </label>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 mb-3">
                {/*<!-- Default radio -->*/}
                <div class="form-check h-100 border rounded-3">
                  <div class="p-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                    <label class="form-check-label" for="flexRadioDefault3">
                      Self pick-up <br />
                      <small class="text-muted">Come to our shop </small>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-8 mb-3">
                <p class="mb-0">Address</p>
                <div class="form-outline">
                  <input type="text" id="typeText" placeholder="Type here" class="form-control" />
                </div>
              </div>

              <div class="col-sm-4 mb-3">
                <p class="mb-0">City</p>
                <select class="form-select">
                  <option value="1">New York</option>
                  <option value="2">Moscow</option>
                  <option value="3">Samarqand</option>
                </select>
              </div>

              <div class="col-sm-4 mb-3">
                <p class="mb-0">House</p>
                <div class="form-outline">
                  <input type="text" id="typeText" placeholder="Type here" class="form-control" />
                </div>
              </div>

              <div class="col-sm-4 col-6 mb-3">
                <p class="mb-0">Postal code</p>
                <div class="form-outline">
                  <input type="text" id="typeText" class="form-control" />
                </div>
              </div>

              <div class="col-sm-4 col-6 mb-3">
                <p class="mb-0">Zip</p>
                <div class="form-outline">
                  <input type="text" id="typeText" class="form-control" />
                </div>
              </div>
            </div>

            <div class="form-check mb-3">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
              <label class="form-check-label" for="flexCheckDefault1">Save this address</label>
            </div>

            <div class="mb-3">
              <p class="mb-0">Message to seller</p>
              <div class="form-outline">
                <textarea class="form-control" id="textAreaExample1" rows="2"></textarea>
              </div>
            </div>

            <div class="float-end">
              <button class="btn btn-light border">Cancel</button>
              <button class="btn btn-success shadow-0 border">Continue</button>
            </div>
          </div>
        </div>
        {/*<!-- Checkout -->*/}
      </div>
      <div class="col-xl-4 col-lg-4 d-flex justify-content-center justify-content-lg-end">
        <div class="ms-lg-4 mt-4 mt-lg-0" style={{maxWidth: '320px'}}>
          <h6 class="mb-3">Summary</h6>
          <div class="d-flex justify-content-between">
            <p class="mb-2">Total price:</p>
            <p class="mb-2">$195.90</p>
          </div>
          <div class="d-flex justify-content-between">
            <p class="mb-2">Discount:</p>
            <p class="mb-2 text-danger">- $60.00</p>
          </div>
          <div class="d-flex justify-content-between">
            <p class="mb-2">Shipping cost:</p>
            <p class="mb-2">+ $14.00</p>
          </div>
          <hr />
          <div class="d-flex justify-content-between">
            <p class="mb-2">Total price:</p>
            <p class="mb-2 fw-bold">$149.90</p>
          </div>

          <div class="input-group mt-3 mb-4">
            <input type="text" class="form-control border" name="" placeholder="Promo code" />
            <button class="btn btn-light text-primary border">Apply</button>
          </div>

          <hr />
          <h6 class="text-dark my-4">Items in cart</h6>

          <div class="d-flex align-items-center mb-4">
            <div class="me-3 position-relative">
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill badge-secondary">
                1
              </span>
              <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/7.webp" style={{height: '96px', width: '96px'}} class="img-sm rounded border" />
            </div>
            <div class="">
              <a href="#" class="nav-link">
                Gaming Headset with Mic <br />
                Darkblue color
              </a>
              <div class="price text-muted">Total: $295.99</div>
            </div>
          </div>

          <div class="d-flex align-items-center mb-4">
            <div class="me-3 position-relative">
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill badge-secondary">
                1
              </span>
              <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/5.webp" style={{height: '96px', width: '96px'}} class="img-sm rounded border" />
            </div>
            <div class="">
              <a href="#" class="nav-link">
                Apple Watch Series 4 Space <br />
                Large size
              </a>
              <div class="price text-muted">Total: $217.99</div>
            </div>
          </div>

          <div class="d-flex align-items-center mb-4">
            <div class="me-3 position-relative">
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill badge-secondary">
                3
              </span>
              <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/1.webp" style={{height: '96px',width: '96px'}} class="img-sm rounded border" />
            </div>
            <div class="">
              <a href="#" class="nav-link">GoPro HERO6 4K Action Camera - Black</a>
              <div class="price text-muted">Total: $910.00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </>
    );
}
export default Checkout;