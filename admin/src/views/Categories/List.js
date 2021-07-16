import React from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

// // Data test
// const categories = [
//     {
//         category_name: "Uncategorized",
//         createdAt: 20210701
//     },
//     {
//         category_name: "Health&Fitness",
//         createdAt: 20210702
//     },
//     {
//         category_name: "Economics&Finance",
//         createdAt: 20210703
//     }
// ];

function List() {
    // Hook: state
    const [categories, setCategories] = React.useState([]);

    // Router methods
    const history = useHistory();

    // Hook: useEffect to get all role user then store it to state
    React.useEffect(() => {
        axios.get('http://localhost:5000/category')
            .then(response => {
                const { message, data } = response.data;
                if (message === 'Successfully') {
                    console.table(data.rows);
                    setCategories(response.data.data.rows);
                } else {
                    alert(`Your Server is okay, check your DB`);
                    console.warn(response);
                }
            })
            .catch(error => {
                alert(`Check Your Server!`);
                console.error(error);
            })
    }, []);

    // Event
    const handleDelete = async (id) => {
        if (window.confirm('Are you sure?\nThis action will delete data')) {
            try {
                const response = await axios.delete('http://localhost:5000/category/' + id);
                const { message } = response.data;
                alert(message);
                axios.get('http://localhost:5000/category')
                    .then(response => {
                        const { message, data } = response.data;
                        if (message === 'Successfully') {
                            console.table(data.rows);
                            setCategories(response.data.data.rows);
                        } else {
                            alert(`Your Server is okay, check your DB`);
                            console.warn(response);
                        }
                    })
                    .catch(error => {
                        alert(`Check Your Server!`);
                        console.warn(error);
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
                        <h1 className="separator">Category</h1>
                        <nav className="breadcrumb-wrapper" aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/admin/index"><i className="icon dripicons-home"></i></Link></li>
                                <li className="breadcrumb-item"><Link to="/admin/categories/index">categories</Link></li>
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
                            <h5 className="card-header">Categories List</h5>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <Link to="/admin/categories/create" className="btn btn-primary btn-floating btn-rounded"><i className="icons dripicons-document-edit text-light"></i>Add Category</Link>
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
                                                {categories && categories.map((category, index) => {
                                                    let d = category.createdAt;
                                                    return (
                                                        <tr key={index}>
                                                            <td>{index + 1}</td>
                                                            <td><strong><Link to={`/admin/categories/single/${category.uuid}`}>{category.category_name}</Link></strong></td>
                                                            <td>{d.slice(0, 10)}</td>
                                                            <td><button className="btn btn-info btn-rounded btn-sm" onClick={() => history.push(`/admin/categories/update/${category.uuid}`)}><i className="icons dripicons-pencil text-light"></i>Edit</button><button className="btn btn-danger btn-rounded btn-sm" onClick={() => handleDelete(category.uuid)}><i className="icons dripicons-trash text-light"></i>Delete</button></td>
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