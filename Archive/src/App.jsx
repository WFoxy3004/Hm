import { BrowserRouter, Route, Routes } from "react-router-dom"

import Header from "./Components/Header/Header"
import Products from "./Components/Products/Products"
import Users from "./Components/Users/Users"
import Basket from "./Components/Basket/Basket"
import SearchContainer from "./Components/Search/SearchContainer"

const App = () => { 
    return( 
        <BrowserRouter>
            <Header/>
            <SearchContainer/>
            <Routes>
                <Route
                    path="/" 
                    element={<Products/>}
                />
                <Route
                    path="/users"
                    element={<Users/>}
                />
                <Route
                    path="/basket"
                    element={<Basket/>}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default App