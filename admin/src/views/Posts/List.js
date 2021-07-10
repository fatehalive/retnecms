import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// // Data test
// const posts = [
//     {
//         article_title: "My first post",
//         createdAt: 20210701
//     },
//     {
//         article_title: "My second posts",
//         createdAt: 20210702
//     },
//     {
//         article_title: "My third posts",
//         createdAt: 20210703
//     }
// ]

function List() {
    const [posts, setPosts] = React.useState([]);

    React.useEffect(() => {
        axios.get('http://localhost:5000/news-article')
            .then(res => {
                const { status } = res;
                if (status === 200) {
                    console.log(`data: ${res.data.data.rows}`);
                    setPosts(res.data.data.rows)
                } else {
                    console.log(res)
                }
            })
            .catch(err => {
                alert(err)
            })
    }, []);

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
                                <li className="breadcrumb-item active" aria-current="page">Published</li>
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
                                                        <th>Title</th>
                                                        <th>Post Summary</th>
                                                        <th>Author</th>
                                                        <th>Categories</th>
                                                        <th>Status</th>
                                                        <th>Date</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {posts && posts.map((post, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td>{post.article_title}</td>
                                                                <td>{post.article_summary}</td>
                                                                <td>{post.user_uuid}</td>
                                                                <td>{post.category_uuid}</td>
                                                                <td>{post.status}</td>
                                                                <td>{post.createdAt}</td>
                                                            </tr>
                                                        )
                                                    })}
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <th>Title</th>
                                                        <th>Post Summary</th>
                                                        <th>Author</th>
                                                        <th>Categories</th>
                                                        <th>Status</th>
                                                        <th>Date</th>
                                                    </tr>
                                                </tfoot>
                                            </table>
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

export default List;