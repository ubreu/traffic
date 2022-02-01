export enum PathSegment {
    ENTRIES = 'entries',
    OVERVIEW = 'overview'
}

export enum RouteParam {
    CATEGORY = 'category'
}

export const NavigationPath = {
    empty: () => '/',
    overview: () => `${PathSegment.OVERVIEW}`
}

export const RoutesPath = {
    EMPTY: '/',
    ENTRIES: `${PathSegment.ENTRIES}/:${RouteParam.CATEGORY}`,
    OVERVIEW: `${PathSegment.OVERVIEW}`
}