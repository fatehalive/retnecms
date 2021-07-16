import React from 'react';
import axios from 'axios';
import { useHistory, useParams, Link } from 'react-router-dom';

function Single() {
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
                    console.table(data);
                    setUser(response.data.data);
                } else {
                    alert(`Something wrong`);
                    console.warn(response);
                }
            })
            .catch(error => {
                alert(`Check Your API Server`);
                console.error(error);
            });
        axios.get('http://localhost:5000/role')
            .then(response => {
                const { message, data } = response.data;
                if (message === 'Successfully') {
                    console.table(data.rows);
                    setRoles(response.data.data.rows);
                } else {
                    alert(`Your Server is okay, check your DB`);
                    console.warn(message);
                }
            })
            .catch(error => {
                alert(`Check Your Server!`);
                console.error(error);
            });
    }, [userId]);

    // Event
    const handleDelete = async (id) => {
        if (window.confirm('Are you sure?\nThis action will delete user')) {
            try {
                const response = await axios.delete('http://localhost:5000/user/' + id);
                const { message } = response.data;
                alert(message);
                history.push('/admin/users/index');
            } catch (error) {
                alert('Network Error');
            }
        }
    };

    // Custom variables
    let cd = new Date(user.createdAt);
    let ud = new Date(user.updatedAt);
    function getRoleName(x) {
        if (user.role_uuid === x.uuid) {
            return x.role
        }
    };

    return (
        <main className="content container-fluid">
            <header className="page-header">
                <div className="d-flex align-items-center">
                    <div className="mr-auto">
                        <h1 className="separator">Show Details</h1>
                        <nav className="breadcrumb-wrapper" aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/admin/index"><i className="icon dripicons-home"></i></Link></li>
                                <li className="breadcrumb-item"><Link to="/admin/users/index">Users</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Detail</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </header>

            <section className="page-content container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <h5 className="card-header">View {user.username} Details</h5>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <table id="bs4-table" className="table table-striped table-bordered" style={{ width: "100%" }}>
                                            <thead>
                                                <tr>
                                                    <th>Username</th>
                                                    <th>Email</th>
                                                    <th>Password</th>
                                                    <th>Role</th>
                                                    <th>Created Date</th>
                                                    <th>Created Time</th>
                                                    <th>Updated Date</th>
                                                    <th>Updated Time</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>{user.username}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.password}</td>
                                                    <td>{roles.map(getRoleName)}</td>
                                                    <td>{user.createdAt.slice(0, 10)}</td>
                                                    <td>{String(cd).slice(16, 24)}</td>
                                                    <td>{user.updatedAt.slice(0, 10)}</td>
                                                    <td>{String(ud).slice(16, 24)}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className="form-actions">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="row">
                                                <div className="offset-sm-3">
                                                    <button onClick={() => handleDelete(user.uuid)} className="btn btn-danger btn-rounded">Delete</button>
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
};

export default Single;