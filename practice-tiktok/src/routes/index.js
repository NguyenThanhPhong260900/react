import { HeaderOnly } from '~/component/Layouts';
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Upload from '~/pages/Upload';

// khong can dang nhap van xem duoc
/*
    Luu y:  + layout == null thi se khong co layout
            + khong truyen layout thi se lay defaultlayout
            + truyen layout vao thi se lay layout do
*/
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

// can phai dang nhap moi vao xem duoc
const privateRoutes = [];

export { publicRoutes, privateRoutes };
