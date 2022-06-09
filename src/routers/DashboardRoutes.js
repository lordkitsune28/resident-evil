import {
    Routes, Route
} from 'react-router-dom';
import { Game } from '../components/Game';
import { Menu } from '../components/Menu';
import { Round2 } from '../components/Round2';
import { Round3 } from '../components/Round3';
import { Round4 } from '../components/Round4';
import { Round5 } from '../components/Round5';
import { Score } from '../components/Score';

export const DashboardRoutes = () => {
    return (
        <>
            
            <div>
                <Routes>
                    <Route path="/" element={<Menu />} />
                
                    <Route path="/score" element={<Score />} />
                    <Route path="/game" element={<Game />} />
                    <Route path="/game1" element={<Round2 />} />
                    <Route path="/game2" element={<Round3 />} />
                    <Route path="/game3" element={<Round4 />} />
                    <Route path="/game4" element={<Round5 />} />
                </Routes>
            </div>

        </>
    )
}