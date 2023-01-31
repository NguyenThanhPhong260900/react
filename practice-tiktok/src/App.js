import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/component/Layouts';
import { Fragment } from 'react';

// import Home from './pages/Home';
// import Following from './pages/Following';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {/* Cau hinh truc tiep router trong app */}
                    {/* <Route path="/" element={<Home />} />
                    <Route path="/following" element={<Following />} /> */}

                    {/* dua routes ra ngoai va duoc lay qua cau hinh route ben ngoai */}
                    {publicRoutes.map((route, index) => {
                        // Fragment chi la the chua va khong sinh the that trong dom
                        const Page = route.component;

                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
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
