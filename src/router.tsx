import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "./layouts";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {}
        ]
    }
]);

export { router }