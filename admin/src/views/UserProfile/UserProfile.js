const UserProfile = () => {
    return (
        <div className="content container">
            <header className="page-header">
                <div className="d-flex align-items-center">
                    <div className="mr-auto">
                        <h1 className="separator">My Account</h1>
                        <nav className="breadcrumb-wrapper" aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html"><i className="icon dripicons-home"></i></a></li>
                                <li className="breadcrumb-item"><a href="javascript:void(0)">Admin</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Profile</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </header>

            <section className="page-content container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-12 col-lg-3">
                                        <div className="nav flex-column nav-pills" id="my-account-tabs" role="tablist" aria-orientation="vertical">
                                            <a className="nav-link active" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="true">Profile</a>
                                            <a className="nav-link" id="v-pills-payment-tab" data-toggle="pill" href="#v-pills-payment" role="tab" aria-controls="v-pills-payment" aria-selected="false">User Info</a>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-9">
                                        <div className="tab-content" id="my-account-tabsContent">
                                            <div className="tab-pane fade show active" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                                <h4 className="card-heading p-b-20">Profile</h4>
                                                <form>
                                                    <div className="form-group">
                                                        <img src="../assets/img/avatars/default.png" className="w-50 rounded-circle" alt="" />
                                                        <div className="file-upload">
                                                            <label for="upload" className="btn btn-primary m-b-0 m-l-5 m-r-5">Upload a new picture</label>
                                                            <input id="upload" className="file-upload__input" type="file" name="file-upload" />
                                                        </div>
                                                        <button className="btn btn-secondary">Delete</button>
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="inputName">Your name</label>
                                                        <input type="text" className="form-control" id="inputName" autocomplete="name" placeholder="Enter your name" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="inputName">Website</label>
                                                        <input type="text" className="form-control" id="inputName" autocomplete="name" placeholder="Enter your website" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="inputName">LinkedIn</label>
                                                        <input type="text" className="form-control" id="inputName" autocomplete="name" placeholder="Enter your LinkedIn url" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="inputName">Facebook</label>
                                                        <input type="text" className="form-control" id="inputName" autocomplete="name" placeholder="Enter your Facebook url" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="inputName">Instagram</label>
                                                        <input type="text" className="form-control" id="inputName" autocomplete="name" placeholder="Enter your Instagram url" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="inputName">Twitter</label>
                                                        <input type="text" className="form-control" id="inputName" autocomplete="name" placeholder="Enter your Twitter url" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="inputName">YouTube</label>
                                                        <input type="text" className="form-control" id="inputName" autocomplete="name" placeholder="Enter your YouTube url" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="inputName">Google Plus</label>
                                                        <input type="text" className="form-control" id="inputName" autocomplete="name" placeholder="Enter your Google+ url" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="exampleFormControlTextarea1">Bio</label>
                                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                                    </div>
                                                    <button type="submit" className="btn btn-primary">Update Profile</button>
                                                </form>
                                            </div>

                                            <div className="tab-pane fade" id="v-pills-payment" role="tabpanel" aria-labelledby="v-pills-payment-tab">
                                                <h4 className="card-heading p-b-20">Payment Info</h4>
                                                <form>
                                                    <div className="form-group ">
                                                        <div className="custom-control custom-radio m-b-20">
                                                            <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input" checked />
                                                            <label className="custom-control-label" for="customRadioInline1">
                                                                <img className="max-w-50 m-r-15" src="../assets/img/payment-icons/Visa@2x.png" alt="" />
                                                                <img className="max-w-50 m-r-15" src="../assets/img/payment-icons/MasterCard@2x.png" alt="" />
                                                                <img className="max-w-50 m-r-15" src="../assets/img/payment-icons/Discover@2x.png" alt="" />
                                                                <img className="max-w-50 m-r-15" src="../assets/img/payment-icons/AmericanExpress@2x.png" alt="" /></label>
                                                        </div>
                                                        <div className="custom-control custom-radio m-b-20">
                                                            <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input" />
                                                            <label className="custom-control-label" for="customRadioInline2"><img className="max-w-50 m-r-15" src="../assets/img/payment-icons/Paypal@2x.png" alt="" /></label>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="inputCard">Card Number</label>
                                                        <input type="text" className="form-control" id="inputCard" placeholder="•••• •••• •••• 1234" />
                                                    </div>
                                                    <div className="form-row">
                                                        <div className="form-group col-md-6">
                                                            <label for="inputExpiration">Expiration</label>
                                                            <input type="text" className="form-control" id="inputExpiration" placeholder="MM / YY" />
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <label for="inputCvv">CVV</label>
                                                            <input type="text" className="form-control" id="inputCvv" placeholder="123" />
                                                        </div>
                                                    </div>
                                                    <button type="submit" className="btn btn-primary">Update Profile</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default UserProfile;