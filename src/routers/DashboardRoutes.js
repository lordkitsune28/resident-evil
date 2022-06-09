import {
    Routes, Route
} from 'react-router-dom';
import { Game } from '../components/Game';
import { Menu } from '../components/Menu';
import { Score } from '../components/Score';

export const DashboardRoutes = () => {
    return (
        <>
            
            <div>
                <Routes>
                    <Route path="/" element={<Menu />} />
                
                    <Route path="/score" element={<Score />} />
                    <Route path="/game" element={<Game />} />
                </Routes>
            </div>

        </>
    )
}