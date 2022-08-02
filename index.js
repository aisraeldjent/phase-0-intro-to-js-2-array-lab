var cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat () {
    cats.push("Ralph");
}

function destructivelyPrependCat () {
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat () {
    cats.pop()
}

function destructivelyRemoveFirstCat () {
    cats.shift()
}

function appendCat () {
    return cats.concat(["Broom"])
}
function prependCat () {
    return ["Arnold"].concat(cats.slice(0))
}
function removeLastCat () {
    return cats.slice(0,cats.length-1)
}
function removeFirstCat () {
    return cats.slice(1)
}