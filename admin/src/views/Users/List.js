import React from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

// // Data test
// const users = [
//     {
//         username: "Admin",
//         email: "admin@retnecms.com",
//         password: "secret",
//         jwt_token: "",
//         createdAt: 20210701,
//         updatedAt: 20210701,
//         role_uuid: "3c45cba7-30d9-460c-8e6a-f93dbc6857c7"
//     },
//     {
//         username: "Jhon Doe",
//         email: "jhondoe@retnecms.com",
//         password: "secret",
//         jwt_token: "",
//         createdAt: 20210702,
//         updatedAt: 20210702,
//         role_uuid: "4eea6a8b-6652-4eb5-82d9-963e076d0e33"
//     }
// ];

function List() {
    // Hook: state
    const [users, setUsers] = React.useState([]);

    // Router methods
    const history = useHistory();

    // Hook: useEffect to get all user then store it to state
    React.useEffect(() => {
        axios.get('http://localhost:5000/user')
            .then(response => {
                const { message, data } = response.data;
                if (message === 'Get User Successfully') {
                    console.log(data.rows);
                    setUsers(response.data.data.rows);
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

    // Event
    const handleDelete = async (id) => {
        if (window.confirm('Are you sure?\nThis action will delete data')) {
            try {
                const response = await axios.delete('http://localhost:5000/user/' + id);
                const { message } = response.data;
                alert(message);
                axios.get('http://localhost:5000/category')
                    .then(response => {
                        const { message, data } = response.data;
                        if (message === 'Successfully') {
                            console.log(data.rows);
                            setUsers(response.data.data.rows);
                        } else {
                            alert(`Your Server is okay, check your DB`);
                            console.log(message);
                        }
                    })
                    .catch(error => {
                        alert(`Check Your Server!`);
                        console.log(error);
                    })
            } catch (error) {
                alert('Network Error');
            }
        }
    };

    return (
        <main className="content container-fluid">
            <header className="page-header">
                <div className="d-flex align-items-center">
                    <div className="mr-auto">
                        <h1 className="separator">All User</h1>
                        <nav className="breadcrumb-wrapper" aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/admin/index"><i className="icon dripicons-home"></i></Link></li>
                                <li className="breadcrumb-item"><Link to="/admin/users/index">users</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">list</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </header>

            <section className="page-content container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <h5 className="card-header">User List</h5>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <Link to="/admin/users/create" className="btn btn-primary btn-floating btn-rounded"><i className="icons dripicons-document-edit text-light"></i>Add User</Link>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <table id="bs4-table" className="table table-striped table-bordered" style={{ width: "100%" }}>
                                            <thead>
                                                <tr>
                                                    <th style={{ width: "2.5%" }}>No.</th>
                                                    <th style={{ width: "57.5%" }}>Name</th>
                                                    <th>Created Date</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {users && users.map((user, index) => {
                                                    let d = user.createdAt;
                                                    return (
                                                        <tr key={index}>
                                                            <td>{index + 1}</td>
                                                            <td><strong><Link to={`/admin/users/single/${user.uuid}`}>{user.username}</Link></strong></td>
                                                            <td>{d.slice(0, 10)}</td>
                                                            <td><button className="btn btn-info btn-rounded btn-sm" onClick={() => history.push(`/admin/users/update/${user.uuid}`)}><i className="icons dripicons-pencil text-light"></i>Edit</button><button className="btn btn-danger btn-rounded btn-sm" onClick={() => handleDelete(user.uuid)}><i className="icons dripicons-trash text-light"></i>Delete</button></td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
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

export default List;