import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

function Create() {
    // Hooks: States
    const [posts, setPosts] = React.useState({
        article_title: '',
        article_summary: '',
        article_content: '',
        image1_url: '',
        image2_url: '',
        status: '',
        user_uuid: '',
        category_uuid: ''
    });
    const [users, setUsers] = React.useState([]);
    const [categories, setCategories] = React.useState();

    // React-router methods
    const history = useHistory();

    // Functions to Interact with API
    const axiosGet = React.useCallback(async (endpoint, name) => {
        axios.get(endpoint)
            .then(response => {
                const { message, data } = response.data;
                if (message === `Get ${name} Successfully`) {
                    console.table(data.rows);
                    switch (name) {
                        case 'User':
                            setUsers(response.data.data.rows);
                            break;
                        case 'Category':
                            setCategories(response.data.data.rows);
                            break;
                        default:
                            break;
                    };
                } else {
                    notifyError(`API okay, Check Response`);
                    console.warn(response);
                }
            })
            .catch(error => {
                notifyError(`Check Your Network`);
                console.error(error);
            })
    }, []);

    const axiosPost = React.useCallback(async () => {
        try {
            const response = await axios.post('http://localhost:5000/news-article', posts)
            const { message } = response.data;
            if (message === 'News Article Successfully Created') {
                notifySuccess(message);
                window.setTimeout(() => history.push('/admin/posts/index'), 1500);
            } else {
                notifyError(`API okay, Check Response`);
                console.warn(response);
            }
        } catch (error) {
            notifyError('Check Your Network');
            console.error(error);
        }
    }, [posts, history]);

    // Hook: useEffect to get roles data from api then attach it to state
    React.useEffect(() => {
        axiosGet('http://localhost:5000/user', 'User')
        axiosGet('http://localhost:5000/category', 'Category')
    }, [axiosGet]);

    // Event Handlers
    const handleChange = (e, name) => {
        const value = e.target.value
        setPosts({ ...posts, [name]: value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        axiosPost();
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
        <main className="content content-fluid">
            <header className="page-header">
                <div className="d-flex align-items-center">
                    <div className="mr-auto">
                        <h1 className="separator">Posts</h1>
                        <nav className="breadcrumb-wrapper" aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/admin/index"><i className="icon dripicons-home"></i></a></li>
                                <li className="breadcrumb-item"><a href="/admin/posts/index">Posts</a></li>
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

                            <h5 className="card-header">Create Post</h5>
                            <div className="card-body">
                                <form className="form-horizontal">
                                    <div className="form-body">
                                        <div className="form-group row">
                                            <label className="control-label text-right col-md-3">Category</label>
                                            <div className="col-md-7">
                                                <select className="form-control" value={posts.category_uuid} onChange={(e) => handleChange(e, 'category_uuid')}>
                                                    <option value={null}>--- Select Category ---</option>
                                                    {categories && categories.map((category, index) => {
                                                        return (
                                                            <option key={index} value={category.uuid}>{category.category_name}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="control-label text-right col-md-3">Title</label>
                                            <div className="col-md-7">
                                                <input type="text" className="form-control" value={posts.article_title} onChange={(e) => handleChange(e, 'article_title')} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="control-label text-right col-md-3">Meta Description</label>
                                            <div className="col-md-7">
                                                <textarea type="number" className="form-control" rows="5" value={posts.article_summary} onChange={(e) => handleChange(e, 'article_summary')}></textarea>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="control-label text-right col-md-3">Main Content</label>
                                            <div className="col-md-7">
                                                <textarea id="editor1" type="number" className="form-control" rows="15" value={posts.article_content} onChange={(e) => handleChange(e, 'article_content')}></textarea>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="control-label text-right col-md-3">Status</label>
                                            <div className="col-md-7">
                                                <select className="form-control" value={posts.status} onChange={(e) => handleChange(e, 'status')}>
                                                    <option value={null}>--- Select Status ---</option>
                                                    <option value="draft">Draft</option>
                                                    <option value="publish">Publish</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="control-label text-right col-md-3">Writer</label>
                                            <div className="col-md-7">
                                                <select className="form-control" value={posts.user_uuid} onChange={(e) => handleChange(e, 'user_uuid')}>
                                                    <option value={null}>--- Select Writer ---</option>
                                                    {users && users.map((user, index) => {
                                                        return (
                                                            <option key={index} value={user.uuid}>{user.username}</option>
                                                        )
                                                    })}
                                                </select>
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
                                                    <button onClick={handleSubmit} className="btn btn-primary btn-rounded">Save</button>
                                                    <button onClick={() => history.push('/admin/posts/index')} className="btn btn-secondary clear-form btn-rounded btn-outline">Back</button>
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

export default Create;