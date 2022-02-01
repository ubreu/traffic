export enum PathSegment {
    DETAILS = 'details',
    OVERVIEW = 'overview'
}

export enum RouteParam {
    CATEGORY = 'category'
}

export const RoutesPath = {
    EMPTY: '/',
    DETAILS: `${PathSegment.DETAILS}/:${RouteParam.CATEGORY}`,
    OVERVIEW: `${PathSegment.OVERVIEW}`
}