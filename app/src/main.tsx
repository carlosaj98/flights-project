import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import GlobalCSS from "./utils/GlobalCSS"
import router from "./router"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <GlobalCSS />
    <RouterProvider router={router} />
  </>

)
