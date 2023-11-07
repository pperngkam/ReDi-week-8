const items = [
    {name: 'Bike',      price: 100},
    {name: 'TV',        price: 200},
    {name: 'Album',     price: 10},
    {name: 'Book',      price: 5},
    {name: 'Phone',     price: 500},
    {name: 'Computer',  price: 1000},
    {name: 'Keyboard',  price: 25}, 
]

const filteredItems = items.filter((item)=> {
    return item.price <= 100
})

console.log(items)
console.log(filteredItems)

/** */
const itemsN = [
    {name: 'Bike',      price: 100},
    {name: 'TV',        price: 200},
    {name: 'Album',     price: 10},
    {name: 'Book',      price: 5},
    {name: 'Phone',     price: 500},
    {name: 'Computer',  price: 1000},
    {name: 'Keyboard',  price: 25}, 
]

const itemNames = itemsN.map((item)=> {
    return item.name
})

console.log(itemNames)
/** */
const itemsNn = [
    {name: 'Bike',      price: 100},
    {name: 'TV',        price: 200},
    {name: 'Album',     price: 10},
    {name: 'Book',      price: 5},
    {name: 'Phone',     price: 500},
    {name: 'Computer',  price: 1000},
    {name: 'Keyboard',  price: 25}, 
]

const foundItem = itemsNn.find((item)=> {
    return item.name === 'Book'
})

console.log(foundItem)
/** */
const itemsNa = [
    {name: 'Bike',      price: 100},
    {name: 'TV',        price: 200},
    {name: 'Album',     price: 10},
    {name: 'Book',      price: 5},
    {name: 'Phone',     price: 500},
    {name: 'Computer',  price: 1000},
    {name: 'Keyboard',  price: 25}, 
]

items.forEach((item) => {
    console.log(item.name)
})
/** */
const itemsNu = [
    {name: 'Bike',      price: 100},
    {name: 'TV',        price: 200},
    {name: 'Album',     price: 10},
    {name: 'Book',      price: 5},
    {name: 'Phone',     price: 500},
    {name: 'Computer',  price: 1000},
    {name: 'Keyboard',  price: 25}, 
]

const hasInexpensiveItems = items.some((item) =>{
    return item.price <= 100
})

console.log(hasInexpensiveItems)

/** */
const temsNm = [
    {name: 'Bike',      price: 100},
    {name: 'TV',        price: 200},
    {name: 'Album',     price: 10},
    {name: 'Book',      price: 5},
    {name: 'Phone',     price: 500},
    {name: 'Computer',  price: 1000},
    {name: 'Keyboard',  price: 25}, 
]

const total = items.reduce ((currentTotal, item) =>{
    return item.price + currentTotal
}, 0)

console.log(total)

/** */
const itemsM = [1, 2, 3, 4, 5]
const includesTwo = items.includes(7)

console.log(includesTwo)

