import React from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

// Modal
import DeleteConfirmation from '../../components/Modals/DeleteConfirmation';

function List() {
    // Hook: States
    const [posts, setPosts] = React.useState([]);
    const [displayConfirmationModal, setDisplayConfirmationModal] = React.useState(false);
    const [deleteMessage, setDeleteMessage] = React.useState(null);
    const [deleteId, setDeleteId] = React.useState(null);

    // Router methods
    const history = useHistory();

    // Hook: useEffect to get data from api then store to state
    React.useEffect(() => {
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

    // Event Handlers
    const handleDelete = async (id) => {
        try {
            const response = await axios.delete('http://localhost:5000/news-article/' + id);
            const { message } = response.data;
            notifySuccess(message);
            axios.get('http://localhost:5000/news-article')
                .then(response => {
                    const { message, data } = response.data;
                    if (message === 'Get News_Article Successfully') {
                        console.table(data.rows);
                        setPosts(response.data.data.rows);
                    } else {
                        notifyError(`API okay, Check Response`);
                        console.warn(response);
                    }
                })
                .catch(error => {
                    notifyError(`Check Your Network`);
                    console.error(error);
                })
        } catch (error) {
            notifyError('Check Your Network');
            console.error(error);
        }
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

    const notifySuccess = (x) => toast.success(x, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    });

    const notifyError = (y) => toast.error(y, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    });

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
                                                        <th>Status</th>
                                                        <th>Date</th>
                                                        <th style={{ width: "13%" }}>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {posts && posts.map((post, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td>{index + 1}</td>
                                                                <td><b><Link to={`/admin/posts/single/${post.uuid}`}>{post.article_title}</Link></b></td>
                                                                <td>{post.article_summary}</td>
                                                                <td>{post.status}</td>
                                                                <td>{post.createdAt.slice(0, 10)}</td>
                                                                <td>
                                                                    <button className="btn btn-info btn-rounded btn-sm" onClick={() => history.push(`/admin/posts/update/${post.uuid}`)}><i className="icons dripicons-pencil text-light"></i>Edit</button>
                                                                    <button className="btn btn-danger btn-rounded btn-sm" onClick={() => showDeleteModal(post.uuid)}><i className="icons dripicons-trash text-light"></i>Delete</button>
                                                                </td>
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
                </div>
            </section>
            <ToastContainer position="top-right" autoClose={1500} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            <DeleteConfirmation showModal={displayConfirmationModal} confirmModal={handleDelete} hideModal={hideConfirmationModal} id={deleteId} message={deleteMessage} />
        </main>
    )
}

export default List;