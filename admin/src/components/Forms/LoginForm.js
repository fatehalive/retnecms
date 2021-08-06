// import {Formik, Field, Form } from 'formik';

function LoginForm(props) {
	return (
		<form className="sign-in-form">
			<div className="card">
				<div className="card-body">
					<a href="/" className="brand text-center d-block m-b-20">
						<img src="/assets/img/qt-logo@2x.png" alt="QuantumPro Logo" />
					</a>
					<h5 className="sign-in-heading text-center m-b-20">Sign in to your account</h5>
					<div className="form-group">
						<label className="sr-only">Email address</label>
						<input type="email" onChange={(e) => props.onChange(e, 'email')} className="form-control" placeholder="Email address" />
					</div>

					<div className="form-group">
						<label className="sr-only">Password</label>
						<input type="password" onChange={(e) => props.onChange(e, 'password')} className="form-control" placeholder="Password" />
					</div>
					<div className="checkbox m-b-10 m-t-20">
						<a href="#" className="float-right">Forgot Password?</a>
					</div>
					<button className="btn btn-primary btn-rounded btn-floating btn-lg btn-block" onClick={(e)=>props.onSubmit(e)}>Sign In</button>
				</div>

			</div>
		</form>
	)
}

export default LoginForm;