import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Create() {
    // Hooks: states
    const [user, setUser] = React.useState({
        username: '',
        email: '',
        password: '',
        jwt_token: '',
        createdAt: '',
        updatedAt: '',
        role_uuid: ''
    });
    const [roles, setRoles] = React.useState([]);

    // React-router methods
    const history = useHistory();

    // Hook: useEffect to get roles data from api then attach it to state
    React.useEffect(() => {
        axios.get('http://localhost:5000/role')
            .then(response => {
                const { message, data } = response.data;
                if (message === 'Successfully') {
                    console.log(data.rows);
                    setRoles(response.data.data.rows);
                } else {
                    alert(`Your Server is okay, check your DB`);
                    console.log(message);
                }
            })
            .catch(error => {
                alert(`Check Your Server!`);
                console.log(error);
            })
    }, []);

    // Event handlers
    const handleChange = (e, name) => {
        const value = e.target.value
        setUser({ ...user, [name]: value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post('http://localhost:5000/user', user)
            const { message } = response.data;
            if (message === 'User Successfully Created') {
                alert(message);
                history.push('/admin/users/index');
            } else {
                alert(`Server is okay, check your DB`);
                console.log(message);
            }
        } catch (error) {
            alert('Check Your Server!');
            console.log(error);
        }
    };

    return (
        <main className="content content-fluid">
            <header className="page-header">
                <div className="d-flex align-items-center">
                    <div className="mr-auto">
                        <h1 className="separator">Create Page</h1>
                        <nav className="breadcrumb-wrapper" aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/admin/index"><i className="icon dripicons-home"></i></a></li>
                                <li className="breadcrumb-item"><a href="/admin/users/index">users</a></li>
                                <li className="breadcrumb-item active" aria-current="page">create</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </header>

            <section className="page-content content-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card">

                            <h5 className="card-header">Create User</h5>
                            <div className="card-body">
                                <form className="form-horizontal">
                                    <div className="form-body">
                                        <div className="form-group row">
                                            <label className="control-label text-right col-md-3">Username</label>
                                            <div className="col-md-5">
                                                <input type="text" className="form-control" value={user.username} onChange={(e) => handleChange(e, 'username')} placeholder="Insert username" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="control-label text-right col-md-3">Email</label>
                                            <div className="col-md-5">
                                                <input type="text" className="form-control" value={user.email} onChange={(e) => handleChange(e, 'email')} placeholder="Insert email" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="control-label text-right col-md-3">Password</label>
                                            <div className="col-md-5">
                                                <input type="text" className="form-control" value={user.password} onChange={(e) => handleChange(e, 'password')} placeholder="Insert password" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="control-label text-right col-md-3">Role</label>
                                            <div className="col-md-5">
                                                <select className="form-control" value={user.role_uuid} onChange={(e) => handleChange(e, 'role_uuid')}>
                                                    {roles && roles.map((role, index) => {
                                                        return (
                                                            <option key={index} value={role.uuid}>{role.role}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer bg-light">
                                <div className="form-actions">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="row">
                                                <div className="offset-sm-3">
                                                    <button onClick={handleSubmit} className="btn btn-primary btn-rounded">Add</button>
                                                    <button onClick={() => history.push('/admin/users/index')} className="btn btn-secondary clear-form btn-rounded btn-outline">Back</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>

        </main>
    )
}

export default Create;