import {BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import routes from './routesConfig';

const RouteComponent = () =>{
    return(
        <Router>
            <Routes>
                {
                    routes.map( (route , index ) => (
                        <Route path={route.path} key={index} element={route.element}></Route>
                    ))
                }
            </Routes>
        </Router>
    )
}
export default RouteComponent