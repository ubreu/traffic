export interface TrafficInfo {
    Errors: string[],
    TotalPages: number,
    TotalRows: number,
    PageSize: number,
    ReturnStatus: true,
    ReturnMessage: string[]
    Entity: TrafficEntity[]
}

export interface TrafficEntity {
    Id: string,
    Name: string,
    Dic: TrafficEntityDetail
    Pos: Position
}

export interface TrafficEntityDetail {
    Description: string,
    RoadNo: string,
    LastUpdated: string
}

export interface Position {
    Lat: number,
    Lng: number
}

export enum Category {
    CONDITION = 'condition',
    ENV = 'env',
    PASS = 'pass'
}