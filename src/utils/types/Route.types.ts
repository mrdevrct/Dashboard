import { ReactNode } from "react"

export type RouteType = {
    path: string,
    element : ReactNode
    children?: RoutesType
}

export type RoutesType= RouteType[] 