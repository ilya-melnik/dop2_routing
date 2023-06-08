export const dataState: DataStateType = {
    pages: [
        {
            heading: " while",
            about: " цыкл whike имеет следующий цыкл:"
        },
        {
            heading: " for",
            about: " цыкл for имеет следующий цыкл:"
        },
        {
            heading: " switch",
            about: " конструкция switch имеет следующий цыкл:"
        },
    ]
}


export type DataStateType = {
    pages: Array<PagesType>
}
export type PagesType = {
    heading: string
    about: string
}
