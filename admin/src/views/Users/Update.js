import React from 'react';
import axios from 'axios';
import { useHistory, useParams, Link } from 'react-router-dom';

function Update() {
    // Hook: state
    const [user, setUser] = React.useState({
        username: '',
        email: '',
        password: '',
        createdAt: '',
        updatedAt: '',
        role_uuid: ''
    });
    const [roles, setRoles] = React.useState([]);

    // Router methods
    const { userId } = useParams();
    const history = useHistory();

    // Hook: useEffect to get data then store to state
    React.useEffect(() => {
        axios.get(`http://localhost:5000/user/${userId}`)
            .then(response => {
                const { message, data } = response.data;
                if (message === 'Get Id User Successfully') {
                    console.log(data);
                    setUser(response.data.data);
                } else {
                    alert(`Your Server is okay, check your DB`);
                    console.log(message);
                }
            })
            .catch(error => {
                alert(`Check Your Server!`);
                console.log(error);
            });
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
    }, [userId]);

    // Events
    const handleChange = (e, name) => {
        const value = e.target.value;
        setUser({ ...user, [name]: value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.put(`http://localhost:5000/user/${userId}`, user);
            const { data, message } = response.data;
            if (message === 'User Successfully Updated') {
                alert(message)
                history.push('/admin/users/index')
            } else {
                alert(message)
                console.log(data)
            }
        } catch (error) {
            alert('Network Error')
        }
    };

    return (
        <main className="content container-fluid">
            <header className="page-header">
                <div className="d-flex align-items-center">
                    <div className="mr-auto">
                        <h1 className="separator">Edit</h1>
                        <nav className="breadcrumb-wrapper" aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/admin/index"><i className="icon dripicons-home"></i></Link></li>
                                <li className="breadcrumb-item"><Link to="/admin/users/index">Users</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Edit</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </header>

            <section className="page-content container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <h5 className="card-header">Edit User {user.username}</h5>
                            <div className="card-body">
                                <form className="form-horizontal">
                                    <div className="form-body">
                                        <div className="form-group row">
                                            <label className="control-label text-right col-md-3">Username</label>
                                            <div className="col-md-5">
                                                <input type="text" className="form-control" value={user.username} onChange={(e) => handleChange(e, 'username')} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="control-label text-right col-md-3">Email</label>
                                            <div className="col-md-5">
                                                <input type="text" className="form-control" value={user.email} onChange={(e) => handleChange(e, 'email')} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="control-label text-right col-md-3">Password</label>
                                            <div className="col-md-5">
                                                <input type="text" className="form-control" value={user.password} onChange={(e) => handleChange(e, 'password')} />
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
                            <div className="card-footer">
                                <div className="form-actions">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="row">
                                                <div className="offset-sm-3">
                                                    <button onClick={handleSubmit} className="btn btn-primary btn-rounded">Save</button>
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

export default Update;