import {
    Routes, Route
} from 'react-router-dom';
import { Menu } from '../components/Menu';

export const DashboardRoutes = () => {
    return (
        <>
            
            <div>
                <Routes>
                    <Route path="/" element={<Menu />} />
                
                    {/* <Route path="/recibo" element={<Recibo />} /> */}
                </Routes>
            </div>

        </>
    )
}