import React from 'react';
import axios from 'axios';
import { useHistory, useParams, Link } from 'react-router-dom';

function Single() {
    // Hook: state
    const [category, setCategory] = React.useState({
        category_name: '',
        createdAt: '',
        updatedAt: ''
    });

    // Router methods
    const { categoryId } = useParams();
    const history = useHistory();

    // Hook: useEffect to get data then store to state
    React.useEffect(() => {
        axios.get(`http://localhost:5000/category/${categoryId}`)
            .then(response => {
                const { message, data } = response.data;
                if (message === 'Get Id Category Successfully') {
                    console.log(data);
                    setCategory(response.data.data);
                } else {
                    alert(`Your Server is okay, check your DB`);
                    console.log(message);
                }
            })
            .catch(error => {
                alert(`Check Your Server!`);
                console.log(error);
            });
    }, [categoryId]);

    // Event
    const handleDelete = async (id) => {
        if (window.confirm('Are you sure?\nThis action will delete data')) {
            try {
                const response = await axios.delete('http://localhost:5000/category/' + id);
                const { message } = response.data;
                alert(message);
                history.push('/admin/categories/index')
            } catch (error) {
                alert('Network Error');
            }
        }
    };

    // Custom variables
    let cd = new Date(category.createdAt);
    let ud = new Date(category.updatedAt);

    return (
        <main className="content container-fluid">
            <header className="page-header">
                <div className="d-flex align-items-center">
                    <div className="mr-auto">
                        <h1 className="separator">Single</h1>
                        <nav className="breadcrumb-wrapper" aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/admin/index"><i className="icon dripicons-home"></i></Link></li>
                                <li className="breadcrumb-item"><Link to="/admin/categories/index">categories</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">single</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </header>

            <section className="page-content container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <h5 className="card-header">{category.category_name} Category</h5>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <table id="bs4-table" className="table table-striped table-bordered" style={{ width: "100%" }}>
                                            <thead>
                                                <tr>
                                                    <th style={{ width: "40%" }}>Category</th>
                                                    <th>Created Date</th>
                                                    <th>Created Time</th>
                                                    <th>Updated Date</th>
                                                    <th>Updated Time</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>{category.category_name}</td>
                                                    <td>{category.createdAt.slice(0, 10)}</td>
                                                    <td>{String(cd).slice(16, 24)}</td>
                                                    <td>{category.updatedAt.slice(0, 10)}</td>
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
                                                    <button onClick={() => handleDelete(category.uuid)} className="btn btn-danger btn-rounded">Delete</button>
                                                    <button onClick={() => history.push('/admin/categories/index')} className="btn btn-secondary clear-form btn-rounded btn-outline">Back</button>
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