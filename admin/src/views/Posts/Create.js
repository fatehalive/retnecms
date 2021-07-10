import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Create() {
    // Hooks: states
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

    // React-router methods
    const history = useHistory();

    // Event handlers
    const handleChange = (e, name) => {
        const value = e.target.value
        setPosts({ ...posts, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post('http://localhost:5000/news-article', posts)
            const { status, message } = response.data;
            if (status === 'success') {
                alert(message)
                history.push('/admin/posts/index')
            } else {
                alert(message)
            }
        } catch (error) {
            alert('Network Error');
        }
    }

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
                                        
                                    </div>

                                    <div className="form-group mt-4">
                                        <label>Title</label>
                                        <input type="text" className="form-control" size={50} value={posts.article_title} onChange={(e) => handleChange(e, 'article_title')} />
                                    </div>

                                    <div className="form-group mt-4">
                                        <label>Post Summary</label>
                                        <input type="number" className="form-control" value={posts.article_summary} onChange={(e) => handleChange(e, 'article_summary')} />
                                    </div>

                                    <div className="form-group mt-4">
                                        <label>Main Content</label>
                                        <input type="number" className="form-control" size={30} onChange={(e) => handleChange(e, 'article_content')} />
                                    </div>

                                    <div className="form-group mt-4">
                                        <label>Status</label>
                                        <select className="form-control">
                                            <option value="">-- Choose Status --</option>
                                            <option value={false}>Off</option>
                                            <option value={true}>On</option>
                                        </select>
                                    </div>

                                    <button onClick={handleSubmit} className="btn btn-primary mt-4">Submit</button>
                                    <button onClick={() => history.push('/admin/posts/index')} className="btn btn-success mt-4 mr-2">Back</button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>

            </section>

        </main>
    )
}

export default Create;