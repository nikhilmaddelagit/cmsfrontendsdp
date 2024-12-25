
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Registration from './components/Registration';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Contact from './components/Contact';
import DeleteCerti from './components/DeleteCerti';
import AddCertificate from './components/AddCertificate';
import ViewAllCertificates from './components/ViewAllCertificates';
import ViewCertificate from './components/ViewCertificate';
import Settings from './components/Settings';
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';
import AdminNavbar from './admin/AdminNavbar';
import ViewAllUsers from './admin/ViewAllUsers';
import DeleteUser from './admin/DeleteUser';
import ViewAllCertificatesAdmin from './admin/ViewAllCertificatesAdmin';
import AboutUs from './components/AboutUs';
import NotFound from './components/NotFound';
import UpdateCertificate from './components/UpdateCertificate';
import ChangePassword from './components/ChangePassword';
import DeleteCertificatesAdmin from './admin/DeleteCertificatesAdmin';
import { ProtectedRoute } from './components/ProtectedRoute';
import Training from './curator/Training';
import UserForgotPassword from './components/UserForgotPassword';
import ResetPassword from './components/UserResetPassword';
import AdminSettings from './admin/AdminSettings';

function App() 
{


  return (
    <div>
  
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/registration' element={<Registration/>}></Route>
        <Route path='/login' element = {<Login/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/userforgotpwd' element={<UserForgotPassword/>}></Route>
        <Route path='/userresetpwd' element={<ResetPassword/>}></Route>
        <Route path='/settings' element={<Settings/>}></Route>


        <Route path='/training' element={<Training/>}></Route>
        
        <Route path='/add' element={<ProtectedRoute><AddCertificate/></ProtectedRoute>}></Route>
        <Route path='/viewall' element={<ProtectedRoute><ViewAllCertificates/></ProtectedRoute>}></Route>
        <Route path='/delete' element={<ProtectedRoute><DeleteCerti/></ProtectedRoute>}></Route>
        <Route path='/update' element={<ProtectedRoute><UpdateCertificate/></ProtectedRoute>}></Route>
        {/* <Route path="/certificates" element={<ViewAllCertificates />} /> */}
        <Route path="/certificate/:id" element={<ViewCertificate />} />
        <Route path='/adminsettings' element={<AdminSettings/>}/>
        <Route path='/changepassword' element={<ChangePassword/>}></Route>

        
        <Route path='/adminlogin' element={<AdminLogin/>}></Route>
        <Route path='/admindashboard' element={<AdminDashboard/>}></Route>
        <Route path='/adminnavbar' element={<AdminNavbar/>}></Route>
        <Route path='/viewallusers' element={<ViewAllUsers/>}></Route>
        <Route path='/admindeleteuser' element={<DeleteUser/>}></Route>
        <Route path='/adminviewcerti' element={<ViewAllCertificatesAdmin/>}></Route>
        <Route path='/admindeltecerti' element={<DeleteCertificatesAdmin/>}></Route>
        <Route path='/aboutus' element={<AboutUs/>}></Route>
        <Route path="*" element={<NotFound />} />




      </Routes>
       
    </div>
  )
}

export default App
