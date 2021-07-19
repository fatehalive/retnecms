import React from 'react';
import axios from 'axios';
import { useHistory, useParams, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function Update() {
    // Hook: States
    const [category, setCategory] = React.useState({
        category_name: ''
    });

    // Router methods
    const { categoryId } = useParams();
    const history = useHistory();

    const axiosGetId = React.useCallback(async() => {
        axios.get(`http://localhost:5000/category/${categoryId}`)
        .then(response => {
            const { message, data } = response.data;
            if (message === 'Get Id Category Successfully') {
                console.table(data);
                setCategory(response.data.data);
            } else {
                notifyError(`API okay, Check Response`);
                console.warn(response);
            }
        })
        .catch(error => {
            notifyError(`Check Your Network`);
            console.error(error);
        });
    }, [categoryId]);

    const axiosPut = React.useCallback(async() => {
        try {
            const response = await axios.put(`http://localhost:5000/category/${categoryId}`, category);
            const { message } = response.data;
            if (message === 'Category Successfully Updated') {
                notifySuccess(message)
                window.setTimeout(() => history.push('/admin/categories/index'), 1500);
            } else {
                notifyError(`API okay, Check Response`)
                console.error(response);
            }
        } catch (error) {
            notifyError(`Check Your Network`);
            console.error(error);
        }
    }, [category, categoryId, history]);

    // Hook: useEffect to get data then store to state
    React.useEffect(() => {
        axiosGetId();
    }, [axiosGetId]);

    // Event Handlers
    const handleChange = (e, name) => {
        const value = e.target.value;
        setCategory({ ...category, [name]: value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        axiosPut()
    };

    const notifySuccess = (msg) => toast.success(msg);
    const notifyError = (msg) => toast.error(msg);

    return (
        <main className="content container-fluid">
            <header className="page-header">
                <div className="d-flex align-items-center">
                    <div className="mr-auto">
                        <h1 className="separator">Edit</h1>
                        <nav className="breadcrumb-wrapper" aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/admin/index"><i className="icon dripicons-home"></i></Link></li>
                                <li className="breadcrumb-item"><Link to="/admin/categories/index">Categories</Link></li>
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
                            <h5 className="card-header">Edit Category</h5>
                            <div className="card-body">
                                <form className="form-horizontal">
                                    <div className="form-body">
                                        <div className="form-group row">
                                            <label className="control-label text-right col-md-3">Category Name</label>
                                            <div className="col-md-5">
                                                <input type="text" className="form-control" value={category.category_name} onChange={(e) => handleChange(e, 'category_name')} />
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
            <ToastContainer position="top-right" autoClose={1500} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </main>
    )
}

export default Update;