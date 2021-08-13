import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import config from '../../config';

function Create() {
    // Hook: States
    const [role, setRole] = React.useState({
        role: ''
    });

    // React-router methods
    const history = useHistory();

    // Function to Interact API
    const axiosPost = React.useCallback(async() => {
        try {
            const response = await axios.post(config.WS_BASE_URL + '/role', role)
            const { message } = response.data;
            if (message === 'Successfully Created') {
                notifySuccess(message);
                window.setTimeout(() => history.push('/admin/roles/index'), 1500);
            } else {
                notifyError(`API okay, Check Response`);
                console.warn(response);
            }
        } catch (error) {
            notifyError('Check Your Server!');
            console.error(error);
        }
    }, [role, history]);

    // Event Handlers
    const handleChange = (e, name) => {
        const value = e.target.value
        setRole({ ...role, [name]: value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        axiosPost();
    };

    const notifySuccess = (msg) => toast.success(msg);
    const notifyError = (msg) => toast.error(msg);

    return (
        <main className="content content-fluid">
            <header className="page-header">
                <div className="d-flex align-items-center">
                    <div className="mr-auto">
                        <h1 className="separator">Role</h1>
                        <nav className="breadcrumb-wrapper" aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/admin/index"><i className="icon dripicons-home"></i></a></li>
                                <li className="breadcrumb-item"><a href="/admin/roles/index">Roles</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Create</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </header>
            <section className="page-content content-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card">

                            <h5 className="card-header">Create Role</h5>
                            <div className="card-body">
                                <form className="form-horizontal">
                                    <div className="form-body">
                                        <div className="form-group row">
                                            <label className="control-label text-right col-md-3">Role Name</label>
                                            <div className="col-md-5">
                                                <input type="text" className="form-control" value={role.name} onChange={(e) => handleChange(e, 'role')} placeholder="ex: Editor"/>
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
                                                    <button onClick={() => history.push('/admin/roles/index')} className="btn btn-secondary clear-form btn-rounded btn-outline">Back</button>
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
};

export default Create;