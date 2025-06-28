import domReady from '@wordpress/dom-ready';
import { createRoot  } from '@wordpress/element';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/route';
import Dashboard from './components/Dashboard';
import './Style/Navbar.scss';
import './Style/Block.scss';

domReady( () => {
    
    const adminEle = document.getElementById('bp-admin-Panel');    //admin-panel.php file thake asche
    const root = createRoot(adminEle);
    root.render( <RouterProvider router={router}><Dashboard/></RouterProvider>);
    
} );
