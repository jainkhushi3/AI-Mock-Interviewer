import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PublicLayout from "@/layouts/public-layout";
import AuthenticationLayout from "@/layouts/auth-layout";
import ProtectedRoutes from "./layouts/protected-routes";
import { MainLayout } from "./layouts/main-layout";


import HomePage from "@/routes/home";
import { SignInPage } from "@/routes/sign-in";
import { SignUpPage } from "@/routes/sign-up";

const App = () => {
	return (
		<Router>
            <Routes>
                {/* Public Routes */}
                <Route element={<PublicLayout />}> 
                    <Route index element={<HomePage />}/>
                </Route>
                {/* authentication layout */}
                <Route element={<AuthenticationLayout />}> 
                    <Route path="/signup/*" element={<SignUpPage />}/>
                    <Route path="/signin/*" element={<SignInPage />}/>
                </Route>
                {/* Protected Routes */}
                <Route element={<ProtectedRoutes><MainLayout/></ProtectedRoutes>}>
                
                {/* Add all the protected routes */}
                </Route>


            </Routes>
        </Router>
	);
};

export default App;
