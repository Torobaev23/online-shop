import React, {useEffect} from "react";
import AppRoutes from "./Routes/Routes.jsx";
import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";
import {useDispatch} from "react-redux";
import {getCategories} from "../features/categories/categoriesSlice";
import {getProducts} from "../features/products/productsSlice";
import UserForm from "./User/UserForm";

const App = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategories());
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <div className="app">
            <Header/>
            <UserForm/>
            <div className="container">
                <Sidebar/>
                <AppRoutes/>
            </div>
            <Footer/>
        </div>
    )
}

export default App
