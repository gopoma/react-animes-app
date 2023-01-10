import {Routes, Route} from "react-router-dom";
import {Navbar} from "../../ui";
import {
    AnimePage, 
    BakiPage, 
    OPMPage, 
    SearchPage
} from "../pages";

export const AnimesRoutes = () => {
    return (
        <>
            <Navbar/>
            
            <Routes>
                <Route path="" element={<h1>AnimesPage</h1>}/>
                <Route path="baki" element={<BakiPage/>}/>
                <Route path="opm" element={<OPMPage/>}/>
                <Route path="search" element={<SearchPage/>}/>
                
                <Route path=":slug" element={<AnimePage/>}/>
            </Routes>
        </>
    );
};