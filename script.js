async function getList() {
    const list_poke = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10000")
    return list_poke.json()
}

async function getPoke(url) {
    const poke = await fetch(url)
    return poke.json()

}


async function main() {
    list_poke = await getList()

    for (var i = 0; i <= 49; i++) {

        poke = await getPoke(list_poke.results[i].url)

        name_poke = list_poke.results[i].name;

        id_poke = poke.id
        
        img = poke.sprites.other.dream_world.front_default
        type_poke = poke.types.map(
            function(types) {
                return types.type.name
            }
        )
        
        hp_poke = poke.stats[0].base_stat
        const pokemon = `
        <div class="card" id="card">
            <img src="${img}" style="height:300px; width:300px">
            <h1>${id_poke}. ${name_poke}</h1>
            <h2> Type: ${type_poke} </h2>
            <h3> Hp: ${hp_poke} </h3>
        </div>'`
            document.getElementsByClassName("list_pokemon")[0].innerHTML += pokemon;

    }


}
main()

template = `

`



