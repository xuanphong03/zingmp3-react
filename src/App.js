import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routesPublic } from '~/routes/';
import DefaultLayout from '~/layouts/DefaultLayout';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {routesPublic.map((route, index) => {
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <DefaultLayout>
                                        <Page />
                                    </DefaultLayout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
library.add(fab, fas, far);
