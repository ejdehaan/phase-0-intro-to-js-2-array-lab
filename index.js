
const cats = ["Milo", "Otis", "Garfield"]


function appendCat(name) {
    const copyOfCats = [
        ...cats,
        name,]
        return copyOfCats
}


function prependCat(name) {
    const copyOfCats2 = [
        name,
        ...cats,]
        return copyOfCats2
}
prependCat("Arnold")


function removeLastCat() {
    const copyOfCats3 = cats.slice(0,2)
    return copyOfCats3
}

function removeFirstCat() {
    const copyOfCats4 = cats.slice(1,3)
    return copyOfCats4
}


function destructivelyAppendCat(name) {
    cats.push(name)
}


destructivelyAppendCat("Ralph")
//console.log(cats);


function destructivelyPrependCat(name) {
    cats.unshift(name)
}


destructivelyPrependCat("Bob")
//console.log(cats);


function destructivelyRemoveLastCat() {
    cats.pop()
}
//console.log(cats);

function destructivelyRemoveFirstCat() {
    cats.shift()
}

