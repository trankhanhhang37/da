import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../store/actions";
import CartItem from "../../../Components/cartItem";

export default function Cart() {
    const { cart } = useSelector((state) => state.cartReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        if (!cart) {
            dispatch(getCart({userId:'234'}))
        }
    }, [cart])
    return (
        <>

            {/* <!-- cart + summary --> */}
            <section class="bg-light my-5">
                <div class="container">
                    <div class="row">
                        {/* <!-- cart --> */}
                        <div class="col-lg-9">
                            <div class="card border shadow-0">
                                <div class="m-4">
                                    <h4 class="card-title mb-4">Giỏ hàng của bạn</h4>
                                    {cart && cart.cart_products.map((product, index) => {
                                        return <CartItem product_id={product.productId} sku_id={product.sku_id} quantity={product.quantity} key={index} />
                                    })}


                                </div>

                                <div class="border-top pt-4 mx-4 mb-4">
                                    <p><i class="fas fa-truck text-muted fa-lg"></i> Free Delivery within 1-2 weeks</p>
                                    <p class="text-muted">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- cart --> */}

                        {/* <!-- summary --> */}
                        <div class="col-lg-3">
                            <div class="card mb-3 border shadow-0">
                                <div class="card-body">
                                    <form>
                                        <div class="form-group">
                                            <label class="form-label">Have coupon?</label>
                                            <div class="input-group">
                                                <input type="text" class="form-control border" name="" placeholder="Coupon code" />
                                                <button class="btn btn-light border">Apply</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="card shadow-0 border">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <p class="mb-2">Total price:</p>
                                        <p class="mb-2">$329.00</p>
                                    </div>
                                    <div class="d-flex justify-content-between">
                                        <p class="mb-2">Discount:</p>
                                        <p class="mb-2 text-success">-$60.00</p>
                                    </div>
                                    <div class="d-flex justify-content-between">
                                        <p class="mb-2">TAX:</p>
                                        <p class="mb-2">$14.00</p>
                                    </div>
                                    <hr />
                                    <div class="d-flex justify-content-between">
                                        <p class="mb-2">Total price:</p>
                                        <p class="mb-2 fw-bold">$283.00</p>
                                    </div>

                                    <div class="mt-3">
                                        <a href="#" class="btn btn-success w-100 shadow-0 mb-2"> Make Purchase </a>
                                        <a href="#" class="btn btn-light w-100 border mt-2"> Back to shop </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- summary --> */}
                    </div>
                </div>
            </section>
            {/* <!-- cart + summary --> */}
            <section>
                <div class="container my-5">
                    <header class="mb-4">
                        <h3>Recommended items</h3>
                    </header>

                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="card px-4 border shadow-0 mb-4 mb-lg-0">
                                <div class="mask px-2" style={{ height: '50px' }}>
                                    <div class="d-flex justify-content-between">
                                        <h6><span class="badge bg-danger pt-1 mt-3 ms-2">New</span></h6>
                                        <a href="#"><i class="fas fa-heart text-primary fa-lg float-end pt-3 m-2"></i></a>
                                    </div>
                                </div>
                                <a href="#" class="">
                                    <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/7.webp" class="card-img-top rounded-2" />
                                </a>
                                <div class="card-body d-flex flex-column pt-3 border-top">
                                    <a href="#" class="nav-link">Gaming Headset with Mic</a>
                                    <div class="price-wrap mb-2">
                                        <strong class="">$18.95</strong>
                                        <del class="">$24.99</del>
                                    </div>
                                    <div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                                        <a href="#" class="btn btn-outline-primary w-100">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="card px-4 border shadow-0 mb-4 mb-lg-0">
                                <div class="mask px-2" style={{ height: '50px' }}>
                                    <a href="#"><i class="fas fa-heart text-primary fa-lg float-end pt-3 m-2"></i></a>
                                </div>
                                <a href="#" class="">
                                    <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/5.webp" class="card-img-top rounded-2" />
                                </a>
                                <div class="card-body d-flex flex-column pt-3 border-top">
                                    <a href="#" class="nav-link">Apple Watch Series 1 Sport </a>
                                    <div class="price-wrap mb-2">
                                        <strong class="">$120.00</strong>
                                    </div>
                                    <div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                                        <a href="#" class="btn btn-outline-primary w-100">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="card px-4 border shadow-0">
                                <div class="mask px-2" style={{ height: '50px' }}>
                                    <a href="#"><i class="fas fa-heart text-primary fa-lg float-end pt-3 m-2"></i></a>
                                </div>
                                <a href="#" class="">
                                    <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/9.webp" class="card-img-top rounded-2" />
                                </a>
                                <div class="card-body d-flex flex-column pt-3 border-top">
                                    <a href="#" class="nav-link">Men's Denim Jeans Shorts</a>
                                    <div class="price-wrap mb-2">
                                        <strong class="">$80.50</strong>
                                    </div>
                                    <div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                                        <a href="#" class="btn btn-outline-primary w-100">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="card px-4 border shadow-0">
                                <div class="mask px-2" style={{ height: '50px' }}>
                                    <a href="#"><i class="fas fa-heart text-primary fa-lg float-end pt-3 m-2"></i></a>
                                </div>
                                <a href="#" class="">
                                    <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/10.webp" class="card-img-top rounded-2" />
                                </a>
                                <div class="card-body d-flex flex-column pt-3 border-top">
                                    <a href="#" class="nav-link">Mens T-shirt Cotton Base Layer Slim fit </a>
                                    <div class="price-wrap mb-2">
                                        <strong class="">$13.90</strong>
                                    </div>
                                    <div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                                        <a href="#" class="btn btn-outline-primary w-100">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Recommended --> */}

        </>
    );

}