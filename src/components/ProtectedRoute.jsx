import { Navigate } from "react-router-dom";

export const ProtectedRoute=({children})=>{
    const user=JSON.parse(localStorage.getItem('user'));
   
    const isAuthenticated = user !==null 
    
    
    
    return  isAuthenticated? (children ): (<Navigate to="/login"/>)
}