import { Outlet } from "react-router-dom";
import Footer from "../components/Footer"
import Header from "../components/Header"
import "../index.css"
import FetchItems from "../components/FetchItems";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  const fetchStatus =  useSelector(store => store.fetchStatus)

  return (
    <>
    <div>
      <Header />
      <FetchItems/>
     
      {fetchStatus.currentlyFetching ? <LoadingSpinner/> : <Outlet/>}
      
      <Footer />
      </div>
    </>

  )
}

export default App
