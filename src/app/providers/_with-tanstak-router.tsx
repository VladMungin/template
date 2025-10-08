import {RouterProvider} from '@tanstack/react-router'
import {router} from "@/shared/config";

export const WithTanstakRouter = () => {
	return <RouterProvider router={router}/>
}
