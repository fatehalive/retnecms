import React from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

// // Data test
// const roles = [
//     {
//         role: "Super Admin",
//         createdAt: 20210701
//     },
//     {
//         role: "Editor",
//         createdAt: 20210702
//     },
//     {
//         role: "Author",
//         createdAt: 20210703
//     }
// ];

function List() {
    // Hook: state
    const [roles, setRoles] = React.useState([]);

    // Router methods
    const history = useHistory();

    // Hook: useEffect to get all role user then store it to state
    React.useEffect(() => {
        axios.get('http://localhost:5000/role')
            .then(response => {
                const { message, data } = response.data;
                if (message === 'Successfully') {
                    console.table(data.rows);
                    let x = data.rows.sort(function (x, y) { return x.createdAt - y.createdAt })
                    console.table(x)
                    setRoles(response.data.data.rows);
                } else {
                    alert(`Your Server is okay, check your DB`);
                    console.warn(response);
                }
            })
            .catch(error => {
                alert(`Check Your Server!`);
                console.log(error);
            })
    }, []);

    // Event
    const handleDelete = async (id) => {
        if (window.confirm('Yakin mau dihapus?')) {
            try {
                const response = await axios.delete('http://localhost:5000/role/' + id);
                const { message } = response.data;
                alert(message);
                axios.get('http://localhost:5000/role')
                    .then(response => {
                        const { message, data } = response.data;
                        if (message === 'Successfully') {
                            console.table(data.rows);
                            setRoles(response.data.data.rows);
                        } else {
                            alert(`Your Server is okay, check your DB`);
                            console.warn(response);
                        }
                    })
                    .catch(error => {
                        alert(`Check Your Server!`);
                        console.error(error);
                    })
            } catch (error) {
                alert('Network Error');
            }
        }
    };

    // Custom


    return (
        <main className="content container-fluid">
            <header className="page-header">
                <div className="d-flex align-items-center">
                    <div className="mr-auto">
                        <h1 className="separator">Roles</h1>
                        <nav className="breadcrumb-wrapper" aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/admin/index"><i className="icon dripicons-home"></i></Link></li>
                                <li className="breadcrumb-item"><Link to="/admin/roles/index">Roles</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">List</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </header>

            <section className="page-content container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <h5 className="card-header">Roles List</h5>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <Link to="/admin/roles/create" className="btn btn-primary btn-floating btn-rounded"><i className="icons dripicons-document-edit text-light"></i>Add Role</Link>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <table id="bs4-table" className="table table-striped table-bordered" style={{ width: "100%" }}>
                                            <thead>
                                                <tr>
                                                    <th style={{ width: "2.5%" }}>No.</th>
                                                    <th style={{ width: "57.5%" }}>Role</th>
                                                    <th>Created Date</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {roles && roles.map((role, index) => {
                                                    let d = role.createdAt;
                                                    return (
                                                        <tr key={index}>
                                                            <td>{index + 1}</td>
                                                            <td><strong><Link to={`/admin/roles/single/${role.uuid}`}>{role.role}</Link></strong></td>
                                                            <td>{d.slice(0, 10)}</td>
                                                            <td><button className="btn btn-info btn-rounded btn-sm" onClick={() => history.push(`/admin/roles/update/${role.uuid}`)}><i className="icons dripicons-pencil text-light"></i>Edit</button><button className="btn btn-danger btn-rounded btn-sm" onClick={() => handleDelete(role.uuid)}><i className="icons dripicons-trash text-light"></i>Delete</button></td>
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