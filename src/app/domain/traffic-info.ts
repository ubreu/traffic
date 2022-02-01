export interface TrafficInfo {
    Errors: string[],
    TotalPages: number,
    TotalRows: number,
    PageSize: number,
    ReturnStatus: true,
    ReturnMessage: string[]
    Entity: Entity[]
}

export interface Entity {
    Id: string,
    Name: string
}

export enum Category {
    CONDITION = 'condition',
    ENV = 'env',
    PASS = 'pass'   
}