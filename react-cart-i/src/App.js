import Allroutes from "./Allroutes/Allroutes";
import Couponbar from "./Coupon/Coupon";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <>
        <Couponbar />
        <Navbar />
        <Allroutes />
        <Footer />
      </>
    </div>
  );
}
