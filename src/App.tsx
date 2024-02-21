import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";
import ProductManagement from "./pages/management/ProductManagement";
import TransactionManagement from "./pages/management/TransactionManagement";


const Dashboard = lazy(() => import("./pages/Dashboard"));
const Product = lazy(() => import("./pages/Product"));
const Transaction = lazy(() => import("./pages/Transaction"));
const Customer = lazy(() => import("./pages/Cutomer"));
const NewProduct = lazy(() => import("./pages/management/NewProduct"));
const BarCharts = lazy(() => import("./pages/charts/BarCharts"));
const LineCharts = lazy(() => import("./pages/charts/LineCharts"));
const PieCharts = lazy(() => import("./pages/charts/PieCharts"));
const Stopwatch= lazy(() => import("./pages/apps/Stopwatch"));
const Coupon = lazy(() => import("./pages/apps/Coupon"));
const Toss = lazy(() => import("./pages/apps/Toss"));

const App = () => {
  return (
    <>
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Link to="/admin/dashboard"><button>Visit Dashboard</button></Link>} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/product" element={<Product />} />
            <Route path="/admin/transaction" element={<Transaction />} />
            <Route path="/admin/customer" element={<Customer />} />

            {/* Charts */}
            <Route path="/admin/chart/bar" element={<BarCharts/>}/>
            <Route path="/admin/chart/pie" element={<PieCharts/>}/>
            <Route path="/admin/chart/line" element={<LineCharts/>}/>
            {/* Apps */}
            <Route path="/admin/app/stopwatch" element={<Stopwatch/>}/>
            <Route path="/admin/app/coupon" element={<Coupon/>}/>
            <Route path="/admin/app/toss" element={<Toss/>}/>

            {/* Manaagment */}
            <Route path="/admin/product/new" element={<NewProduct />} />
            <Route path="/admin/product/:id" element={<ProductManagement />} />
            <Route
              path="/admin/transaction/:id"
              element={<TransactionManagement />}
            />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
};

export default App;
