import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Create() {
    // Hooks: states
    const [category, setCategory] = React.useState({
        category_name: ''
    });

    // React-router methods
    const history = useHistory();

    // Event handlers
    const handleChange = (e, name) => {
        const value = e.target.value
        setCategory({ ...category, [name]: value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post('http://localhost:5000/category', category)
            const { message } = response.data;
            if (message === 'Successfully Created') {
                alert(message);
                history.push('/admin/categories/index');
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
                        <h1 className="separator">Category</h1>
                        <nav className="breadcrumb-wrapper" aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/admin/index"><i className="icon dripicons-home"></i></a></li>
                                <li className="breadcrumb-item"><a href="/admin/categories/index">categories</a></li>
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

                            <h5 className="card-header">Create Category</h5>
                            <div className="card-body">
                                <form className="form-horizontal">
                                    <div className="form-body">
                                        <div className="form-group row">
                                            <label className="control-label text-right col-md-3">Category Name</label>
                                            <div className="col-md-5">
                                                <input type="text" className="form-control" value={category.category_name} onChange={(e) => handleChange(e, 'category_name')} placeholder="ex: Health&Fitness/Travel/Gadgets"/>
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
                                                    <button onClick={handleSubmit} className="btn btn-primary btn-rounded">Create</button>
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

export default Create;