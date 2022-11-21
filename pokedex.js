const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./missigno.jpg")
        }
        else {
            return res.json();
        }
    }).then((data) =>{
        if (data){
            console.log(data);
            let pokeImg = data.sprites.front_default;
            let pokeInfo = data.abilities;
            pokeImage(pokeImg);
            pokeData(pokeInfo);
            console.log(pokeImg);
            console.log(pokeInfo);

        }

        
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImage");
    pokePhoto.src = url;
}

const pokeData = (abilities) => {
    const pokeAbilities = document.getElementById("abilities");
    const abilitiesName = abilities.map(item => item.ability.name);
    pokeAbilities.innerHTML = abilitiesName;
}