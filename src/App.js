import "./scss/app.scss"
import Header from "./components/Header";
import Home from "./pages/Home";
import {Route, Routes} from "react-router";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import {createContext, useState} from "react";

export const SearchContext = createContext()

function App() {

    const [searchValue, setSearchValue] = useState("")

    return (
        <div className="App">
            <div className="wrapper">
                <SearchContext.Provider value={{searchValue, setSearchValue}}>
                    <Header/>
                    <div className="content">
                        <div className="container">
                            <Routes>
                                <Route path="/" element={<Home />}/>
                                <Route path="*" element={<NotFound/>}/>
                                <Route path="/cart" element={<Cart/>}/>
                            </Routes>
                        </div>
                    </div>
                </SearchContext.Provider>
            </div>
        </div>
    );
}

export default App;
