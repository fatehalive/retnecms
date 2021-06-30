import ToolBar from '../components/ToolBar';
import SideBar from '../components/SideBar';
import Main from '../components/Main';

function Index() {
    return (
        <div id="App">
            <ToolBar />
            <div className="content-wrapper">
                <SideBar />
                <Main />
            </div>
        </div>
    )
}

export default Index;