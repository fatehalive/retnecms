import React from 'react';
import axios from 'axios';
import { useHistory, useParams, Link } from 'react-router-dom';

function Update() {
    // Hook: state
    const [category, setCategory] = React.useState({
        category_name: ''
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

    // Events
    const handleChange = (e, name) => {
        const value = e.target.value;
        setCategory({...category, [name]: value})
    };

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.put(`http://localhost:5000/categories/${categoryId}`, category);
            const { data, message } = response.data;
            if (message === 'Category Successfully Updated') {
                alert(message)
                history.push('/admin/roles/index')
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
                                <li className="breadcrumb-item"><Link to="/admin/categories/index">categories</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">edit</li>
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
                                                <input type="text" className="form-control" value={category.category_name} onChange={(e) => handleChange(e, 'category_name')}/>
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
        </main>
    )
}

export default Update;