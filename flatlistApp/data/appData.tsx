type dataType = {
    id: string
    title: string
}

const DATA: dataType[] = [
    {id: '1', title: 'First'},
    {id: '2', title: 'Second'},
    {id: '3', title: 'Third'},
    {id: '4', title: 'Fourth'},
    {id: '5', title: 'Fifth'},
    {id: '6', title: 'Sixth'},
    {id: '7', title: 'Seventh'}
]

// export one or more files by not using default and 
// using curly braces around all items I am exporting 
export {dataType, DATA}