import React from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { OverlayTrigger, Spinner, Tooltip } from 'react-bootstrap';

// Modal
import DeleteConfirmation from '../../components/Modals/DeleteConfirmation';

function List() {
    // Hook: States
    const [posts, setPosts] = React.useState();
    const [displayConfirmationModal, setDisplayConfirmationModal] = React.useState(false);
    const [deleteMessage, setDeleteMessage] = React.useState(null);
    const [deleteId, setDeleteId] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    // Router methods
    const history = useHistory();

    // Functions to Interact with API
    const axiosGet = React.useCallback(async () => {
        axios.get('http://localhost:5000/news-article')
            .then(response => {
                const { message } = response.data;
                if (message === 'Get News_Article Successfully') {
                    console.table(response.data.data.rows);
                    setPosts(response.data.data.rows)
                } else {
                    notifyError(`API okay, Check Response`)
                    console.warn(response)
                }
            })
            .catch(error => {
                notifyError(error)
                console.error(error)
            })
    }, []);

    const axiosDelete = React.useCallback(async (id) => {
        try {
            const response = await axios.delete('http://localhost:5000/news-article/' + id);
            const { message } = response.data;
            notifySuccess(message);
            axiosGet();
        } catch (error) {
            notifyError('Check Your Network');
            console.error(error);
        }
    }, [axiosGet]);

    // Hook: useEffect to get data from api then store to state
    React.useEffect(() => {
        axiosGet();
        setLoading(true);
    }, [axiosGet]);

    // Event Handlers
    const handleDelete = (id) => {
        axiosDelete(id);
        setDisplayConfirmationModal(false);
    };

    const showDeleteModal = (id) => {
        setDeleteId(id)
        setDeleteMessage(`Are you sure you want to delete ${id}?`);
        setDisplayConfirmationModal(true);
    };

    const hideConfirmationModal = () => {
        setDisplayConfirmationModal(false);
    };

    const notifySuccess = (msg) => toast.success(msg);
    const notifyError = (msg) => toast.error(msg);

    return (
        <main className="content container-fluid">
            <header className="page-header">
                <div className="d-flex align-items-center">
                    <div className="mr-auto">
                        <h1 className="separator">Posts</h1>
                        <nav className="breadcrumb-wrapper" aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/admin/index"><i className="icon dripicons-home"></i></a></li>
                                <li className="breadcrumb-item"><a href="/admin/posts/index">Posts</a></li>
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

                            <h5 className="card-header">Posts List</h5>

                            <div className="card-body">

                                <div className="dataTables_wrapper container-fluid dt-bootstrap4">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <Link to="/admin/posts/create" className="btn btn-primary btn-floating btn-rounded"><i className="icons dripicons-document-edit text-light"></i>Write Post</Link>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <table id="bs4-table" className="table table-striped table-bordered" style={{ width: "100%" }}>
                                                <thead>
                                                    <tr>
                                                        <th style={{ width: "2.5%" }}>No.</th>
                                                        <th>Title</th>
                                                        <th>Meta Description</th>
                                                        <th style={{ width: "5%", textAlign: "center" }}>Category</th>
                                                        <th style={{ width: "5%", textAlign: "center" }}>Status</th>
                                                        <th style={{ width: "5%", textAlign: "center" }}>Date</th>
                                                        <th style={{ width: "15%", textAlign: "center" }}>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {(posts && loading) ? posts.map((post, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td>{index + 1}</td>
                                                                <td><b><Link to={`/admin/posts/single/${post.uuid}`}>{post.article_title}</Link></b></td>
                                                                <td>{post.article_summary}</td>
                                                                <td>{post.category && post.category.category_name}</td>
                                                                {(post.status === 'publish') ? <td style={{ textAlign: "center" }}><span className="badge badge-success">{post.status}</span></td> : <td style={{ textAlign: "center" }}><span className="badge badge-secondary">{post.status}</span></td>}
                                                                <td style={{ textAlign: "center" }}>{`${post.createdAt.slice(8, 10)}/${post.createdAt.slice(5, 7)}/${post.createdAt.slice(0, 4)}`}</td>
                                                                <td style={{ textAlign: "center" }}>
                                                                    <OverlayTrigger overlay={(props) => (<Tooltip {...props}>Edit</Tooltip>)} placement="top">
                                                                        <button className="btn btn-info btn-rounded btn-sm" onClick={() => history.push(`/admin/posts/update/${post.uuid}`)}><i className="icons dripicons-pencil text-light"></i></button>
                                                                    </OverlayTrigger>
                                                                    <OverlayTrigger overlay={(props) => (<Tooltip {...props}>Delete</Tooltip>)} placement="top">
                                                                        <button className="btn btn-danger btn-rounded btn-sm" onClick={() => showDeleteModal(post.uuid)}><i className="icons dripicons-trash text-light"></i></button>
                                                                    </OverlayTrigger>
                                                                </td>
                                                            </tr>
                                                        )
                                                    }) : <tr><td className="text-center" colSpan="4" style={{ backgroundColor: "white" }}><Spinner className="text-center" animation="border" variant="primary" /></td></tr>}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer position="top-right" autoClose={1500} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            <DeleteConfirmation showModal={displayConfirmationModal} confirmModal={handleDelete} hideModal={hideConfirmationModal} id={deleteId} message={deleteMessage} />
        </main>
    )
}

export default List;