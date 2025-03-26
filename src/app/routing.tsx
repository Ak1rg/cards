import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../pages/MainPage/MainPage";
import { MainLayout } from "../shared/ui/MainLayout/MainLayout";
import { CreatePage } from "../pages/CreatePage/CreatePage";
import { DetailPage } from "../pages/DetailPage/DetailPage";

export const router = createBrowserRouter([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    index: true, 
                    element: <MainPage />,
                },
                {
                    path: "products",
                    element: <MainPage />,
                },
                {
                    path: "products/:name",
                    element: <DetailPage />,
                },
                {
                    path: "create",
                    element: <CreatePage />,
                },
            ],
        },
    ],
    { basename: "/cards" }
)