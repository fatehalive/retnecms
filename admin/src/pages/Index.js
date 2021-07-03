import Header from '../components/Header';
import Main from '../components/Main';

function Index() {
    return (
        <div id="App">
            <Header />
            <div className="content-wrapper">
                <Main />
            </div>
        </div>
    )
}

export default Index;