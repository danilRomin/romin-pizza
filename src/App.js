import "./scss/app.scss"
import Header from "./components/Header";
import Home from "./pages/Home";
import {Route, Routes} from "react-router";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";


function App(props) {


    return (
        <div className="App">
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <div className="container">
                        <Routes>
                            <Route path="*" element={<NotFound/>}/>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/cart" element={<Cart/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
