
import HomePages from "./pages/HomePages";
import Search from "./pages/Search";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Сomponents/Header";


function App() {
    return (

    <>
<Router>
        <Routes>
            <Route path="/" element={<HomePages/>} />
            <Route path="/search" element={<Search/>} />
        </Routes>
</Router>
    </>
    );


}

export default App;
