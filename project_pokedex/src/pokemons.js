// All default Pokemon species from PokeAPI; one primary type per card.
// Source: https://github.com/PokeAPI/pokeapi/tree/master/data/v2/csv
const pokemons = [
    {
        "id":  1,
        "name":  "Bulbasaur",
        "type":  "Grass",
        "hp":  45,
        "attack":  49
    },
    {
        "id":  2,
        "name":  "Ivysaur",
        "type":  "Grass",
        "hp":  60,
        "attack":  62
    },
    {
        "id":  3,
        "name":  "Venusaur",
        "type":  "Grass",
        "hp":  80,
        "attack":  82
    },
    {
        "id":  4,
        "name":  "Charmander",
        "type":  "Fire",
        "hp":  39,
        "attack":  52
    },
    {
        "id":  5,
        "name":  "Charmeleon",
        "type":  "Fire",
        "hp":  58,
        "attack":  64
    },
    {
        "id":  6,
        "name":  "Charizard",
        "type":  "Fire",
        "hp":  78,
        "attack":  84
    },
    {
        "id":  7,
        "name":  "Squirtle",
        "type":  "Water",
        "hp":  44,
        "attack":  48
    },
    {
        "id":  8,
        "name":  "Wartortle",
        "type":  "Water",
        "hp":  59,
        "attack":  63
    },
    {
        "id":  9,
        "name":  "Blastoise",
        "type":  "Water",
        "hp":  79,
        "attack":  83
    },
    {
        "id":  10,
        "name":  "Caterpie",
        "type":  "Bug",
        "hp":  45,
        "attack":  30
    },
    {
        "id":  11,
        "name":  "Metapod",
        "type":  "Bug",
        "hp":  50,
        "attack":  20
    },
    {
        "id":  12,
        "name":  "Butterfree",
        "type":  "Bug",
        "hp":  60,
        "attack":  45
    },
    {
        "id":  13,
        "name":  "Weedle",
        "type":  "Bug",
        "hp":  40,
        "attack":  35
    },
    {
        "id":  14,
        "name":  "Kakuna",
        "type":  "Bug",
        "hp":  45,
        "attack":  25
    },
    {
        "id":  15,
        "name":  "Beedrill",
        "type":  "Bug",
        "hp":  65,
        "attack":  90
    },
    {
        "id":  16,
        "name":  "Pidgey",
        "type":  "Normal",
        "hp":  40,
        "attack":  45
    },
    {
        "id":  17,
        "name":  "Pidgeotto",
        "type":  "Normal",
        "hp":  63,
        "attack":  60
    },
    {
        "id":  18,
        "name":  "Pidgeot",
        "type":  "Normal",
        "hp":  83,
        "attack":  80
    },
    {
        "id":  19,
        "name":  "Rattata",
        "type":  "Normal",
        "hp":  30,
        "attack":  56
    },
    {
        "id":  20,
        "name":  "Raticate",
        "type":  "Normal",
        "hp":  55,
        "attack":  81
    },
    {
        "id":  21,
        "name":  "Spearow",
        "type":  "Normal",
        "hp":  40,
        "attack":  60
    },
    {
        "id":  22,
        "name":  "Fearow",
        "type":  "Normal",
        "hp":  65,
        "attack":  90
    },
    {
        "id":  23,
        "name":  "Ekans",
        "type":  "Poison",
        "hp":  35,
        "attack":  60
    },
    {
        "id":  24,
        "name":  "Arbok",
        "type":  "Poison",
        "hp":  60,
        "attack":  95
    },
    {
        "id":  25,
        "name":  "Pikachu",
        "type":  "Electric",
        "hp":  35,
        "attack":  55
    },
    {
        "id":  26,
        "name":  "Raichu",
        "type":  "Electric",
        "hp":  60,
        "attack":  90
    },
    {
        "id":  27,
        "name":  "Sandshrew",
        "type":  "Ground",
        "hp":  50,
        "attack":  75
    },
    {
        "id":  28,
        "name":  "Sandslash",
        "type":  "Ground",
        "hp":  75,
        "attack":  100
    },
    {
        "id":  29,
        "name":  "Nidoran♀",
        "type":  "Poison",
        "hp":  55,
        "attack":  47
    },
    {
        "id":  30,
        "name":  "Nidorina",
        "type":  "Poison",
        "hp":  70,
        "attack":  62
    },
    {
        "id":  31,
        "name":  "Nidoqueen",
        "type":  "Poison",
        "hp":  90,
        "attack":  92
    },
    {
        "id":  32,
        "name":  "Nidoran♂",
        "type":  "Poison",
        "hp":  46,
        "attack":  57
    },
    {
        "id":  33,
        "name":  "Nidorino",
        "type":  "Poison",
        "hp":  61,
        "attack":  72
    },
    {
        "id":  34,
        "name":  "Nidoking",
        "type":  "Poison",
        "hp":  81,
        "attack":  102
    },
    {
        "id":  35,
        "name":  "Clefairy",
        "type":  "Fairy",
        "hp":  70,
        "attack":  45
    },
    {
        "id":  36,
        "name":  "Clefable",
        "type":  "Fairy",
        "hp":  95,
        "attack":  70
    },
    {
        "id":  37,
        "name":  "Vulpix",
        "type":  "Fire",
        "hp":  38,
        "attack":  41
    },
    {
        "id":  38,
        "name":  "Ninetales",
        "type":  "Fire",
        "hp":  73,
        "attack":  76
    },
    {
        "id":  39,
        "name":  "Jigglypuff",
        "type":  "Normal",
        "hp":  115,
        "attack":  45
    },
    {
        "id":  40,
        "name":  "Wigglytuff",
        "type":  "Normal",
        "hp":  140,
        "attack":  70
    },
    {
        "id":  41,
        "name":  "Zubat",
        "type":  "Poison",
        "hp":  40,
        "attack":  45
    },
    {
        "id":  42,
        "name":  "Golbat",
        "type":  "Poison",
        "hp":  75,
        "attack":  80
    },
    {
        "id":  43,
        "name":  "Oddish",
        "type":  "Grass",
        "hp":  45,
        "attack":  50
    },
    {
        "id":  44,
        "name":  "Gloom",
        "type":  "Grass",
        "hp":  60,
        "attack":  65
    },
    {
        "id":  45,
        "name":  "Vileplume",
        "type":  "Grass",
        "hp":  75,
        "attack":  80
    },
    {
        "id":  46,
        "name":  "Paras",
        "type":  "Bug",
        "hp":  35,
        "attack":  70
    },
    {
        "id":  47,
        "name":  "Parasect",
        "type":  "Bug",
        "hp":  60,
        "attack":  95
    },
    {
        "id":  48,
        "name":  "Venonat",
        "type":  "Bug",
        "hp":  60,
        "attack":  55
    },
    {
        "id":  49,
        "name":  "Venomoth",
        "type":  "Bug",
        "hp":  70,
        "attack":  65
    },
    {
        "id":  50,
        "name":  "Diglett",
        "type":  "Ground",
        "hp":  10,
        "attack":  55
    },
    {
        "id":  51,
        "name":  "Dugtrio",
        "type":  "Ground",
        "hp":  35,
        "attack":  100
    },
    {
        "id":  52,
        "name":  "Meowth",
        "type":  "Normal",
        "hp":  40,
        "attack":  45
    },
    {
        "id":  53,
        "name":  "Persian",
        "type":  "Normal",
        "hp":  65,
        "attack":  70
    },
    {
        "id":  54,
        "name":  "Psyduck",
        "type":  "Water",
        "hp":  50,
        "attack":  52
    },
    {
        "id":  55,
        "name":  "Golduck",
        "type":  "Water",
        "hp":  80,
        "attack":  82
    },
    {
        "id":  56,
        "name":  "Mankey",
        "type":  "Fighting",
        "hp":  40,
        "attack":  80
    },
    {
        "id":  57,
        "name":  "Primeape",
        "type":  "Fighting",
        "hp":  65,
        "attack":  105
    },
    {
        "id":  58,
        "name":  "Growlithe",
        "type":  "Fire",
        "hp":  55,
        "attack":  70
    },
    {
        "id":  59,
        "name":  "Arcanine",
        "type":  "Fire",
        "hp":  90,
        "attack":  110
    },
    {
        "id":  60,
        "name":  "Poliwag",
        "type":  "Water",
        "hp":  40,
        "attack":  50
    },
    {
        "id":  61,
        "name":  "Poliwhirl",
        "type":  "Water",
        "hp":  65,
        "attack":  65
    },
    {
        "id":  62,
        "name":  "Poliwrath",
        "type":  "Water",
        "hp":  90,
        "attack":  95
    },
    {
        "id":  63,
        "name":  "Abra",
        "type":  "Psychic",
        "hp":  25,
        "attack":  20
    },
    {
        "id":  64,
        "name":  "Kadabra",
        "type":  "Psychic",
        "hp":  40,
        "attack":  35
    },
    {
        "id":  65,
        "name":  "Alakazam",
        "type":  "Psychic",
        "hp":  55,
        "attack":  50
    },
    {
        "id":  66,
        "name":  "Machop",
        "type":  "Fighting",
        "hp":  70,
        "attack":  80
    },
    {
        "id":  67,
        "name":  "Machoke",
        "type":  "Fighting",
        "hp":  80,
        "attack":  100
    },
    {
        "id":  68,
        "name":  "Machamp",
        "type":  "Fighting",
        "hp":  90,
        "attack":  130
    },
    {
        "id":  69,
        "name":  "Bellsprout",
        "type":  "Grass",
        "hp":  50,
        "attack":  75
    },
    {
        "id":  70,
        "name":  "Weepinbell",
        "type":  "Grass",
        "hp":  65,
        "attack":  90
    },
    {
        "id":  71,
        "name":  "Victreebel",
        "type":  "Grass",
        "hp":  80,
        "attack":  105
    },
    {
        "id":  72,
        "name":  "Tentacool",
        "type":  "Water",
        "hp":  40,
        "attack":  40
    },
    {
        "id":  73,
        "name":  "Tentacruel",
        "type":  "Water",
        "hp":  80,
        "attack":  70
    },
    {
        "id":  74,
        "name":  "Geodude",
        "type":  "Rock",
        "hp":  40,
        "attack":  80
    },
    {
        "id":  75,
        "name":  "Graveler",
        "type":  "Rock",
        "hp":  55,
        "attack":  95
    },
    {
        "id":  76,
        "name":  "Golem",
        "type":  "Rock",
        "hp":  80,
        "attack":  120
    },
    {
        "id":  77,
        "name":  "Ponyta",
        "type":  "Fire",
        "hp":  50,
        "attack":  85
    },
    {
        "id":  78,
        "name":  "Rapidash",
        "type":  "Fire",
        "hp":  65,
        "attack":  100
    },
    {
        "id":  79,
        "name":  "Slowpoke",
        "type":  "Water",
        "hp":  90,
        "attack":  65
    },
    {
        "id":  80,
        "name":  "Slowbro",
        "type":  "Water",
        "hp":  95,
        "attack":  75
    },
    {
        "id":  81,
        "name":  "Magnemite",
        "type":  "Electric",
        "hp":  25,
        "attack":  35
    },
    {
        "id":  82,
        "name":  "Magneton",
        "type":  "Electric",
        "hp":  50,
        "attack":  60
    },
    {
        "id":  83,
        "name":  "Farfetch’d",
        "type":  "Normal",
        "hp":  52,
        "attack":  90
    },
    {
        "id":  84,
        "name":  "Doduo",
        "type":  "Normal",
        "hp":  35,
        "attack":  85
    },
    {
        "id":  85,
        "name":  "Dodrio",
        "type":  "Normal",
        "hp":  60,
        "attack":  110
    },
    {
        "id":  86,
        "name":  "Seel",
        "type":  "Water",
        "hp":  65,
        "attack":  45
    },
    {
        "id":  87,
        "name":  "Dewgong",
        "type":  "Water",
        "hp":  90,
        "attack":  70
    },
    {
        "id":  88,
        "name":  "Grimer",
        "type":  "Poison",
        "hp":  80,
        "attack":  80
    },
    {
        "id":  89,
        "name":  "Muk",
        "type":  "Poison",
        "hp":  105,
        "attack":  105
    },
    {
        "id":  90,
        "name":  "Shellder",
        "type":  "Water",
        "hp":  30,
        "attack":  65
    },
    {
        "id":  91,
        "name":  "Cloyster",
        "type":  "Water",
        "hp":  50,
        "attack":  95
    },
    {
        "id":  92,
        "name":  "Gastly",
        "type":  "Ghost",
        "hp":  30,
        "attack":  35
    },
    {
        "id":  93,
        "name":  "Haunter",
        "type":  "Ghost",
        "hp":  45,
        "attack":  50
    },
    {
        "id":  94,
        "name":  "Gengar",
        "type":  "Ghost",
        "hp":  60,
        "attack":  65
    },
    {
        "id":  95,
        "name":  "Onix",
        "type":  "Rock",
        "hp":  35,
        "attack":  45
    },
    {
        "id":  96,
        "name":  "Drowzee",
        "type":  "Psychic",
        "hp":  60,
        "attack":  48
    },
    {
        "id":  97,
        "name":  "Hypno",
        "type":  "Psychic",
        "hp":  85,
        "attack":  73
    },
    {
        "id":  98,
        "name":  "Krabby",
        "type":  "Water",
        "hp":  30,
        "attack":  105
    },
    {
        "id":  99,
        "name":  "Kingler",
        "type":  "Water",
        "hp":  55,
        "attack":  130
    },
    {
        "id":  100,
        "name":  "Voltorb",
        "type":  "Electric",
        "hp":  40,
        "attack":  30
    },
    {
        "id":  101,
        "name":  "Electrode",
        "type":  "Electric",
        "hp":  60,
        "attack":  50
    },
    {
        "id":  102,
        "name":  "Exeggcute",
        "type":  "Grass",
        "hp":  60,
        "attack":  40
    },
    {
        "id":  103,
        "name":  "Exeggutor",
        "type":  "Grass",
        "hp":  95,
        "attack":  95
    },
    {
        "id":  104,
        "name":  "Cubone",
        "type":  "Ground",
        "hp":  50,
        "attack":  50
    },
    {
        "id":  105,
        "name":  "Marowak",
        "type":  "Ground",
        "hp":  60,
        "attack":  80
    },
    {
        "id":  106,
        "name":  "Hitmonlee",
        "type":  "Fighting",
        "hp":  50,
        "attack":  120
    },
    {
        "id":  107,
        "name":  "Hitmonchan",
        "type":  "Fighting",
        "hp":  50,
        "attack":  105
    },
    {
        "id":  108,
        "name":  "Lickitung",
        "type":  "Normal",
        "hp":  90,
        "attack":  55
    },
    {
        "id":  109,
        "name":  "Koffing",
        "type":  "Poison",
        "hp":  40,
        "attack":  65
    },
    {
        "id":  110,
        "name":  "Weezing",
        "type":  "Poison",
        "hp":  65,
        "attack":  90
    },
    {
        "id":  111,
        "name":  "Rhyhorn",
        "type":  "Ground",
        "hp":  80,
        "attack":  85
    },
    {
        "id":  112,
        "name":  "Rhydon",
        "type":  "Ground",
        "hp":  105,
        "attack":  130
    },
    {
        "id":  113,
        "name":  "Chansey",
        "type":  "Normal",
        "hp":  250,
        "attack":  5
    },
    {
        "id":  114,
        "name":  "Tangela",
        "type":  "Grass",
        "hp":  65,
        "attack":  55
    },
    {
        "id":  115,
        "name":  "Kangaskhan",
        "type":  "Normal",
        "hp":  105,
        "attack":  95
    },
    {
        "id":  116,
        "name":  "Horsea",
        "type":  "Water",
        "hp":  30,
        "attack":  40
    },
    {
        "id":  117,
        "name":  "Seadra",
        "type":  "Water",
        "hp":  55,
        "attack":  65
    },
    {
        "id":  118,
        "name":  "Goldeen",
        "type":  "Water",
        "hp":  45,
        "attack":  67
    },
    {
        "id":  119,
        "name":  "Seaking",
        "type":  "Water",
        "hp":  80,
        "attack":  92
    },
    {
        "id":  120,
        "name":  "Staryu",
        "type":  "Water",
        "hp":  30,
        "attack":  45
    },
    {
        "id":  121,
        "name":  "Starmie",
        "type":  "Water",
        "hp":  60,
        "attack":  75
    },
    {
        "id":  122,
        "name":  "Mr. Mime",
        "type":  "Psychic",
        "hp":  40,
        "attack":  45
    },
    {
        "id":  123,
        "name":  "Scyther",
        "type":  "Bug",
        "hp":  70,
        "attack":  110
    },
    {
        "id":  124,
        "name":  "Jynx",
        "type":  "Ice",
        "hp":  65,
        "attack":  50
    },
    {
        "id":  125,
        "name":  "Electabuzz",
        "type":  "Electric",
        "hp":  65,
        "attack":  83
    },
    {
        "id":  126,
        "name":  "Magmar",
        "type":  "Fire",
        "hp":  65,
        "attack":  95
    },
    {
        "id":  127,
        "name":  "Pinsir",
        "type":  "Bug",
        "hp":  65,
        "attack":  125
    },
    {
        "id":  128,
        "name":  "Tauros",
        "type":  "Normal",
        "hp":  75,
        "attack":  100
    },
    {
        "id":  129,
        "name":  "Magikarp",
        "type":  "Water",
        "hp":  20,
        "attack":  10
    },
    {
        "id":  130,
        "name":  "Gyarados",
        "type":  "Water",
        "hp":  95,
        "attack":  125
    },
    {
        "id":  131,
        "name":  "Lapras",
        "type":  "Water",
        "hp":  130,
        "attack":  85
    },
    {
        "id":  132,
        "name":  "Ditto",
        "type":  "Normal",
        "hp":  48,
        "attack":  48
    },
    {
        "id":  133,
        "name":  "Eevee",
        "type":  "Normal",
        "hp":  55,
        "attack":  55
    },
    {
        "id":  134,
        "name":  "Vaporeon",
        "type":  "Water",
        "hp":  130,
        "attack":  65
    },
    {
        "id":  135,
        "name":  "Jolteon",
        "type":  "Electric",
        "hp":  65,
        "attack":  65
    },
    {
        "id":  136,
        "name":  "Flareon",
        "type":  "Fire",
        "hp":  65,
        "attack":  130
    },
    {
        "id":  137,
        "name":  "Porygon",
        "type":  "Normal",
        "hp":  65,
        "attack":  60
    },
    {
        "id":  138,
        "name":  "Omanyte",
        "type":  "Rock",
        "hp":  35,
        "attack":  40
    },
    {
        "id":  139,
        "name":  "Omastar",
        "type":  "Rock",
        "hp":  70,
        "attack":  60
    },
    {
        "id":  140,
        "name":  "Kabuto",
        "type":  "Rock",
        "hp":  30,
        "attack":  80
    },
    {
        "id":  141,
        "name":  "Kabutops",
        "type":  "Rock",
        "hp":  60,
        "attack":  115
    },
    {
        "id":  142,
        "name":  "Aerodactyl",
        "type":  "Rock",
        "hp":  80,
        "attack":  105
    },
    {
        "id":  143,
        "name":  "Snorlax",
        "type":  "Normal",
        "hp":  160,
        "attack":  110
    },
    {
        "id":  144,
        "name":  "Articuno",
        "type":  "Ice",
        "hp":  90,
        "attack":  85
    },
    {
        "id":  145,
        "name":  "Zapdos",
        "type":  "Electric",
        "hp":  90,
        "attack":  90
    },
    {
        "id":  146,
        "name":  "Moltres",
        "type":  "Fire",
        "hp":  90,
        "attack":  100
    },
    {
        "id":  147,
        "name":  "Dratini",
        "type":  "Dragon",
        "hp":  41,
        "attack":  64
    },
    {
        "id":  148,
        "name":  "Dragonair",
        "type":  "Dragon",
        "hp":  61,
        "attack":  84
    },
    {
        "id":  149,
        "name":  "Dragonite",
        "type":  "Dragon",
        "hp":  91,
        "attack":  134
    },
    {
        "id":  150,
        "name":  "Mewtwo",
        "type":  "Psychic",
        "hp":  106,
        "attack":  110
    },
    {
        "id":  151,
        "name":  "Mew",
        "type":  "Psychic",
        "hp":  100,
        "attack":  100
    },
    {
        "id":  152,
        "name":  "Chikorita",
        "type":  "Grass",
        "hp":  45,
        "attack":  49
    },
    {
        "id":  153,
        "name":  "Bayleef",
        "type":  "Grass",
        "hp":  60,
        "attack":  62
    },
    {
        "id":  154,
        "name":  "Meganium",
        "type":  "Grass",
        "hp":  80,
        "attack":  82
    },
    {
        "id":  155,
        "name":  "Cyndaquil",
        "type":  "Fire",
        "hp":  39,
        "attack":  52
    },
    {
        "id":  156,
        "name":  "Quilava",
        "type":  "Fire",
        "hp":  58,
        "attack":  64
    },
    {
        "id":  157,
        "name":  "Typhlosion",
        "type":  "Fire",
        "hp":  78,
        "attack":  84
    },
    {
        "id":  158,
        "name":  "Totodile",
        "type":  "Water",
        "hp":  50,
        "attack":  65
    },
    {
        "id":  159,
        "name":  "Croconaw",
        "type":  "Water",
        "hp":  65,
        "attack":  80
    },
    {
        "id":  160,
        "name":  "Feraligatr",
        "type":  "Water",
        "hp":  85,
        "attack":  105
    },
    {
        "id":  161,
        "name":  "Sentret",
        "type":  "Normal",
        "hp":  35,
        "attack":  46
    },
    {
        "id":  162,
        "name":  "Furret",
        "type":  "Normal",
        "hp":  85,
        "attack":  76
    },
    {
        "id":  163,
        "name":  "Hoothoot",
        "type":  "Normal",
        "hp":  60,
        "attack":  30
    },
    {
        "id":  164,
        "name":  "Noctowl",
        "type":  "Normal",
        "hp":  100,
        "attack":  50
    },
    {
        "id":  165,
        "name":  "Ledyba",
        "type":  "Bug",
        "hp":  40,
        "attack":  20
    },
    {
        "id":  166,
        "name":  "Ledian",
        "type":  "Bug",
        "hp":  55,
        "attack":  35
    },
    {
        "id":  167,
        "name":  "Spinarak",
        "type":  "Bug",
        "hp":  40,
        "attack":  60
    },
    {
        "id":  168,
        "name":  "Ariados",
        "type":  "Bug",
        "hp":  70,
        "attack":  90
    },
    {
        "id":  169,
        "name":  "Crobat",
        "type":  "Poison",
        "hp":  85,
        "attack":  90
    },
    {
        "id":  170,
        "name":  "Chinchou",
        "type":  "Water",
        "hp":  75,
        "attack":  38
    },
    {
        "id":  171,
        "name":  "Lanturn",
        "type":  "Water",
        "hp":  125,
        "attack":  58
    },
    {
        "id":  172,
        "name":  "Pichu",
        "type":  "Electric",
        "hp":  20,
        "attack":  40
    },
    {
        "id":  173,
        "name":  "Cleffa",
        "type":  "Fairy",
        "hp":  50,
        "attack":  25
    },
    {
        "id":  174,
        "name":  "Igglybuff",
        "type":  "Normal",
        "hp":  90,
        "attack":  30
    },
    {
        "id":  175,
        "name":  "Togepi",
        "type":  "Fairy",
        "hp":  35,
        "attack":  20
    },
    {
        "id":  176,
        "name":  "Togetic",
        "type":  "Fairy",
        "hp":  55,
        "attack":  40
    },
    {
        "id":  177,
        "name":  "Natu",
        "type":  "Psychic",
        "hp":  40,
        "attack":  50
    },
    {
        "id":  178,
        "name":  "Xatu",
        "type":  "Psychic",
        "hp":  65,
        "attack":  75
    },
    {
        "id":  179,
        "name":  "Mareep",
        "type":  "Electric",
        "hp":  55,
        "attack":  40
    },
    {
        "id":  180,
        "name":  "Flaaffy",
        "type":  "Electric",
        "hp":  70,
        "attack":  55
    },
    {
        "id":  181,
        "name":  "Ampharos",
        "type":  "Electric",
        "hp":  90,
        "attack":  75
    },
    {
        "id":  182,
        "name":  "Bellossom",
        "type":  "Grass",
        "hp":  75,
        "attack":  80
    },
    {
        "id":  183,
        "name":  "Marill",
        "type":  "Water",
        "hp":  70,
        "attack":  20
    },
    {
        "id":  184,
        "name":  "Azumarill",
        "type":  "Water",
        "hp":  100,
        "attack":  50
    },
    {
        "id":  185,
        "name":  "Sudowoodo",
        "type":  "Rock",
        "hp":  70,
        "attack":  100
    },
    {
        "id":  186,
        "name":  "Politoed",
        "type":  "Water",
        "hp":  90,
        "attack":  75
    },
    {
        "id":  187,
        "name":  "Hoppip",
        "type":  "Grass",
        "hp":  35,
        "attack":  35
    },
    {
        "id":  188,
        "name":  "Skiploom",
        "type":  "Grass",
        "hp":  55,
        "attack":  45
    },
    {
        "id":  189,
        "name":  "Jumpluff",
        "type":  "Grass",
        "hp":  75,
        "attack":  55
    },
    {
        "id":  190,
        "name":  "Aipom",
        "type":  "Normal",
        "hp":  55,
        "attack":  70
    },
    {
        "id":  191,
        "name":  "Sunkern",
        "type":  "Grass",
        "hp":  30,
        "attack":  30
    },
    {
        "id":  192,
        "name":  "Sunflora",
        "type":  "Grass",
        "hp":  75,
        "attack":  75
    },
    {
        "id":  193,
        "name":  "Yanma",
        "type":  "Bug",
        "hp":  65,
        "attack":  65
    },
    {
        "id":  194,
        "name":  "Wooper",
        "type":  "Water",
        "hp":  55,
        "attack":  45
    },
    {
        "id":  195,
        "name":  "Quagsire",
        "type":  "Water",
        "hp":  95,
        "attack":  85
    },
    {
        "id":  196,
        "name":  "Espeon",
        "type":  "Psychic",
        "hp":  65,
        "attack":  65
    },
    {
        "id":  197,
        "name":  "Umbreon",
        "type":  "Dark",
        "hp":  95,
        "attack":  65
    },
    {
        "id":  198,
        "name":  "Murkrow",
        "type":  "Dark",
        "hp":  60,
        "attack":  85
    },
    {
        "id":  199,
        "name":  "Slowking",
        "type":  "Water",
        "hp":  95,
        "attack":  75
    },
    {
        "id":  200,
        "name":  "Misdreavus",
        "type":  "Ghost",
        "hp":  60,
        "attack":  60
    },
    {
        "id":  201,
        "name":  "Unown",
        "type":  "Psychic",
        "hp":  48,
        "attack":  72
    },
    {
        "id":  202,
        "name":  "Wobbuffet",
        "type":  "Psychic",
        "hp":  190,
        "attack":  33
    },
    {
        "id":  203,
        "name":  "Girafarig",
        "type":  "Normal",
        "hp":  70,
        "attack":  80
    },
    {
        "id":  204,
        "name":  "Pineco",
        "type":  "Bug",
        "hp":  50,
        "attack":  65
    },
    {
        "id":  205,
        "name":  "Forretress",
        "type":  "Bug",
        "hp":  75,
        "attack":  90
    },
    {
        "id":  206,
        "name":  "Dunsparce",
        "type":  "Normal",
        "hp":  100,
        "attack":  70
    },
    {
        "id":  207,
        "name":  "Gligar",
        "type":  "Ground",
        "hp":  65,
        "attack":  75
    },
    {
        "id":  208,
        "name":  "Steelix",
        "type":  "Steel",
        "hp":  75,
        "attack":  85
    },
    {
        "id":  209,
        "name":  "Snubbull",
        "type":  "Fairy",
        "hp":  60,
        "attack":  80
    },
    {
        "id":  210,
        "name":  "Granbull",
        "type":  "Fairy",
        "hp":  90,
        "attack":  120
    },
    {
        "id":  211,
        "name":  "Qwilfish",
        "type":  "Water",
        "hp":  65,
        "attack":  95
    },
    {
        "id":  212,
        "name":  "Scizor",
        "type":  "Bug",
        "hp":  70,
        "attack":  130
    },
    {
        "id":  213,
        "name":  "Shuckle",
        "type":  "Bug",
        "hp":  20,
        "attack":  10
    },
    {
        "id":  214,
        "name":  "Heracross",
        "type":  "Bug",
        "hp":  80,
        "attack":  125
    },
    {
        "id":  215,
        "name":  "Sneasel",
        "type":  "Dark",
        "hp":  55,
        "attack":  95
    },
    {
        "id":  216,
        "name":  "Teddiursa",
        "type":  "Normal",
        "hp":  60,
        "attack":  80
    },
    {
        "id":  217,
        "name":  "Ursaring",
        "type":  "Normal",
        "hp":  90,
        "attack":  130
    },
    {
        "id":  218,
        "name":  "Slugma",
        "type":  "Fire",
        "hp":  40,
        "attack":  40
    },
    {
        "id":  219,
        "name":  "Magcargo",
        "type":  "Fire",
        "hp":  60,
        "attack":  50
    },
    {
        "id":  220,
        "name":  "Swinub",
        "type":  "Ice",
        "hp":  50,
        "attack":  50
    },
    {
        "id":  221,
        "name":  "Piloswine",
        "type":  "Ice",
        "hp":  100,
        "attack":  100
    },
    {
        "id":  222,
        "name":  "Corsola",
        "type":  "Water",
        "hp":  65,
        "attack":  55
    },
    {
        "id":  223,
        "name":  "Remoraid",
        "type":  "Water",
        "hp":  35,
        "attack":  65
    },
    {
        "id":  224,
        "name":  "Octillery",
        "type":  "Water",
        "hp":  75,
        "attack":  105
    },
    {
        "id":  225,
        "name":  "Delibird",
        "type":  "Ice",
        "hp":  45,
        "attack":  55
    },
    {
        "id":  226,
        "name":  "Mantine",
        "type":  "Water",
        "hp":  85,
        "attack":  40
    },
    {
        "id":  227,
        "name":  "Skarmory",
        "type":  "Steel",
        "hp":  65,
        "attack":  80
    },
    {
        "id":  228,
        "name":  "Houndour",
        "type":  "Dark",
        "hp":  45,
        "attack":  60
    },
    {
        "id":  229,
        "name":  "Houndoom",
        "type":  "Dark",
        "hp":  75,
        "attack":  90
    },
    {
        "id":  230,
        "name":  "Kingdra",
        "type":  "Water",
        "hp":  75,
        "attack":  95
    },
    {
        "id":  231,
        "name":  "Phanpy",
        "type":  "Ground",
        "hp":  90,
        "attack":  60
    },
    {
        "id":  232,
        "name":  "Donphan",
        "type":  "Ground",
        "hp":  90,
        "attack":  120
    },
    {
        "id":  233,
        "name":  "Porygon2",
        "type":  "Normal",
        "hp":  85,
        "attack":  80
    },
    {
        "id":  234,
        "name":  "Stantler",
        "type":  "Normal",
        "hp":  73,
        "attack":  95
    },
    {
        "id":  235,
        "name":  "Smeargle",
        "type":  "Normal",
        "hp":  55,
        "attack":  20
    },
    {
        "id":  236,
        "name":  "Tyrogue",
        "type":  "Fighting",
        "hp":  35,
        "attack":  35
    },
    {
        "id":  237,
        "name":  "Hitmontop",
        "type":  "Fighting",
        "hp":  50,
        "attack":  95
    },
    {
        "id":  238,
        "name":  "Smoochum",
        "type":  "Ice",
        "hp":  45,
        "attack":  30
    },
    {
        "id":  239,
        "name":  "Elekid",
        "type":  "Electric",
        "hp":  45,
        "attack":  63
    },
    {
        "id":  240,
        "name":  "Magby",
        "type":  "Fire",
        "hp":  45,
        "attack":  75
    },
    {
        "id":  241,
        "name":  "Miltank",
        "type":  "Normal",
        "hp":  95,
        "attack":  80
    },
    {
        "id":  242,
        "name":  "Blissey",
        "type":  "Normal",
        "hp":  255,
        "attack":  10
    },
    {
        "id":  243,
        "name":  "Raikou",
        "type":  "Electric",
        "hp":  90,
        "attack":  85
    },
    {
        "id":  244,
        "name":  "Entei",
        "type":  "Fire",
        "hp":  115,
        "attack":  115
    },
    {
        "id":  245,
        "name":  "Suicune",
        "type":  "Water",
        "hp":  100,
        "attack":  75
    },
    {
        "id":  246,
        "name":  "Larvitar",
        "type":  "Rock",
        "hp":  50,
        "attack":  64
    },
    {
        "id":  247,
        "name":  "Pupitar",
        "type":  "Rock",
        "hp":  70,
        "attack":  84
    },
    {
        "id":  248,
        "name":  "Tyranitar",
        "type":  "Rock",
        "hp":  100,
        "attack":  134
    },
    {
        "id":  249,
        "name":  "Lugia",
        "type":  "Psychic",
        "hp":  106,
        "attack":  90
    },
    {
        "id":  250,
        "name":  "Ho-Oh",
        "type":  "Fire",
        "hp":  106,
        "attack":  130
    },
    {
        "id":  251,
        "name":  "Celebi",
        "type":  "Psychic",
        "hp":  100,
        "attack":  100
    },
    {
        "id":  252,
        "name":  "Treecko",
        "type":  "Grass",
        "hp":  40,
        "attack":  45
    },
    {
        "id":  253,
        "name":  "Grovyle",
        "type":  "Grass",
        "hp":  50,
        "attack":  65
    },
    {
        "id":  254,
        "name":  "Sceptile",
        "type":  "Grass",
        "hp":  70,
        "attack":  85
    },
    {
        "id":  255,
        "name":  "Torchic",
        "type":  "Fire",
        "hp":  45,
        "attack":  60
    },
    {
        "id":  256,
        "name":  "Combusken",
        "type":  "Fire",
        "hp":  60,
        "attack":  85
    },
    {
        "id":  257,
        "name":  "Blaziken",
        "type":  "Fire",
        "hp":  80,
        "attack":  120
    },
    {
        "id":  258,
        "name":  "Mudkip",
        "type":  "Water",
        "hp":  50,
        "attack":  70
    },
    {
        "id":  259,
        "name":  "Marshtomp",
        "type":  "Water",
        "hp":  70,
        "attack":  85
    },
    {
        "id":  260,
        "name":  "Swampert",
        "type":  "Water",
        "hp":  100,
        "attack":  110
    },
    {
        "id":  261,
        "name":  "Poochyena",
        "type":  "Dark",
        "hp":  35,
        "attack":  55
    },
    {
        "id":  262,
        "name":  "Mightyena",
        "type":  "Dark",
        "hp":  70,
        "attack":  90
    },
    {
        "id":  263,
        "name":  "Zigzagoon",
        "type":  "Normal",
        "hp":  38,
        "attack":  30
    },
    {
        "id":  264,
        "name":  "Linoone",
        "type":  "Normal",
        "hp":  78,
        "attack":  70
    },
    {
        "id":  265,
        "name":  "Wurmple",
        "type":  "Bug",
        "hp":  45,
        "attack":  45
    },
    {
        "id":  266,
        "name":  "Silcoon",
        "type":  "Bug",
        "hp":  50,
        "attack":  35
    },
    {
        "id":  267,
        "name":  "Beautifly",
        "type":  "Bug",
        "hp":  60,
        "attack":  70
    },
    {
        "id":  268,
        "name":  "Cascoon",
        "type":  "Bug",
        "hp":  50,
        "attack":  35
    },
    {
        "id":  269,
        "name":  "Dustox",
        "type":  "Bug",
        "hp":  60,
        "attack":  50
    },
    {
        "id":  270,
        "name":  "Lotad",
        "type":  "Water",
        "hp":  40,
        "attack":  30
    },
    {
        "id":  271,
        "name":  "Lombre",
        "type":  "Water",
        "hp":  60,
        "attack":  50
    },
    {
        "id":  272,
        "name":  "Ludicolo",
        "type":  "Water",
        "hp":  80,
        "attack":  70
    },
    {
        "id":  273,
        "name":  "Seedot",
        "type":  "Grass",
        "hp":  40,
        "attack":  40
    },
    {
        "id":  274,
        "name":  "Nuzleaf",
        "type":  "Grass",
        "hp":  70,
        "attack":  70
    },
    {
        "id":  275,
        "name":  "Shiftry",
        "type":  "Grass",
        "hp":  90,
        "attack":  100
    },
    {
        "id":  276,
        "name":  "Taillow",
        "type":  "Normal",
        "hp":  40,
        "attack":  55
    },
    {
        "id":  277,
        "name":  "Swellow",
        "type":  "Normal",
        "hp":  60,
        "attack":  85
    },
    {
        "id":  278,
        "name":  "Wingull",
        "type":  "Water",
        "hp":  40,
        "attack":  30
    },
    {
        "id":  279,
        "name":  "Pelipper",
        "type":  "Water",
        "hp":  60,
        "attack":  50
    },
    {
        "id":  280,
        "name":  "Ralts",
        "type":  "Psychic",
        "hp":  28,
        "attack":  25
    },
    {
        "id":  281,
        "name":  "Kirlia",
        "type":  "Psychic",
        "hp":  38,
        "attack":  35
    },
    {
        "id":  282,
        "name":  "Gardevoir",
        "type":  "Psychic",
        "hp":  68,
        "attack":  65
    },
    {
        "id":  283,
        "name":  "Surskit",
        "type":  "Bug",
        "hp":  40,
        "attack":  30
    },
    {
        "id":  284,
        "name":  "Masquerain",
        "type":  "Bug",
        "hp":  70,
        "attack":  60
    },
    {
        "id":  285,
        "name":  "Shroomish",
        "type":  "Grass",
        "hp":  60,
        "attack":  40
    },
    {
        "id":  286,
        "name":  "Breloom",
        "type":  "Grass",
        "hp":  60,
        "attack":  130
    },
    {
        "id":  287,
        "name":  "Slakoth",
        "type":  "Normal",
        "hp":  60,
        "attack":  60
    },
    {
        "id":  288,
        "name":  "Vigoroth",
        "type":  "Normal",
        "hp":  80,
        "attack":  80
    },
    {
        "id":  289,
        "name":  "Slaking",
        "type":  "Normal",
        "hp":  150,
        "attack":  160
    },
    {
        "id":  290,
        "name":  "Nincada",
        "type":  "Bug",
        "hp":  31,
        "attack":  45
    },
    {
        "id":  291,
        "name":  "Ninjask",
        "type":  "Bug",
        "hp":  61,
        "attack":  90
    },
    {
        "id":  292,
        "name":  "Shedinja",
        "type":  "Bug",
        "hp":  1,
        "attack":  90
    },
    {
        "id":  293,
        "name":  "Whismur",
        "type":  "Normal",
        "hp":  64,
        "attack":  51
    },
    {
        "id":  294,
        "name":  "Loudred",
        "type":  "Normal",
        "hp":  84,
        "attack":  71
    },
    {
        "id":  295,
        "name":  "Exploud",
        "type":  "Normal",
        "hp":  104,
        "attack":  91
    },
    {
        "id":  296,
        "name":  "Makuhita",
        "type":  "Fighting",
        "hp":  72,
        "attack":  60
    },
    {
        "id":  297,
        "name":  "Hariyama",
        "type":  "Fighting",
        "hp":  144,
        "attack":  120
    },
    {
        "id":  298,
        "name":  "Azurill",
        "type":  "Normal",
        "hp":  50,
        "attack":  20
    },
    {
        "id":  299,
        "name":  "Nosepass",
        "type":  "Rock",
        "hp":  30,
        "attack":  45
    },
    {
        "id":  300,
        "name":  "Skitty",
        "type":  "Normal",
        "hp":  50,
        "attack":  45
    },
    {
        "id":  301,
        "name":  "Delcatty",
        "type":  "Normal",
        "hp":  70,
        "attack":  65
    },
    {
        "id":  302,
        "name":  "Sableye",
        "type":  "Dark",
        "hp":  50,
        "attack":  75
    },
    {
        "id":  303,
        "name":  "Mawile",
        "type":  "Steel",
        "hp":  50,
        "attack":  85
    },
    {
        "id":  304,
        "name":  "Aron",
        "type":  "Steel",
        "hp":  50,
        "attack":  70
    },
    {
        "id":  305,
        "name":  "Lairon",
        "type":  "Steel",
        "hp":  60,
        "attack":  90
    },
    {
        "id":  306,
        "name":  "Aggron",
        "type":  "Steel",
        "hp":  70,
        "attack":  110
    },
    {
        "id":  307,
        "name":  "Meditite",
        "type":  "Fighting",
        "hp":  30,
        "attack":  40
    },
    {
        "id":  308,
        "name":  "Medicham",
        "type":  "Fighting",
        "hp":  60,
        "attack":  60
    },
    {
        "id":  309,
        "name":  "Electrike",
        "type":  "Electric",
        "hp":  40,
        "attack":  45
    },
    {
        "id":  310,
        "name":  "Manectric",
        "type":  "Electric",
        "hp":  70,
        "attack":  75
    },
    {
        "id":  311,
        "name":  "Plusle",
        "type":  "Electric",
        "hp":  60,
        "attack":  50
    },
    {
        "id":  312,
        "name":  "Minun",
        "type":  "Electric",
        "hp":  60,
        "attack":  40
    },
    {
        "id":  313,
        "name":  "Volbeat",
        "type":  "Bug",
        "hp":  65,
        "attack":  73
    },
    {
        "id":  314,
        "name":  "Illumise",
        "type":  "Bug",
        "hp":  65,
        "attack":  47
    },
    {
        "id":  315,
        "name":  "Roselia",
        "type":  "Grass",
        "hp":  50,
        "attack":  60
    },
    {
        "id":  316,
        "name":  "Gulpin",
        "type":  "Poison",
        "hp":  70,
        "attack":  43
    },
    {
        "id":  317,
        "name":  "Swalot",
        "type":  "Poison",
        "hp":  100,
        "attack":  73
    },
    {
        "id":  318,
        "name":  "Carvanha",
        "type":  "Water",
        "hp":  45,
        "attack":  90
    },
    {
        "id":  319,
        "name":  "Sharpedo",
        "type":  "Water",
        "hp":  70,
        "attack":  120
    },
    {
        "id":  320,
        "name":  "Wailmer",
        "type":  "Water",
        "hp":  130,
        "attack":  70
    },
    {
        "id":  321,
        "name":  "Wailord",
        "type":  "Water",
        "hp":  170,
        "attack":  90
    },
    {
        "id":  322,
        "name":  "Numel",
        "type":  "Fire",
        "hp":  60,
        "attack":  60
    },
    {
        "id":  323,
        "name":  "Camerupt",
        "type":  "Fire",
        "hp":  70,
        "attack":  100
    },
    {
        "id":  324,
        "name":  "Torkoal",
        "type":  "Fire",
        "hp":  70,
        "attack":  85
    },
    {
        "id":  325,
        "name":  "Spoink",
        "type":  "Psychic",
        "hp":  60,
        "attack":  25
    },
    {
        "id":  326,
        "name":  "Grumpig",
        "type":  "Psychic",
        "hp":  80,
        "attack":  45
    },
    {
        "id":  327,
        "name":  "Spinda",
        "type":  "Normal",
        "hp":  60,
        "attack":  60
    },
    {
        "id":  328,
        "name":  "Trapinch",
        "type":  "Ground",
        "hp":  45,
        "attack":  100
    },
    {
        "id":  329,
        "name":  "Vibrava",
        "type":  "Ground",
        "hp":  50,
        "attack":  70
    },
    {
        "id":  330,
        "name":  "Flygon",
        "type":  "Ground",
        "hp":  80,
        "attack":  100
    },
    {
        "id":  331,
        "name":  "Cacnea",
        "type":  "Grass",
        "hp":  50,
        "attack":  85
    },
    {
        "id":  332,
        "name":  "Cacturne",
        "type":  "Grass",
        "hp":  70,
        "attack":  115
    },
    {
        "id":  333,
        "name":  "Swablu",
        "type":  "Normal",
        "hp":  45,
        "attack":  40
    },
    {
        "id":  334,
        "name":  "Altaria",
        "type":  "Dragon",
        "hp":  75,
        "attack":  70
    },
    {
        "id":  335,
        "name":  "Zangoose",
        "type":  "Normal",
        "hp":  73,
        "attack":  115
    },
    {
        "id":  336,
        "name":  "Seviper",
        "type":  "Poison",
        "hp":  73,
        "attack":  100
    },
    {
        "id":  337,
        "name":  "Lunatone",
        "type":  "Rock",
        "hp":  90,
        "attack":  55
    },
    {
        "id":  338,
        "name":  "Solrock",
        "type":  "Rock",
        "hp":  90,
        "attack":  95
    },
    {
        "id":  339,
        "name":  "Barboach",
        "type":  "Water",
        "hp":  50,
        "attack":  48
    },
    {
        "id":  340,
        "name":  "Whiscash",
        "type":  "Water",
        "hp":  110,
        "attack":  78
    },
    {
        "id":  341,
        "name":  "Corphish",
        "type":  "Water",
        "hp":  43,
        "attack":  80
    },
    {
        "id":  342,
        "name":  "Crawdaunt",
        "type":  "Water",
        "hp":  63,
        "attack":  120
    },
    {
        "id":  343,
        "name":  "Baltoy",
        "type":  "Ground",
        "hp":  40,
        "attack":  40
    },
    {
        "id":  344,
        "name":  "Claydol",
        "type":  "Ground",
        "hp":  60,
        "attack":  70
    },
    {
        "id":  345,
        "name":  "Lileep",
        "type":  "Rock",
        "hp":  66,
        "attack":  41
    },
    {
        "id":  346,
        "name":  "Cradily",
        "type":  "Rock",
        "hp":  86,
        "attack":  81
    },
    {
        "id":  347,
        "name":  "Anorith",
        "type":  "Rock",
        "hp":  45,
        "attack":  95
    },
    {
        "id":  348,
        "name":  "Armaldo",
        "type":  "Rock",
        "hp":  75,
        "attack":  125
    },
    {
        "id":  349,
        "name":  "Feebas",
        "type":  "Water",
        "hp":  20,
        "attack":  15
    },
    {
        "id":  350,
        "name":  "Milotic",
        "type":  "Water",
        "hp":  95,
        "attack":  60
    },
    {
        "id":  351,
        "name":  "Castform",
        "type":  "Normal",
        "hp":  70,
        "attack":  70
    },
    {
        "id":  352,
        "name":  "Kecleon",
        "type":  "Normal",
        "hp":  60,
        "attack":  90
    },
    {
        "id":  353,
        "name":  "Shuppet",
        "type":  "Ghost",
        "hp":  44,
        "attack":  75
    },
    {
        "id":  354,
        "name":  "Banette",
        "type":  "Ghost",
        "hp":  64,
        "attack":  115
    },
    {
        "id":  355,
        "name":  "Duskull",
        "type":  "Ghost",
        "hp":  20,
        "attack":  40
    },
    {
        "id":  356,
        "name":  "Dusclops",
        "type":  "Ghost",
        "hp":  40,
        "attack":  70
    },
    {
        "id":  357,
        "name":  "Tropius",
        "type":  "Grass",
        "hp":  99,
        "attack":  68
    },
    {
        "id":  358,
        "name":  "Chimecho",
        "type":  "Psychic",
        "hp":  75,
        "attack":  50
    },
    {
        "id":  359,
        "name":  "Absol",
        "type":  "Dark",
        "hp":  65,
        "attack":  130
    },
    {
        "id":  360,
        "name":  "Wynaut",
        "type":  "Psychic",
        "hp":  95,
        "attack":  23
    },
    {
        "id":  361,
        "name":  "Snorunt",
        "type":  "Ice",
        "hp":  50,
        "attack":  50
    },
    {
        "id":  362,
        "name":  "Glalie",
        "type":  "Ice",
        "hp":  80,
        "attack":  80
    },
    {
        "id":  363,
        "name":  "Spheal",
        "type":  "Ice",
        "hp":  70,
        "attack":  40
    },
    {
        "id":  364,
        "name":  "Sealeo",
        "type":  "Ice",
        "hp":  90,
        "attack":  60
    },
    {
        "id":  365,
        "name":  "Walrein",
        "type":  "Ice",
        "hp":  110,
        "attack":  80
    },
    {
        "id":  366,
        "name":  "Clamperl",
        "type":  "Water",
        "hp":  35,
        "attack":  64
    },
    {
        "id":  367,
        "name":  "Huntail",
        "type":  "Water",
        "hp":  55,
        "attack":  104
    },
    {
        "id":  368,
        "name":  "Gorebyss",
        "type":  "Water",
        "hp":  55,
        "attack":  84
    },
    {
        "id":  369,
        "name":  "Relicanth",
        "type":  "Water",
        "hp":  100,
        "attack":  90
    },
    {
        "id":  370,
        "name":  "Luvdisc",
        "type":  "Water",
        "hp":  43,
        "attack":  30
    },
    {
        "id":  371,
        "name":  "Bagon",
        "type":  "Dragon",
        "hp":  45,
        "attack":  75
    },
    {
        "id":  372,
        "name":  "Shelgon",
        "type":  "Dragon",
        "hp":  65,
        "attack":  95
    },
    {
        "id":  373,
        "name":  "Salamence",
        "type":  "Dragon",
        "hp":  95,
        "attack":  135
    },
    {
        "id":  374,
        "name":  "Beldum",
        "type":  "Steel",
        "hp":  40,
        "attack":  55
    },
    {
        "id":  375,
        "name":  "Metang",
        "type":  "Steel",
        "hp":  60,
        "attack":  75
    },
    {
        "id":  376,
        "name":  "Metagross",
        "type":  "Steel",
        "hp":  80,
        "attack":  135
    },
    {
        "id":  377,
        "name":  "Regirock",
        "type":  "Rock",
        "hp":  80,
        "attack":  100
    },
    {
        "id":  378,
        "name":  "Regice",
        "type":  "Ice",
        "hp":  80,
        "attack":  50
    },
    {
        "id":  379,
        "name":  "Registeel",
        "type":  "Steel",
        "hp":  80,
        "attack":  75
    },
    {
        "id":  380,
        "name":  "Latias",
        "type":  "Dragon",
        "hp":  80,
        "attack":  80
    },
    {
        "id":  381,
        "name":  "Latios",
        "type":  "Dragon",
        "hp":  80,
        "attack":  90
    },
    {
        "id":  382,
        "name":  "Kyogre",
        "type":  "Water",
        "hp":  100,
        "attack":  100
    },
    {
        "id":  383,
        "name":  "Groudon",
        "type":  "Ground",
        "hp":  100,
        "attack":  150
    },
    {
        "id":  384,
        "name":  "Rayquaza",
        "type":  "Dragon",
        "hp":  105,
        "attack":  150
    },
    {
        "id":  385,
        "name":  "Jirachi",
        "type":  "Steel",
        "hp":  100,
        "attack":  100
    },
    {
        "id":  386,
        "name":  "Deoxys",
        "type":  "Psychic",
        "hp":  50,
        "attack":  150
    },
    {
        "id":  387,
        "name":  "Turtwig",
        "type":  "Grass",
        "hp":  55,
        "attack":  68
    },
    {
        "id":  388,
        "name":  "Grotle",
        "type":  "Grass",
        "hp":  75,
        "attack":  89
    },
    {
        "id":  389,
        "name":  "Torterra",
        "type":  "Grass",
        "hp":  95,
        "attack":  109
    },
    {
        "id":  390,
        "name":  "Chimchar",
        "type":  "Fire",
        "hp":  44,
        "attack":  58
    },
    {
        "id":  391,
        "name":  "Monferno",
        "type":  "Fire",
        "hp":  64,
        "attack":  78
    },
    {
        "id":  392,
        "name":  "Infernape",
        "type":  "Fire",
        "hp":  76,
        "attack":  104
    },
    {
        "id":  393,
        "name":  "Piplup",
        "type":  "Water",
        "hp":  53,
        "attack":  51
    },
    {
        "id":  394,
        "name":  "Prinplup",
        "type":  "Water",
        "hp":  64,
        "attack":  66
    },
    {
        "id":  395,
        "name":  "Empoleon",
        "type":  "Water",
        "hp":  84,
        "attack":  86
    },
    {
        "id":  396,
        "name":  "Starly",
        "type":  "Normal",
        "hp":  40,
        "attack":  55
    },
    {
        "id":  397,
        "name":  "Staravia",
        "type":  "Normal",
        "hp":  55,
        "attack":  75
    },
    {
        "id":  398,
        "name":  "Staraptor",
        "type":  "Normal",
        "hp":  85,
        "attack":  120
    },
    {
        "id":  399,
        "name":  "Bidoof",
        "type":  "Normal",
        "hp":  59,
        "attack":  45
    },
    {
        "id":  400,
        "name":  "Bibarel",
        "type":  "Normal",
        "hp":  79,
        "attack":  85
    },
    {
        "id":  401,
        "name":  "Kricketot",
        "type":  "Bug",
        "hp":  37,
        "attack":  25
    },
    {
        "id":  402,
        "name":  "Kricketune",
        "type":  "Bug",
        "hp":  77,
        "attack":  85
    },
    {
        "id":  403,
        "name":  "Shinx",
        "type":  "Electric",
        "hp":  45,
        "attack":  65
    },
    {
        "id":  404,
        "name":  "Luxio",
        "type":  "Electric",
        "hp":  60,
        "attack":  85
    },
    {
        "id":  405,
        "name":  "Luxray",
        "type":  "Electric",
        "hp":  80,
        "attack":  120
    },
    {
        "id":  406,
        "name":  "Budew",
        "type":  "Grass",
        "hp":  40,
        "attack":  30
    },
    {
        "id":  407,
        "name":  "Roserade",
        "type":  "Grass",
        "hp":  60,
        "attack":  70
    },
    {
        "id":  408,
        "name":  "Cranidos",
        "type":  "Rock",
        "hp":  67,
        "attack":  125
    },
    {
        "id":  409,
        "name":  "Rampardos",
        "type":  "Rock",
        "hp":  97,
        "attack":  165
    },
    {
        "id":  410,
        "name":  "Shieldon",
        "type":  "Rock",
        "hp":  30,
        "attack":  42
    },
    {
        "id":  411,
        "name":  "Bastiodon",
        "type":  "Rock",
        "hp":  60,
        "attack":  52
    },
    {
        "id":  412,
        "name":  "Burmy",
        "type":  "Bug",
        "hp":  40,
        "attack":  29
    },
    {
        "id":  413,
        "name":  "Wormadam",
        "type":  "Bug",
        "hp":  60,
        "attack":  59
    },
    {
        "id":  414,
        "name":  "Mothim",
        "type":  "Bug",
        "hp":  70,
        "attack":  94
    },
    {
        "id":  415,
        "name":  "Combee",
        "type":  "Bug",
        "hp":  30,
        "attack":  30
    },
    {
        "id":  416,
        "name":  "Vespiquen",
        "type":  "Bug",
        "hp":  70,
        "attack":  80
    },
    {
        "id":  417,
        "name":  "Pachirisu",
        "type":  "Electric",
        "hp":  60,
        "attack":  45
    },
    {
        "id":  418,
        "name":  "Buizel",
        "type":  "Water",
        "hp":  55,
        "attack":  65
    },
    {
        "id":  419,
        "name":  "Floatzel",
        "type":  "Water",
        "hp":  85,
        "attack":  105
    },
    {
        "id":  420,
        "name":  "Cherubi",
        "type":  "Grass",
        "hp":  45,
        "attack":  35
    },
    {
        "id":  421,
        "name":  "Cherrim",
        "type":  "Grass",
        "hp":  70,
        "attack":  60
    },
    {
        "id":  422,
        "name":  "Shellos",
        "type":  "Water",
        "hp":  76,
        "attack":  48
    },
    {
        "id":  423,
        "name":  "Gastrodon",
        "type":  "Water",
        "hp":  111,
        "attack":  83
    },
    {
        "id":  424,
        "name":  "Ambipom",
        "type":  "Normal",
        "hp":  75,
        "attack":  100
    },
    {
        "id":  425,
        "name":  "Drifloon",
        "type":  "Ghost",
        "hp":  90,
        "attack":  50
    },
    {
        "id":  426,
        "name":  "Drifblim",
        "type":  "Ghost",
        "hp":  150,
        "attack":  80
    },
    {
        "id":  427,
        "name":  "Buneary",
        "type":  "Normal",
        "hp":  55,
        "attack":  66
    },
    {
        "id":  428,
        "name":  "Lopunny",
        "type":  "Normal",
        "hp":  65,
        "attack":  76
    },
    {
        "id":  429,
        "name":  "Mismagius",
        "type":  "Ghost",
        "hp":  60,
        "attack":  60
    },
    {
        "id":  430,
        "name":  "Honchkrow",
        "type":  "Dark",
        "hp":  100,
        "attack":  125
    },
    {
        "id":  431,
        "name":  "Glameow",
        "type":  "Normal",
        "hp":  49,
        "attack":  55
    },
    {
        "id":  432,
        "name":  "Purugly",
        "type":  "Normal",
        "hp":  71,
        "attack":  82
    },
    {
        "id":  433,
        "name":  "Chingling",
        "type":  "Psychic",
        "hp":  45,
        "attack":  30
    },
    {
        "id":  434,
        "name":  "Stunky",
        "type":  "Poison",
        "hp":  63,
        "attack":  63
    },
    {
        "id":  435,
        "name":  "Skuntank",
        "type":  "Poison",
        "hp":  103,
        "attack":  93
    },
    {
        "id":  436,
        "name":  "Bronzor",
        "type":  "Steel",
        "hp":  57,
        "attack":  24
    },
    {
        "id":  437,
        "name":  "Bronzong",
        "type":  "Steel",
        "hp":  67,
        "attack":  89
    },
    {
        "id":  438,
        "name":  "Bonsly",
        "type":  "Rock",
        "hp":  50,
        "attack":  80
    },
    {
        "id":  439,
        "name":  "Mime Jr.",
        "type":  "Psychic",
        "hp":  20,
        "attack":  25
    },
    {
        "id":  440,
        "name":  "Happiny",
        "type":  "Normal",
        "hp":  100,
        "attack":  5
    },
    {
        "id":  441,
        "name":  "Chatot",
        "type":  "Normal",
        "hp":  76,
        "attack":  65
    },
    {
        "id":  442,
        "name":  "Spiritomb",
        "type":  "Ghost",
        "hp":  50,
        "attack":  92
    },
    {
        "id":  443,
        "name":  "Gible",
        "type":  "Dragon",
        "hp":  58,
        "attack":  70
    },
    {
        "id":  444,
        "name":  "Gabite",
        "type":  "Dragon",
        "hp":  68,
        "attack":  90
    },
    {
        "id":  445,
        "name":  "Garchomp",
        "type":  "Dragon",
        "hp":  108,
        "attack":  130
    },
    {
        "id":  446,
        "name":  "Munchlax",
        "type":  "Normal",
        "hp":  135,
        "attack":  85
    },
    {
        "id":  447,
        "name":  "Riolu",
        "type":  "Fighting",
        "hp":  40,
        "attack":  70
    },
    {
        "id":  448,
        "name":  "Lucario",
        "type":  "Fighting",
        "hp":  70,
        "attack":  110
    },
    {
        "id":  449,
        "name":  "Hippopotas",
        "type":  "Ground",
        "hp":  68,
        "attack":  72
    },
    {
        "id":  450,
        "name":  "Hippowdon",
        "type":  "Ground",
        "hp":  108,
        "attack":  112
    },
    {
        "id":  451,
        "name":  "Skorupi",
        "type":  "Poison",
        "hp":  40,
        "attack":  50
    },
    {
        "id":  452,
        "name":  "Drapion",
        "type":  "Poison",
        "hp":  70,
        "attack":  90
    },
    {
        "id":  453,
        "name":  "Croagunk",
        "type":  "Poison",
        "hp":  48,
        "attack":  61
    },
    {
        "id":  454,
        "name":  "Toxicroak",
        "type":  "Poison",
        "hp":  83,
        "attack":  106
    },
    {
        "id":  455,
        "name":  "Carnivine",
        "type":  "Grass",
        "hp":  74,
        "attack":  100
    },
    {
        "id":  456,
        "name":  "Finneon",
        "type":  "Water",
        "hp":  49,
        "attack":  49
    },
    {
        "id":  457,
        "name":  "Lumineon",
        "type":  "Water",
        "hp":  69,
        "attack":  69
    },
    {
        "id":  458,
        "name":  "Mantyke",
        "type":  "Water",
        "hp":  45,
        "attack":  20
    },
    {
        "id":  459,
        "name":  "Snover",
        "type":  "Grass",
        "hp":  60,
        "attack":  62
    },
    {
        "id":  460,
        "name":  "Abomasnow",
        "type":  "Grass",
        "hp":  90,
        "attack":  92
    },
    {
        "id":  461,
        "name":  "Weavile",
        "type":  "Dark",
        "hp":  70,
        "attack":  120
    },
    {
        "id":  462,
        "name":  "Magnezone",
        "type":  "Electric",
        "hp":  70,
        "attack":  70
    },
    {
        "id":  463,
        "name":  "Lickilicky",
        "type":  "Normal",
        "hp":  110,
        "attack":  85
    },
    {
        "id":  464,
        "name":  "Rhyperior",
        "type":  "Ground",
        "hp":  115,
        "attack":  140
    },
    {
        "id":  465,
        "name":  "Tangrowth",
        "type":  "Grass",
        "hp":  100,
        "attack":  100
    },
    {
        "id":  466,
        "name":  "Electivire",
        "type":  "Electric",
        "hp":  75,
        "attack":  123
    },
    {
        "id":  467,
        "name":  "Magmortar",
        "type":  "Fire",
        "hp":  75,
        "attack":  95
    },
    {
        "id":  468,
        "name":  "Togekiss",
        "type":  "Fairy",
        "hp":  85,
        "attack":  50
    },
    {
        "id":  469,
        "name":  "Yanmega",
        "type":  "Bug",
        "hp":  86,
        "attack":  76
    },
    {
        "id":  470,
        "name":  "Leafeon",
        "type":  "Grass",
        "hp":  65,
        "attack":  110
    },
    {
        "id":  471,
        "name":  "Glaceon",
        "type":  "Ice",
        "hp":  65,
        "attack":  60
    },
    {
        "id":  472,
        "name":  "Gliscor",
        "type":  "Ground",
        "hp":  75,
        "attack":  95
    },
    {
        "id":  473,
        "name":  "Mamoswine",
        "type":  "Ice",
        "hp":  110,
        "attack":  130
    },
    {
        "id":  474,
        "name":  "Porygon-Z",
        "type":  "Normal",
        "hp":  85,
        "attack":  80
    },
    {
        "id":  475,
        "name":  "Gallade",
        "type":  "Psychic",
        "hp":  68,
        "attack":  125
    },
    {
        "id":  476,
        "name":  "Probopass",
        "type":  "Rock",
        "hp":  60,
        "attack":  55
    },
    {
        "id":  477,
        "name":  "Dusknoir",
        "type":  "Ghost",
        "hp":  45,
        "attack":  100
    },
    {
        "id":  478,
        "name":  "Froslass",
        "type":  "Ice",
        "hp":  70,
        "attack":  80
    },
    {
        "id":  479,
        "name":  "Rotom",
        "type":  "Electric",
        "hp":  50,
        "attack":  50
    },
    {
        "id":  480,
        "name":  "Uxie",
        "type":  "Psychic",
        "hp":  75,
        "attack":  75
    },
    {
        "id":  481,
        "name":  "Mesprit",
        "type":  "Psychic",
        "hp":  80,
        "attack":  105
    },
    {
        "id":  482,
        "name":  "Azelf",
        "type":  "Psychic",
        "hp":  75,
        "attack":  125
    },
    {
        "id":  483,
        "name":  "Dialga",
        "type":  "Steel",
        "hp":  100,
        "attack":  120
    },
    {
        "id":  484,
        "name":  "Palkia",
        "type":  "Water",
        "hp":  90,
        "attack":  120
    },
    {
        "id":  485,
        "name":  "Heatran",
        "type":  "Fire",
        "hp":  91,
        "attack":  90
    },
    {
        "id":  486,
        "name":  "Regigigas",
        "type":  "Normal",
        "hp":  110,
        "attack":  160
    },
    {
        "id":  487,
        "name":  "Giratina",
        "type":  "Ghost",
        "hp":  150,
        "attack":  100
    },
    {
        "id":  488,
        "name":  "Cresselia",
        "type":  "Psychic",
        "hp":  120,
        "attack":  70
    },
    {
        "id":  489,
        "name":  "Phione",
        "type":  "Water",
        "hp":  80,
        "attack":  80
    },
    {
        "id":  490,
        "name":  "Manaphy",
        "type":  "Water",
        "hp":  100,
        "attack":  100
    },
    {
        "id":  491,
        "name":  "Darkrai",
        "type":  "Dark",
        "hp":  70,
        "attack":  90
    },
    {
        "id":  492,
        "name":  "Shaymin",
        "type":  "Grass",
        "hp":  100,
        "attack":  100
    },
    {
        "id":  493,
        "name":  "Arceus",
        "type":  "Normal",
        "hp":  120,
        "attack":  120
    },
    {
        "id":  494,
        "name":  "Victini",
        "type":  "Psychic",
        "hp":  100,
        "attack":  100
    },
    {
        "id":  495,
        "name":  "Snivy",
        "type":  "Grass",
        "hp":  45,
        "attack":  45
    },
    {
        "id":  496,
        "name":  "Servine",
        "type":  "Grass",
        "hp":  60,
        "attack":  60
    },
    {
        "id":  497,
        "name":  "Serperior",
        "type":  "Grass",
        "hp":  75,
        "attack":  75
    },
    {
        "id":  498,
        "name":  "Tepig",
        "type":  "Fire",
        "hp":  65,
        "attack":  63
    },
    {
        "id":  499,
        "name":  "Pignite",
        "type":  "Fire",
        "hp":  90,
        "attack":  93
    },
    {
        "id":  500,
        "name":  "Emboar",
        "type":  "Fire",
        "hp":  110,
        "attack":  123
    },
    {
        "id":  501,
        "name":  "Oshawott",
        "type":  "Water",
        "hp":  55,
        "attack":  55
    },
    {
        "id":  502,
        "name":  "Dewott",
        "type":  "Water",
        "hp":  75,
        "attack":  75
    },
    {
        "id":  503,
        "name":  "Samurott",
        "type":  "Water",
        "hp":  95,
        "attack":  100
    },
    {
        "id":  504,
        "name":  "Patrat",
        "type":  "Normal",
        "hp":  45,
        "attack":  55
    },
    {
        "id":  505,
        "name":  "Watchog",
        "type":  "Normal",
        "hp":  60,
        "attack":  85
    },
    {
        "id":  506,
        "name":  "Lillipup",
        "type":  "Normal",
        "hp":  45,
        "attack":  60
    },
    {
        "id":  507,
        "name":  "Herdier",
        "type":  "Normal",
        "hp":  65,
        "attack":  80
    },
    {
        "id":  508,
        "name":  "Stoutland",
        "type":  "Normal",
        "hp":  85,
        "attack":  110
    },
    {
        "id":  509,
        "name":  "Purrloin",
        "type":  "Dark",
        "hp":  41,
        "attack":  50
    },
    {
        "id":  510,
        "name":  "Liepard",
        "type":  "Dark",
        "hp":  64,
        "attack":  88
    },
    {
        "id":  511,
        "name":  "Pansage",
        "type":  "Grass",
        "hp":  50,
        "attack":  53
    },
    {
        "id":  512,
        "name":  "Simisage",
        "type":  "Grass",
        "hp":  75,
        "attack":  98
    },
    {
        "id":  513,
        "name":  "Pansear",
        "type":  "Fire",
        "hp":  50,
        "attack":  53
    },
    {
        "id":  514,
        "name":  "Simisear",
        "type":  "Fire",
        "hp":  75,
        "attack":  98
    },
    {
        "id":  515,
        "name":  "Panpour",
        "type":  "Water",
        "hp":  50,
        "attack":  53
    },
    {
        "id":  516,
        "name":  "Simipour",
        "type":  "Water",
        "hp":  75,
        "attack":  98
    },
    {
        "id":  517,
        "name":  "Munna",
        "type":  "Psychic",
        "hp":  76,
        "attack":  25
    },
    {
        "id":  518,
        "name":  "Musharna",
        "type":  "Psychic",
        "hp":  116,
        "attack":  55
    },
    {
        "id":  519,
        "name":  "Pidove",
        "type":  "Normal",
        "hp":  50,
        "attack":  55
    },
    {
        "id":  520,
        "name":  "Tranquill",
        "type":  "Normal",
        "hp":  62,
        "attack":  77
    },
    {
        "id":  521,
        "name":  "Unfezant",
        "type":  "Normal",
        "hp":  80,
        "attack":  115
    },
    {
        "id":  522,
        "name":  "Blitzle",
        "type":  "Electric",
        "hp":  45,
        "attack":  60
    },
    {
        "id":  523,
        "name":  "Zebstrika",
        "type":  "Electric",
        "hp":  75,
        "attack":  100
    },
    {
        "id":  524,
        "name":  "Roggenrola",
        "type":  "Rock",
        "hp":  55,
        "attack":  75
    },
    {
        "id":  525,
        "name":  "Boldore",
        "type":  "Rock",
        "hp":  70,
        "attack":  105
    },
    {
        "id":  526,
        "name":  "Gigalith",
        "type":  "Rock",
        "hp":  85,
        "attack":  135
    },
    {
        "id":  527,
        "name":  "Woobat",
        "type":  "Psychic",
        "hp":  65,
        "attack":  45
    },
    {
        "id":  528,
        "name":  "Swoobat",
        "type":  "Psychic",
        "hp":  67,
        "attack":  57
    },
    {
        "id":  529,
        "name":  "Drilbur",
        "type":  "Ground",
        "hp":  60,
        "attack":  85
    },
    {
        "id":  530,
        "name":  "Excadrill",
        "type":  "Ground",
        "hp":  110,
        "attack":  135
    },
    {
        "id":  531,
        "name":  "Audino",
        "type":  "Normal",
        "hp":  103,
        "attack":  60
    },
    {
        "id":  532,
        "name":  "Timburr",
        "type":  "Fighting",
        "hp":  75,
        "attack":  80
    },
    {
        "id":  533,
        "name":  "Gurdurr",
        "type":  "Fighting",
        "hp":  85,
        "attack":  105
    },
    {
        "id":  534,
        "name":  "Conkeldurr",
        "type":  "Fighting",
        "hp":  105,
        "attack":  140
    },
    {
        "id":  535,
        "name":  "Tympole",
        "type":  "Water",
        "hp":  50,
        "attack":  50
    },
    {
        "id":  536,
        "name":  "Palpitoad",
        "type":  "Water",
        "hp":  75,
        "attack":  65
    },
    {
        "id":  537,
        "name":  "Seismitoad",
        "type":  "Water",
        "hp":  105,
        "attack":  95
    },
    {
        "id":  538,
        "name":  "Throh",
        "type":  "Fighting",
        "hp":  120,
        "attack":  100
    },
    {
        "id":  539,
        "name":  "Sawk",
        "type":  "Fighting",
        "hp":  75,
        "attack":  125
    },
    {
        "id":  540,
        "name":  "Sewaddle",
        "type":  "Bug",
        "hp":  45,
        "attack":  53
    },
    {
        "id":  541,
        "name":  "Swadloon",
        "type":  "Bug",
        "hp":  55,
        "attack":  63
    },
    {
        "id":  542,
        "name":  "Leavanny",
        "type":  "Bug",
        "hp":  75,
        "attack":  103
    },
    {
        "id":  543,
        "name":  "Venipede",
        "type":  "Bug",
        "hp":  30,
        "attack":  45
    },
    {
        "id":  544,
        "name":  "Whirlipede",
        "type":  "Bug",
        "hp":  40,
        "attack":  55
    },
    {
        "id":  545,
        "name":  "Scolipede",
        "type":  "Bug",
        "hp":  60,
        "attack":  100
    },
    {
        "id":  546,
        "name":  "Cottonee",
        "type":  "Grass",
        "hp":  40,
        "attack":  27
    },
    {
        "id":  547,
        "name":  "Whimsicott",
        "type":  "Grass",
        "hp":  60,
        "attack":  67
    },
    {
        "id":  548,
        "name":  "Petilil",
        "type":  "Grass",
        "hp":  45,
        "attack":  35
    },
    {
        "id":  549,
        "name":  "Lilligant",
        "type":  "Grass",
        "hp":  70,
        "attack":  60
    },
    {
        "id":  550,
        "name":  "Basculin",
        "type":  "Water",
        "hp":  70,
        "attack":  92
    },
    {
        "id":  551,
        "name":  "Sandile",
        "type":  "Ground",
        "hp":  50,
        "attack":  72
    },
    {
        "id":  552,
        "name":  "Krokorok",
        "type":  "Ground",
        "hp":  60,
        "attack":  82
    },
    {
        "id":  553,
        "name":  "Krookodile",
        "type":  "Ground",
        "hp":  95,
        "attack":  117
    },
    {
        "id":  554,
        "name":  "Darumaka",
        "type":  "Fire",
        "hp":  70,
        "attack":  90
    },
    {
        "id":  555,
        "name":  "Darmanitan",
        "type":  "Fire",
        "hp":  105,
        "attack":  140
    },
    {
        "id":  556,
        "name":  "Maractus",
        "type":  "Grass",
        "hp":  75,
        "attack":  86
    },
    {
        "id":  557,
        "name":  "Dwebble",
        "type":  "Bug",
        "hp":  50,
        "attack":  65
    },
    {
        "id":  558,
        "name":  "Crustle",
        "type":  "Bug",
        "hp":  70,
        "attack":  105
    },
    {
        "id":  559,
        "name":  "Scraggy",
        "type":  "Dark",
        "hp":  50,
        "attack":  75
    },
    {
        "id":  560,
        "name":  "Scrafty",
        "type":  "Dark",
        "hp":  65,
        "attack":  90
    },
    {
        "id":  561,
        "name":  "Sigilyph",
        "type":  "Psychic",
        "hp":  72,
        "attack":  58
    },
    {
        "id":  562,
        "name":  "Yamask",
        "type":  "Ghost",
        "hp":  38,
        "attack":  30
    },
    {
        "id":  563,
        "name":  "Cofagrigus",
        "type":  "Ghost",
        "hp":  58,
        "attack":  50
    },
    {
        "id":  564,
        "name":  "Tirtouga",
        "type":  "Water",
        "hp":  54,
        "attack":  78
    },
    {
        "id":  565,
        "name":  "Carracosta",
        "type":  "Water",
        "hp":  74,
        "attack":  108
    },
    {
        "id":  566,
        "name":  "Archen",
        "type":  "Rock",
        "hp":  55,
        "attack":  112
    },
    {
        "id":  567,
        "name":  "Archeops",
        "type":  "Rock",
        "hp":  75,
        "attack":  140
    },
    {
        "id":  568,
        "name":  "Trubbish",
        "type":  "Poison",
        "hp":  50,
        "attack":  50
    },
    {
        "id":  569,
        "name":  "Garbodor",
        "type":  "Poison",
        "hp":  80,
        "attack":  95
    },
    {
        "id":  570,
        "name":  "Zorua",
        "type":  "Dark",
        "hp":  40,
        "attack":  65
    },
    {
        "id":  571,
        "name":  "Zoroark",
        "type":  "Dark",
        "hp":  60,
        "attack":  105
    },
    {
        "id":  572,
        "name":  "Minccino",
        "type":  "Normal",
        "hp":  55,
        "attack":  50
    },
    {
        "id":  573,
        "name":  "Cinccino",
        "type":  "Normal",
        "hp":  75,
        "attack":  95
    },
    {
        "id":  574,
        "name":  "Gothita",
        "type":  "Psychic",
        "hp":  45,
        "attack":  30
    },
    {
        "id":  575,
        "name":  "Gothorita",
        "type":  "Psychic",
        "hp":  60,
        "attack":  45
    },
    {
        "id":  576,
        "name":  "Gothitelle",
        "type":  "Psychic",
        "hp":  70,
        "attack":  55
    },
    {
        "id":  577,
        "name":  "Solosis",
        "type":  "Psychic",
        "hp":  45,
        "attack":  30
    },
    {
        "id":  578,
        "name":  "Duosion",
        "type":  "Psychic",
        "hp":  65,
        "attack":  40
    },
    {
        "id":  579,
        "name":  "Reuniclus",
        "type":  "Psychic",
        "hp":  110,
        "attack":  65
    },
    {
        "id":  580,
        "name":  "Ducklett",
        "type":  "Water",
        "hp":  62,
        "attack":  44
    },
    {
        "id":  581,
        "name":  "Swanna",
        "type":  "Water",
        "hp":  75,
        "attack":  87
    },
    {
        "id":  582,
        "name":  "Vanillite",
        "type":  "Ice",
        "hp":  36,
        "attack":  50
    },
    {
        "id":  583,
        "name":  "Vanillish",
        "type":  "Ice",
        "hp":  51,
        "attack":  65
    },
    {
        "id":  584,
        "name":  "Vanilluxe",
        "type":  "Ice",
        "hp":  71,
        "attack":  95
    },
    {
        "id":  585,
        "name":  "Deerling",
        "type":  "Normal",
        "hp":  60,
        "attack":  60
    },
    {
        "id":  586,
        "name":  "Sawsbuck",
        "type":  "Normal",
        "hp":  80,
        "attack":  100
    },
    {
        "id":  587,
        "name":  "Emolga",
        "type":  "Electric",
        "hp":  55,
        "attack":  75
    },
    {
        "id":  588,
        "name":  "Karrablast",
        "type":  "Bug",
        "hp":  50,
        "attack":  75
    },
    {
        "id":  589,
        "name":  "Escavalier",
        "type":  "Bug",
        "hp":  70,
        "attack":  135
    },
    {
        "id":  590,
        "name":  "Foongus",
        "type":  "Grass",
        "hp":  69,
        "attack":  55
    },
    {
        "id":  591,
        "name":  "Amoonguss",
        "type":  "Grass",
        "hp":  114,
        "attack":  85
    },
    {
        "id":  592,
        "name":  "Frillish",
        "type":  "Water",
        "hp":  55,
        "attack":  40
    },
    {
        "id":  593,
        "name":  "Jellicent",
        "type":  "Water",
        "hp":  100,
        "attack":  60
    },
    {
        "id":  594,
        "name":  "Alomomola",
        "type":  "Water",
        "hp":  165,
        "attack":  75
    },
    {
        "id":  595,
        "name":  "Joltik",
        "type":  "Bug",
        "hp":  50,
        "attack":  47
    },
    {
        "id":  596,
        "name":  "Galvantula",
        "type":  "Bug",
        "hp":  70,
        "attack":  77
    },
    {
        "id":  597,
        "name":  "Ferroseed",
        "type":  "Grass",
        "hp":  44,
        "attack":  50
    },
    {
        "id":  598,
        "name":  "Ferrothorn",
        "type":  "Grass",
        "hp":  74,
        "attack":  94
    },
    {
        "id":  599,
        "name":  "Klink",
        "type":  "Steel",
        "hp":  40,
        "attack":  55
    },
    {
        "id":  600,
        "name":  "Klang",
        "type":  "Steel",
        "hp":  60,
        "attack":  80
    },
    {
        "id":  601,
        "name":  "Klinklang",
        "type":  "Steel",
        "hp":  60,
        "attack":  100
    },
    {
        "id":  602,
        "name":  "Tynamo",
        "type":  "Electric",
        "hp":  35,
        "attack":  55
    },
    {
        "id":  603,
        "name":  "Eelektrik",
        "type":  "Electric",
        "hp":  65,
        "attack":  85
    },
    {
        "id":  604,
        "name":  "Eelektross",
        "type":  "Electric",
        "hp":  85,
        "attack":  115
    },
    {
        "id":  605,
        "name":  "Elgyem",
        "type":  "Psychic",
        "hp":  55,
        "attack":  55
    },
    {
        "id":  606,
        "name":  "Beheeyem",
        "type":  "Psychic",
        "hp":  75,
        "attack":  75
    },
    {
        "id":  607,
        "name":  "Litwick",
        "type":  "Ghost",
        "hp":  50,
        "attack":  30
    },
    {
        "id":  608,
        "name":  "Lampent",
        "type":  "Ghost",
        "hp":  60,
        "attack":  40
    },
    {
        "id":  609,
        "name":  "Chandelure",
        "type":  "Ghost",
        "hp":  60,
        "attack":  55
    },
    {
        "id":  610,
        "name":  "Axew",
        "type":  "Dragon",
        "hp":  46,
        "attack":  87
    },
    {
        "id":  611,
        "name":  "Fraxure",
        "type":  "Dragon",
        "hp":  66,
        "attack":  117
    },
    {
        "id":  612,
        "name":  "Haxorus",
        "type":  "Dragon",
        "hp":  76,
        "attack":  147
    },
    {
        "id":  613,
        "name":  "Cubchoo",
        "type":  "Ice",
        "hp":  55,
        "attack":  70
    },
    {
        "id":  614,
        "name":  "Beartic",
        "type":  "Ice",
        "hp":  95,
        "attack":  130
    },
    {
        "id":  615,
        "name":  "Cryogonal",
        "type":  "Ice",
        "hp":  80,
        "attack":  50
    },
    {
        "id":  616,
        "name":  "Shelmet",
        "type":  "Bug",
        "hp":  50,
        "attack":  40
    },
    {
        "id":  617,
        "name":  "Accelgor",
        "type":  "Bug",
        "hp":  80,
        "attack":  70
    },
    {
        "id":  618,
        "name":  "Stunfisk",
        "type":  "Ground",
        "hp":  109,
        "attack":  66
    },
    {
        "id":  619,
        "name":  "Mienfoo",
        "type":  "Fighting",
        "hp":  45,
        "attack":  85
    },
    {
        "id":  620,
        "name":  "Mienshao",
        "type":  "Fighting",
        "hp":  65,
        "attack":  125
    },
    {
        "id":  621,
        "name":  "Druddigon",
        "type":  "Dragon",
        "hp":  77,
        "attack":  120
    },
    {
        "id":  622,
        "name":  "Golett",
        "type":  "Ground",
        "hp":  59,
        "attack":  74
    },
    {
        "id":  623,
        "name":  "Golurk",
        "type":  "Ground",
        "hp":  89,
        "attack":  124
    },
    {
        "id":  624,
        "name":  "Pawniard",
        "type":  "Dark",
        "hp":  45,
        "attack":  85
    },
    {
        "id":  625,
        "name":  "Bisharp",
        "type":  "Dark",
        "hp":  65,
        "attack":  125
    },
    {
        "id":  626,
        "name":  "Bouffalant",
        "type":  "Normal",
        "hp":  95,
        "attack":  110
    },
    {
        "id":  627,
        "name":  "Rufflet",
        "type":  "Normal",
        "hp":  70,
        "attack":  83
    },
    {
        "id":  628,
        "name":  "Braviary",
        "type":  "Normal",
        "hp":  100,
        "attack":  123
    },
    {
        "id":  629,
        "name":  "Vullaby",
        "type":  "Dark",
        "hp":  70,
        "attack":  55
    },
    {
        "id":  630,
        "name":  "Mandibuzz",
        "type":  "Dark",
        "hp":  110,
        "attack":  65
    },
    {
        "id":  631,
        "name":  "Heatmor",
        "type":  "Fire",
        "hp":  85,
        "attack":  97
    },
    {
        "id":  632,
        "name":  "Durant",
        "type":  "Bug",
        "hp":  58,
        "attack":  109
    },
    {
        "id":  633,
        "name":  "Deino",
        "type":  "Dark",
        "hp":  52,
        "attack":  65
    },
    {
        "id":  634,
        "name":  "Zweilous",
        "type":  "Dark",
        "hp":  72,
        "attack":  85
    },
    {
        "id":  635,
        "name":  "Hydreigon",
        "type":  "Dark",
        "hp":  92,
        "attack":  105
    },
    {
        "id":  636,
        "name":  "Larvesta",
        "type":  "Bug",
        "hp":  55,
        "attack":  85
    },
    {
        "id":  637,
        "name":  "Volcarona",
        "type":  "Bug",
        "hp":  85,
        "attack":  60
    },
    {
        "id":  638,
        "name":  "Cobalion",
        "type":  "Steel",
        "hp":  91,
        "attack":  90
    },
    {
        "id":  639,
        "name":  "Terrakion",
        "type":  "Rock",
        "hp":  91,
        "attack":  129
    },
    {
        "id":  640,
        "name":  "Virizion",
        "type":  "Grass",
        "hp":  91,
        "attack":  90
    },
    {
        "id":  641,
        "name":  "Tornadus",
        "type":  "Flying",
        "hp":  79,
        "attack":  115
    },
    {
        "id":  642,
        "name":  "Thundurus",
        "type":  "Electric",
        "hp":  79,
        "attack":  115
    },
    {
        "id":  643,
        "name":  "Reshiram",
        "type":  "Dragon",
        "hp":  100,
        "attack":  120
    },
    {
        "id":  644,
        "name":  "Zekrom",
        "type":  "Dragon",
        "hp":  100,
        "attack":  150
    },
    {
        "id":  645,
        "name":  "Landorus",
        "type":  "Ground",
        "hp":  89,
        "attack":  125
    },
    {
        "id":  646,
        "name":  "Kyurem",
        "type":  "Dragon",
        "hp":  125,
        "attack":  130
    },
    {
        "id":  647,
        "name":  "Keldeo",
        "type":  "Water",
        "hp":  91,
        "attack":  72
    },
    {
        "id":  648,
        "name":  "Meloetta",
        "type":  "Normal",
        "hp":  100,
        "attack":  77
    },
    {
        "id":  649,
        "name":  "Genesect",
        "type":  "Bug",
        "hp":  71,
        "attack":  120
    },
    {
        "id":  650,
        "name":  "Chespin",
        "type":  "Grass",
        "hp":  56,
        "attack":  61
    },
    {
        "id":  651,
        "name":  "Quilladin",
        "type":  "Grass",
        "hp":  61,
        "attack":  78
    },
    {
        "id":  652,
        "name":  "Chesnaught",
        "type":  "Grass",
        "hp":  88,
        "attack":  107
    },
    {
        "id":  653,
        "name":  "Fennekin",
        "type":  "Fire",
        "hp":  40,
        "attack":  45
    },
    {
        "id":  654,
        "name":  "Braixen",
        "type":  "Fire",
        "hp":  59,
        "attack":  59
    },
    {
        "id":  655,
        "name":  "Delphox",
        "type":  "Fire",
        "hp":  75,
        "attack":  69
    },
    {
        "id":  656,
        "name":  "Froakie",
        "type":  "Water",
        "hp":  41,
        "attack":  56
    },
    {
        "id":  657,
        "name":  "Frogadier",
        "type":  "Water",
        "hp":  54,
        "attack":  63
    },
    {
        "id":  658,
        "name":  "Greninja",
        "type":  "Water",
        "hp":  72,
        "attack":  95
    },
    {
        "id":  659,
        "name":  "Bunnelby",
        "type":  "Normal",
        "hp":  38,
        "attack":  36
    },
    {
        "id":  660,
        "name":  "Diggersby",
        "type":  "Normal",
        "hp":  85,
        "attack":  56
    },
    {
        "id":  661,
        "name":  "Fletchling",
        "type":  "Normal",
        "hp":  45,
        "attack":  50
    },
    {
        "id":  662,
        "name":  "Fletchinder",
        "type":  "Fire",
        "hp":  62,
        "attack":  73
    },
    {
        "id":  663,
        "name":  "Talonflame",
        "type":  "Fire",
        "hp":  78,
        "attack":  81
    },
    {
        "id":  664,
        "name":  "Scatterbug",
        "type":  "Bug",
        "hp":  38,
        "attack":  35
    },
    {
        "id":  665,
        "name":  "Spewpa",
        "type":  "Bug",
        "hp":  45,
        "attack":  22
    },
    {
        "id":  666,
        "name":  "Vivillon",
        "type":  "Bug",
        "hp":  80,
        "attack":  52
    },
    {
        "id":  667,
        "name":  "Litleo",
        "type":  "Fire",
        "hp":  62,
        "attack":  50
    },
    {
        "id":  668,
        "name":  "Pyroar",
        "type":  "Fire",
        "hp":  86,
        "attack":  68
    },
    {
        "id":  669,
        "name":  "Flabébé",
        "type":  "Fairy",
        "hp":  44,
        "attack":  38
    },
    {
        "id":  670,
        "name":  "Floette",
        "type":  "Fairy",
        "hp":  54,
        "attack":  45
    },
    {
        "id":  671,
        "name":  "Florges",
        "type":  "Fairy",
        "hp":  78,
        "attack":  65
    },
    {
        "id":  672,
        "name":  "Skiddo",
        "type":  "Grass",
        "hp":  66,
        "attack":  65
    },
    {
        "id":  673,
        "name":  "Gogoat",
        "type":  "Grass",
        "hp":  123,
        "attack":  100
    },
    {
        "id":  674,
        "name":  "Pancham",
        "type":  "Fighting",
        "hp":  67,
        "attack":  82
    },
    {
        "id":  675,
        "name":  "Pangoro",
        "type":  "Fighting",
        "hp":  95,
        "attack":  124
    },
    {
        "id":  676,
        "name":  "Furfrou",
        "type":  "Normal",
        "hp":  75,
        "attack":  80
    },
    {
        "id":  677,
        "name":  "Espurr",
        "type":  "Psychic",
        "hp":  62,
        "attack":  48
    },
    {
        "id":  678,
        "name":  "Meowstic",
        "type":  "Psychic",
        "hp":  74,
        "attack":  48
    },
    {
        "id":  679,
        "name":  "Honedge",
        "type":  "Steel",
        "hp":  45,
        "attack":  80
    },
    {
        "id":  680,
        "name":  "Doublade",
        "type":  "Steel",
        "hp":  59,
        "attack":  110
    },
    {
        "id":  681,
        "name":  "Aegislash",
        "type":  "Steel",
        "hp":  60,
        "attack":  50
    },
    {
        "id":  682,
        "name":  "Spritzee",
        "type":  "Fairy",
        "hp":  78,
        "attack":  52
    },
    {
        "id":  683,
        "name":  "Aromatisse",
        "type":  "Fairy",
        "hp":  101,
        "attack":  72
    },
    {
        "id":  684,
        "name":  "Swirlix",
        "type":  "Fairy",
        "hp":  62,
        "attack":  48
    },
    {
        "id":  685,
        "name":  "Slurpuff",
        "type":  "Fairy",
        "hp":  82,
        "attack":  80
    },
    {
        "id":  686,
        "name":  "Inkay",
        "type":  "Dark",
        "hp":  53,
        "attack":  54
    },
    {
        "id":  687,
        "name":  "Malamar",
        "type":  "Dark",
        "hp":  86,
        "attack":  92
    },
    {
        "id":  688,
        "name":  "Binacle",
        "type":  "Rock",
        "hp":  42,
        "attack":  52
    },
    {
        "id":  689,
        "name":  "Barbaracle",
        "type":  "Rock",
        "hp":  72,
        "attack":  105
    },
    {
        "id":  690,
        "name":  "Skrelp",
        "type":  "Poison",
        "hp":  50,
        "attack":  60
    },
    {
        "id":  691,
        "name":  "Dragalge",
        "type":  "Poison",
        "hp":  65,
        "attack":  75
    },
    {
        "id":  692,
        "name":  "Clauncher",
        "type":  "Water",
        "hp":  50,
        "attack":  53
    },
    {
        "id":  693,
        "name":  "Clawitzer",
        "type":  "Water",
        "hp":  71,
        "attack":  73
    },
    {
        "id":  694,
        "name":  "Helioptile",
        "type":  "Electric",
        "hp":  44,
        "attack":  38
    },
    {
        "id":  695,
        "name":  "Heliolisk",
        "type":  "Electric",
        "hp":  62,
        "attack":  55
    },
    {
        "id":  696,
        "name":  "Tyrunt",
        "type":  "Rock",
        "hp":  58,
        "attack":  89
    },
    {
        "id":  697,
        "name":  "Tyrantrum",
        "type":  "Rock",
        "hp":  82,
        "attack":  121
    },
    {
        "id":  698,
        "name":  "Amaura",
        "type":  "Rock",
        "hp":  77,
        "attack":  59
    },
    {
        "id":  699,
        "name":  "Aurorus",
        "type":  "Rock",
        "hp":  123,
        "attack":  77
    },
    {
        "id":  700,
        "name":  "Sylveon",
        "type":  "Fairy",
        "hp":  95,
        "attack":  65
    },
    {
        "id":  701,
        "name":  "Hawlucha",
        "type":  "Fighting",
        "hp":  78,
        "attack":  92
    },
    {
        "id":  702,
        "name":  "Dedenne",
        "type":  "Electric",
        "hp":  67,
        "attack":  58
    },
    {
        "id":  703,
        "name":  "Carbink",
        "type":  "Rock",
        "hp":  50,
        "attack":  50
    },
    {
        "id":  704,
        "name":  "Goomy",
        "type":  "Dragon",
        "hp":  45,
        "attack":  50
    },
    {
        "id":  705,
        "name":  "Sliggoo",
        "type":  "Dragon",
        "hp":  68,
        "attack":  75
    },
    {
        "id":  706,
        "name":  "Goodra",
        "type":  "Dragon",
        "hp":  90,
        "attack":  100
    },
    {
        "id":  707,
        "name":  "Klefki",
        "type":  "Steel",
        "hp":  57,
        "attack":  80
    },
    {
        "id":  708,
        "name":  "Phantump",
        "type":  "Ghost",
        "hp":  43,
        "attack":  70
    },
    {
        "id":  709,
        "name":  "Trevenant",
        "type":  "Ghost",
        "hp":  85,
        "attack":  110
    },
    {
        "id":  710,
        "name":  "Pumpkaboo",
        "type":  "Ghost",
        "hp":  49,
        "attack":  66
    },
    {
        "id":  711,
        "name":  "Gourgeist",
        "type":  "Ghost",
        "hp":  65,
        "attack":  90
    },
    {
        "id":  712,
        "name":  "Bergmite",
        "type":  "Ice",
        "hp":  55,
        "attack":  69
    },
    {
        "id":  713,
        "name":  "Avalugg",
        "type":  "Ice",
        "hp":  95,
        "attack":  117
    },
    {
        "id":  714,
        "name":  "Noibat",
        "type":  "Flying",
        "hp":  40,
        "attack":  30
    },
    {
        "id":  715,
        "name":  "Noivern",
        "type":  "Flying",
        "hp":  85,
        "attack":  70
    },
    {
        "id":  716,
        "name":  "Xerneas",
        "type":  "Fairy",
        "hp":  126,
        "attack":  131
    },
    {
        "id":  717,
        "name":  "Yveltal",
        "type":  "Dark",
        "hp":  126,
        "attack":  131
    },
    {
        "id":  718,
        "name":  "Zygarde",
        "type":  "Dragon",
        "hp":  108,
        "attack":  100
    },
    {
        "id":  719,
        "name":  "Diancie",
        "type":  "Rock",
        "hp":  50,
        "attack":  100
    },
    {
        "id":  720,
        "name":  "Hoopa",
        "type":  "Psychic",
        "hp":  80,
        "attack":  110
    },
    {
        "id":  721,
        "name":  "Volcanion",
        "type":  "Fire",
        "hp":  80,
        "attack":  110
    },
    {
        "id":  722,
        "name":  "Rowlet",
        "type":  "Grass",
        "hp":  68,
        "attack":  55
    },
    {
        "id":  723,
        "name":  "Dartrix",
        "type":  "Grass",
        "hp":  78,
        "attack":  75
    },
    {
        "id":  724,
        "name":  "Decidueye",
        "type":  "Grass",
        "hp":  78,
        "attack":  107
    },
    {
        "id":  725,
        "name":  "Litten",
        "type":  "Fire",
        "hp":  45,
        "attack":  65
    },
    {
        "id":  726,
        "name":  "Torracat",
        "type":  "Fire",
        "hp":  65,
        "attack":  85
    },
    {
        "id":  727,
        "name":  "Incineroar",
        "type":  "Fire",
        "hp":  95,
        "attack":  115
    },
    {
        "id":  728,
        "name":  "Popplio",
        "type":  "Water",
        "hp":  50,
        "attack":  54
    },
    {
        "id":  729,
        "name":  "Brionne",
        "type":  "Water",
        "hp":  60,
        "attack":  69
    },
    {
        "id":  730,
        "name":  "Primarina",
        "type":  "Water",
        "hp":  80,
        "attack":  74
    },
    {
        "id":  731,
        "name":  "Pikipek",
        "type":  "Normal",
        "hp":  35,
        "attack":  75
    },
    {
        "id":  732,
        "name":  "Trumbeak",
        "type":  "Normal",
        "hp":  55,
        "attack":  85
    },
    {
        "id":  733,
        "name":  "Toucannon",
        "type":  "Normal",
        "hp":  80,
        "attack":  120
    },
    {
        "id":  734,
        "name":  "Yungoos",
        "type":  "Normal",
        "hp":  48,
        "attack":  70
    },
    {
        "id":  735,
        "name":  "Gumshoos",
        "type":  "Normal",
        "hp":  88,
        "attack":  110
    },
    {
        "id":  736,
        "name":  "Grubbin",
        "type":  "Bug",
        "hp":  47,
        "attack":  62
    },
    {
        "id":  737,
        "name":  "Charjabug",
        "type":  "Bug",
        "hp":  57,
        "attack":  82
    },
    {
        "id":  738,
        "name":  "Vikavolt",
        "type":  "Bug",
        "hp":  77,
        "attack":  70
    },
    {
        "id":  739,
        "name":  "Crabrawler",
        "type":  "Fighting",
        "hp":  47,
        "attack":  82
    },
    {
        "id":  740,
        "name":  "Crabominable",
        "type":  "Fighting",
        "hp":  97,
        "attack":  132
    },
    {
        "id":  741,
        "name":  "Oricorio",
        "type":  "Fire",
        "hp":  75,
        "attack":  70
    },
    {
        "id":  742,
        "name":  "Cutiefly",
        "type":  "Bug",
        "hp":  40,
        "attack":  45
    },
    {
        "id":  743,
        "name":  "Ribombee",
        "type":  "Bug",
        "hp":  60,
        "attack":  55
    },
    {
        "id":  744,
        "name":  "Rockruff",
        "type":  "Rock",
        "hp":  45,
        "attack":  65
    },
    {
        "id":  745,
        "name":  "Lycanroc",
        "type":  "Rock",
        "hp":  75,
        "attack":  115
    },
    {
        "id":  746,
        "name":  "Wishiwashi",
        "type":  "Water",
        "hp":  45,
        "attack":  20
    },
    {
        "id":  747,
        "name":  "Mareanie",
        "type":  "Poison",
        "hp":  50,
        "attack":  53
    },
    {
        "id":  748,
        "name":  "Toxapex",
        "type":  "Poison",
        "hp":  50,
        "attack":  63
    },
    {
        "id":  749,
        "name":  "Mudbray",
        "type":  "Ground",
        "hp":  70,
        "attack":  100
    },
    {
        "id":  750,
        "name":  "Mudsdale",
        "type":  "Ground",
        "hp":  100,
        "attack":  125
    },
    {
        "id":  751,
        "name":  "Dewpider",
        "type":  "Water",
        "hp":  38,
        "attack":  40
    },
    {
        "id":  752,
        "name":  "Araquanid",
        "type":  "Water",
        "hp":  68,
        "attack":  70
    },
    {
        "id":  753,
        "name":  "Fomantis",
        "type":  "Grass",
        "hp":  40,
        "attack":  55
    },
    {
        "id":  754,
        "name":  "Lurantis",
        "type":  "Grass",
        "hp":  70,
        "attack":  105
    },
    {
        "id":  755,
        "name":  "Morelull",
        "type":  "Grass",
        "hp":  40,
        "attack":  35
    },
    {
        "id":  756,
        "name":  "Shiinotic",
        "type":  "Grass",
        "hp":  60,
        "attack":  45
    },
    {
        "id":  757,
        "name":  "Salandit",
        "type":  "Poison",
        "hp":  48,
        "attack":  44
    },
    {
        "id":  758,
        "name":  "Salazzle",
        "type":  "Poison",
        "hp":  68,
        "attack":  64
    },
    {
        "id":  759,
        "name":  "Stufful",
        "type":  "Normal",
        "hp":  70,
        "attack":  75
    },
    {
        "id":  760,
        "name":  "Bewear",
        "type":  "Normal",
        "hp":  120,
        "attack":  125
    },
    {
        "id":  761,
        "name":  "Bounsweet",
        "type":  "Grass",
        "hp":  42,
        "attack":  30
    },
    {
        "id":  762,
        "name":  "Steenee",
        "type":  "Grass",
        "hp":  52,
        "attack":  40
    },
    {
        "id":  763,
        "name":  "Tsareena",
        "type":  "Grass",
        "hp":  72,
        "attack":  120
    },
    {
        "id":  764,
        "name":  "Comfey",
        "type":  "Fairy",
        "hp":  51,
        "attack":  52
    },
    {
        "id":  765,
        "name":  "Oranguru",
        "type":  "Normal",
        "hp":  90,
        "attack":  60
    },
    {
        "id":  766,
        "name":  "Passimian",
        "type":  "Fighting",
        "hp":  100,
        "attack":  120
    },
    {
        "id":  767,
        "name":  "Wimpod",
        "type":  "Bug",
        "hp":  25,
        "attack":  35
    },
    {
        "id":  768,
        "name":  "Golisopod",
        "type":  "Bug",
        "hp":  75,
        "attack":  125
    },
    {
        "id":  769,
        "name":  "Sandygast",
        "type":  "Ghost",
        "hp":  55,
        "attack":  55
    },
    {
        "id":  770,
        "name":  "Palossand",
        "type":  "Ghost",
        "hp":  85,
        "attack":  75
    },
    {
        "id":  771,
        "name":  "Pyukumuku",
        "type":  "Water",
        "hp":  55,
        "attack":  60
    },
    {
        "id":  772,
        "name":  "Type: Null",
        "type":  "Normal",
        "hp":  95,
        "attack":  95
    },
    {
        "id":  773,
        "name":  "Silvally",
        "type":  "Normal",
        "hp":  95,
        "attack":  95
    },
    {
        "id":  774,
        "name":  "Minior",
        "type":  "Rock",
        "hp":  60,
        "attack":  60
    },
    {
        "id":  775,
        "name":  "Komala",
        "type":  "Normal",
        "hp":  65,
        "attack":  115
    },
    {
        "id":  776,
        "name":  "Turtonator",
        "type":  "Fire",
        "hp":  60,
        "attack":  78
    },
    {
        "id":  777,
        "name":  "Togedemaru",
        "type":  "Electric",
        "hp":  65,
        "attack":  98
    },
    {
        "id":  778,
        "name":  "Mimikyu",
        "type":  "Ghost",
        "hp":  55,
        "attack":  90
    },
    {
        "id":  779,
        "name":  "Bruxish",
        "type":  "Water",
        "hp":  68,
        "attack":  105
    },
    {
        "id":  780,
        "name":  "Drampa",
        "type":  "Normal",
        "hp":  78,
        "attack":  60
    },
    {
        "id":  781,
        "name":  "Dhelmise",
        "type":  "Ghost",
        "hp":  70,
        "attack":  131
    },
    {
        "id":  782,
        "name":  "Jangmo-o",
        "type":  "Dragon",
        "hp":  45,
        "attack":  55
    },
    {
        "id":  783,
        "name":  "Hakamo-o",
        "type":  "Dragon",
        "hp":  55,
        "attack":  75
    },
    {
        "id":  784,
        "name":  "Kommo-o",
        "type":  "Dragon",
        "hp":  75,
        "attack":  110
    },
    {
        "id":  785,
        "name":  "Tapu Koko",
        "type":  "Electric",
        "hp":  70,
        "attack":  115
    },
    {
        "id":  786,
        "name":  "Tapu Lele",
        "type":  "Psychic",
        "hp":  70,
        "attack":  85
    },
    {
        "id":  787,
        "name":  "Tapu Bulu",
        "type":  "Grass",
        "hp":  70,
        "attack":  130
    },
    {
        "id":  788,
        "name":  "Tapu Fini",
        "type":  "Water",
        "hp":  70,
        "attack":  75
    },
    {
        "id":  789,
        "name":  "Cosmog",
        "type":  "Psychic",
        "hp":  43,
        "attack":  29
    },
    {
        "id":  790,
        "name":  "Cosmoem",
        "type":  "Psychic",
        "hp":  43,
        "attack":  29
    },
    {
        "id":  791,
        "name":  "Solgaleo",
        "type":  "Psychic",
        "hp":  137,
        "attack":  137
    },
    {
        "id":  792,
        "name":  "Lunala",
        "type":  "Psychic",
        "hp":  137,
        "attack":  113
    },
    {
        "id":  793,
        "name":  "Nihilego",
        "type":  "Rock",
        "hp":  109,
        "attack":  53
    },
    {
        "id":  794,
        "name":  "Buzzwole",
        "type":  "Bug",
        "hp":  107,
        "attack":  139
    },
    {
        "id":  795,
        "name":  "Pheromosa",
        "type":  "Bug",
        "hp":  71,
        "attack":  137
    },
    {
        "id":  796,
        "name":  "Xurkitree",
        "type":  "Electric",
        "hp":  83,
        "attack":  89
    },
    {
        "id":  797,
        "name":  "Celesteela",
        "type":  "Steel",
        "hp":  97,
        "attack":  101
    },
    {
        "id":  798,
        "name":  "Kartana",
        "type":  "Grass",
        "hp":  59,
        "attack":  181
    },
    {
        "id":  799,
        "name":  "Guzzlord",
        "type":  "Dark",
        "hp":  223,
        "attack":  101
    },
    {
        "id":  800,
        "name":  "Necrozma",
        "type":  "Psychic",
        "hp":  97,
        "attack":  107
    },
    {
        "id":  801,
        "name":  "Magearna",
        "type":  "Steel",
        "hp":  80,
        "attack":  95
    },
    {
        "id":  802,
        "name":  "Marshadow",
        "type":  "Fighting",
        "hp":  90,
        "attack":  125
    },
    {
        "id":  803,
        "name":  "Poipole",
        "type":  "Poison",
        "hp":  67,
        "attack":  73
    },
    {
        "id":  804,
        "name":  "Naganadel",
        "type":  "Poison",
        "hp":  73,
        "attack":  73
    },
    {
        "id":  805,
        "name":  "Stakataka",
        "type":  "Rock",
        "hp":  61,
        "attack":  131
    },
    {
        "id":  806,
        "name":  "Blacephalon",
        "type":  "Fire",
        "hp":  53,
        "attack":  127
    },
    {
        "id":  807,
        "name":  "Zeraora",
        "type":  "Electric",
        "hp":  88,
        "attack":  112
    },
    {
        "id":  808,
        "name":  "Meltan",
        "type":  "Steel",
        "hp":  46,
        "attack":  65
    },
    {
        "id":  809,
        "name":  "Melmetal",
        "type":  "Steel",
        "hp":  135,
        "attack":  143
    },
    {
        "id":  810,
        "name":  "Grookey",
        "type":  "Grass",
        "hp":  50,
        "attack":  65
    },
    {
        "id":  811,
        "name":  "Thwackey",
        "type":  "Grass",
        "hp":  70,
        "attack":  85
    },
    {
        "id":  812,
        "name":  "Rillaboom",
        "type":  "Grass",
        "hp":  100,
        "attack":  125
    },
    {
        "id":  813,
        "name":  "Scorbunny",
        "type":  "Fire",
        "hp":  50,
        "attack":  71
    },
    {
        "id":  814,
        "name":  "Raboot",
        "type":  "Fire",
        "hp":  65,
        "attack":  86
    },
    {
        "id":  815,
        "name":  "Cinderace",
        "type":  "Fire",
        "hp":  80,
        "attack":  116
    },
    {
        "id":  816,
        "name":  "Sobble",
        "type":  "Water",
        "hp":  50,
        "attack":  40
    },
    {
        "id":  817,
        "name":  "Drizzile",
        "type":  "Water",
        "hp":  65,
        "attack":  60
    },
    {
        "id":  818,
        "name":  "Inteleon",
        "type":  "Water",
        "hp":  70,
        "attack":  85
    },
    {
        "id":  819,
        "name":  "Skwovet",
        "type":  "Normal",
        "hp":  70,
        "attack":  55
    },
    {
        "id":  820,
        "name":  "Greedent",
        "type":  "Normal",
        "hp":  120,
        "attack":  95
    },
    {
        "id":  821,
        "name":  "Rookidee",
        "type":  "Flying",
        "hp":  38,
        "attack":  47
    },
    {
        "id":  822,
        "name":  "Corvisquire",
        "type":  "Flying",
        "hp":  68,
        "attack":  67
    },
    {
        "id":  823,
        "name":  "Corviknight",
        "type":  "Flying",
        "hp":  98,
        "attack":  87
    },
    {
        "id":  824,
        "name":  "Blipbug",
        "type":  "Bug",
        "hp":  25,
        "attack":  20
    },
    {
        "id":  825,
        "name":  "Dottler",
        "type":  "Bug",
        "hp":  50,
        "attack":  35
    },
    {
        "id":  826,
        "name":  "Orbeetle",
        "type":  "Bug",
        "hp":  60,
        "attack":  45
    },
    {
        "id":  827,
        "name":  "Nickit",
        "type":  "Dark",
        "hp":  40,
        "attack":  28
    },
    {
        "id":  828,
        "name":  "Thievul",
        "type":  "Dark",
        "hp":  70,
        "attack":  58
    },
    {
        "id":  829,
        "name":  "Gossifleur",
        "type":  "Grass",
        "hp":  40,
        "attack":  40
    },
    {
        "id":  830,
        "name":  "Eldegoss",
        "type":  "Grass",
        "hp":  60,
        "attack":  50
    },
    {
        "id":  831,
        "name":  "Wooloo",
        "type":  "Normal",
        "hp":  42,
        "attack":  40
    },
    {
        "id":  832,
        "name":  "Dubwool",
        "type":  "Normal",
        "hp":  72,
        "attack":  80
    },
    {
        "id":  833,
        "name":  "Chewtle",
        "type":  "Water",
        "hp":  50,
        "attack":  64
    },
    {
        "id":  834,
        "name":  "Drednaw",
        "type":  "Water",
        "hp":  90,
        "attack":  115
    },
    {
        "id":  835,
        "name":  "Yamper",
        "type":  "Electric",
        "hp":  59,
        "attack":  45
    },
    {
        "id":  836,
        "name":  "Boltund",
        "type":  "Electric",
        "hp":  69,
        "attack":  90
    },
    {
        "id":  837,
        "name":  "Rolycoly",
        "type":  "Rock",
        "hp":  30,
        "attack":  40
    },
    {
        "id":  838,
        "name":  "Carkol",
        "type":  "Rock",
        "hp":  80,
        "attack":  60
    },
    {
        "id":  839,
        "name":  "Coalossal",
        "type":  "Rock",
        "hp":  110,
        "attack":  80
    },
    {
        "id":  840,
        "name":  "Applin",
        "type":  "Grass",
        "hp":  40,
        "attack":  40
    },
    {
        "id":  841,
        "name":  "Flapple",
        "type":  "Grass",
        "hp":  70,
        "attack":  110
    },
    {
        "id":  842,
        "name":  "Appletun",
        "type":  "Grass",
        "hp":  110,
        "attack":  85
    },
    {
        "id":  843,
        "name":  "Silicobra",
        "type":  "Ground",
        "hp":  52,
        "attack":  57
    },
    {
        "id":  844,
        "name":  "Sandaconda",
        "type":  "Ground",
        "hp":  72,
        "attack":  107
    },
    {
        "id":  845,
        "name":  "Cramorant",
        "type":  "Flying",
        "hp":  70,
        "attack":  85
    },
    {
        "id":  846,
        "name":  "Arrokuda",
        "type":  "Water",
        "hp":  41,
        "attack":  63
    },
    {
        "id":  847,
        "name":  "Barraskewda",
        "type":  "Water",
        "hp":  61,
        "attack":  123
    },
    {
        "id":  848,
        "name":  "Toxel",
        "type":  "Electric",
        "hp":  40,
        "attack":  38
    },
    {
        "id":  849,
        "name":  "Toxtricity",
        "type":  "Electric",
        "hp":  75,
        "attack":  98
    },
    {
        "id":  850,
        "name":  "Sizzlipede",
        "type":  "Fire",
        "hp":  50,
        "attack":  65
    },
    {
        "id":  851,
        "name":  "Centiskorch",
        "type":  "Fire",
        "hp":  100,
        "attack":  115
    },
    {
        "id":  852,
        "name":  "Clobbopus",
        "type":  "Fighting",
        "hp":  50,
        "attack":  68
    },
    {
        "id":  853,
        "name":  "Grapploct",
        "type":  "Fighting",
        "hp":  80,
        "attack":  118
    },
    {
        "id":  854,
        "name":  "Sinistea",
        "type":  "Ghost",
        "hp":  40,
        "attack":  45
    },
    {
        "id":  855,
        "name":  "Polteageist",
        "type":  "Ghost",
        "hp":  60,
        "attack":  65
    },
    {
        "id":  856,
        "name":  "Hatenna",
        "type":  "Psychic",
        "hp":  42,
        "attack":  30
    },
    {
        "id":  857,
        "name":  "Hattrem",
        "type":  "Psychic",
        "hp":  57,
        "attack":  40
    },
    {
        "id":  858,
        "name":  "Hatterene",
        "type":  "Psychic",
        "hp":  57,
        "attack":  90
    },
    {
        "id":  859,
        "name":  "Impidimp",
        "type":  "Dark",
        "hp":  45,
        "attack":  45
    },
    {
        "id":  860,
        "name":  "Morgrem",
        "type":  "Dark",
        "hp":  65,
        "attack":  60
    },
    {
        "id":  861,
        "name":  "Grimmsnarl",
        "type":  "Dark",
        "hp":  95,
        "attack":  120
    },
    {
        "id":  862,
        "name":  "Obstagoon",
        "type":  "Dark",
        "hp":  93,
        "attack":  90
    },
    {
        "id":  863,
        "name":  "Perrserker",
        "type":  "Steel",
        "hp":  70,
        "attack":  110
    },
    {
        "id":  864,
        "name":  "Cursola",
        "type":  "Ghost",
        "hp":  60,
        "attack":  95
    },
    {
        "id":  865,
        "name":  "Sirfetch’d",
        "type":  "Fighting",
        "hp":  62,
        "attack":  135
    },
    {
        "id":  866,
        "name":  "Mr. Rime",
        "type":  "Ice",
        "hp":  80,
        "attack":  85
    },
    {
        "id":  867,
        "name":  "Runerigus",
        "type":  "Ground",
        "hp":  58,
        "attack":  95
    },
    {
        "id":  868,
        "name":  "Milcery",
        "type":  "Fairy",
        "hp":  45,
        "attack":  40
    },
    {
        "id":  869,
        "name":  "Alcremie",
        "type":  "Fairy",
        "hp":  65,
        "attack":  60
    },
    {
        "id":  870,
        "name":  "Falinks",
        "type":  "Fighting",
        "hp":  65,
        "attack":  100
    },
    {
        "id":  871,
        "name":  "Pincurchin",
        "type":  "Electric",
        "hp":  48,
        "attack":  101
    },
    {
        "id":  872,
        "name":  "Snom",
        "type":  "Ice",
        "hp":  30,
        "attack":  25
    },
    {
        "id":  873,
        "name":  "Frosmoth",
        "type":  "Ice",
        "hp":  70,
        "attack":  65
    },
    {
        "id":  874,
        "name":  "Stonjourner",
        "type":  "Rock",
        "hp":  100,
        "attack":  125
    },
    {
        "id":  875,
        "name":  "Eiscue",
        "type":  "Ice",
        "hp":  75,
        "attack":  80
    },
    {
        "id":  876,
        "name":  "Indeedee",
        "type":  "Psychic",
        "hp":  60,
        "attack":  65
    },
    {
        "id":  877,
        "name":  "Morpeko",
        "type":  "Electric",
        "hp":  58,
        "attack":  95
    },
    {
        "id":  878,
        "name":  "Cufant",
        "type":  "Steel",
        "hp":  72,
        "attack":  80
    },
    {
        "id":  879,
        "name":  "Copperajah",
        "type":  "Steel",
        "hp":  122,
        "attack":  130
    },
    {
        "id":  880,
        "name":  "Dracozolt",
        "type":  "Electric",
        "hp":  90,
        "attack":  100
    },
    {
        "id":  881,
        "name":  "Arctozolt",
        "type":  "Electric",
        "hp":  90,
        "attack":  100
    },
    {
        "id":  882,
        "name":  "Dracovish",
        "type":  "Water",
        "hp":  90,
        "attack":  90
    },
    {
        "id":  883,
        "name":  "Arctovish",
        "type":  "Water",
        "hp":  90,
        "attack":  90
    },
    {
        "id":  884,
        "name":  "Duraludon",
        "type":  "Steel",
        "hp":  70,
        "attack":  95
    },
    {
        "id":  885,
        "name":  "Dreepy",
        "type":  "Dragon",
        "hp":  28,
        "attack":  60
    },
    {
        "id":  886,
        "name":  "Drakloak",
        "type":  "Dragon",
        "hp":  68,
        "attack":  80
    },
    {
        "id":  887,
        "name":  "Dragapult",
        "type":  "Dragon",
        "hp":  88,
        "attack":  120
    },
    {
        "id":  888,
        "name":  "Zacian",
        "type":  "Fairy",
        "hp":  92,
        "attack":  120
    },
    {
        "id":  889,
        "name":  "Zamazenta",
        "type":  "Fighting",
        "hp":  92,
        "attack":  120
    },
    {
        "id":  890,
        "name":  "Eternatus",
        "type":  "Poison",
        "hp":  140,
        "attack":  85
    },
    {
        "id":  891,
        "name":  "Kubfu",
        "type":  "Fighting",
        "hp":  60,
        "attack":  90
    },
    {
        "id":  892,
        "name":  "Urshifu",
        "type":  "Fighting",
        "hp":  100,
        "attack":  130
    },
    {
        "id":  893,
        "name":  "Zarude",
        "type":  "Dark",
        "hp":  105,
        "attack":  120
    },
    {
        "id":  894,
        "name":  "Regieleki",
        "type":  "Electric",
        "hp":  80,
        "attack":  100
    },
    {
        "id":  895,
        "name":  "Regidrago",
        "type":  "Dragon",
        "hp":  200,
        "attack":  100
    },
    {
        "id":  896,
        "name":  "Glastrier",
        "type":  "Ice",
        "hp":  100,
        "attack":  145
    },
    {
        "id":  897,
        "name":  "Spectrier",
        "type":  "Ghost",
        "hp":  100,
        "attack":  65
    },
    {
        "id":  898,
        "name":  "Calyrex",
        "type":  "Psychic",
        "hp":  100,
        "attack":  80
    },
    {
        "id":  899,
        "name":  "Wyrdeer",
        "type":  "Normal",
        "hp":  103,
        "attack":  105
    },
    {
        "id":  900,
        "name":  "Kleavor",
        "type":  "Bug",
        "hp":  70,
        "attack":  135
    },
    {
        "id":  901,
        "name":  "Ursaluna",
        "type":  "Ground",
        "hp":  130,
        "attack":  140
    },
    {
        "id":  902,
        "name":  "Basculegion",
        "type":  "Water",
        "hp":  120,
        "attack":  112
    },
    {
        "id":  903,
        "name":  "Sneasler",
        "type":  "Fighting",
        "hp":  80,
        "attack":  130
    },
    {
        "id":  904,
        "name":  "Overqwil",
        "type":  "Dark",
        "hp":  85,
        "attack":  115
    },
    {
        "id":  905,
        "name":  "Enamorus",
        "type":  "Fairy",
        "hp":  74,
        "attack":  115
    },
    {
        "id":  906,
        "name":  "Sprigatito",
        "type":  "Grass",
        "hp":  40,
        "attack":  61
    },
    {
        "id":  907,
        "name":  "Floragato",
        "type":  "Grass",
        "hp":  61,
        "attack":  80
    },
    {
        "id":  908,
        "name":  "Meowscarada",
        "type":  "Grass",
        "hp":  76,
        "attack":  110
    },
    {
        "id":  909,
        "name":  "Fuecoco",
        "type":  "Fire",
        "hp":  67,
        "attack":  45
    },
    {
        "id":  910,
        "name":  "Crocalor",
        "type":  "Fire",
        "hp":  81,
        "attack":  55
    },
    {
        "id":  911,
        "name":  "Skeledirge",
        "type":  "Fire",
        "hp":  104,
        "attack":  75
    },
    {
        "id":  912,
        "name":  "Quaxly",
        "type":  "Water",
        "hp":  55,
        "attack":  65
    },
    {
        "id":  913,
        "name":  "Quaxwell",
        "type":  "Water",
        "hp":  70,
        "attack":  85
    },
    {
        "id":  914,
        "name":  "Quaquaval",
        "type":  "Water",
        "hp":  85,
        "attack":  120
    },
    {
        "id":  915,
        "name":  "Lechonk",
        "type":  "Normal",
        "hp":  54,
        "attack":  45
    },
    {
        "id":  916,
        "name":  "Oinkologne",
        "type":  "Normal",
        "hp":  110,
        "attack":  100
    },
    {
        "id":  917,
        "name":  "Tarountula",
        "type":  "Bug",
        "hp":  35,
        "attack":  41
    },
    {
        "id":  918,
        "name":  "Spidops",
        "type":  "Bug",
        "hp":  60,
        "attack":  79
    },
    {
        "id":  919,
        "name":  "Nymble",
        "type":  "Bug",
        "hp":  33,
        "attack":  46
    },
    {
        "id":  920,
        "name":  "Lokix",
        "type":  "Bug",
        "hp":  71,
        "attack":  102
    },
    {
        "id":  921,
        "name":  "Pawmi",
        "type":  "Electric",
        "hp":  45,
        "attack":  50
    },
    {
        "id":  922,
        "name":  "Pawmo",
        "type":  "Electric",
        "hp":  60,
        "attack":  75
    },
    {
        "id":  923,
        "name":  "Pawmot",
        "type":  "Electric",
        "hp":  70,
        "attack":  115
    },
    {
        "id":  924,
        "name":  "Tandemaus",
        "type":  "Normal",
        "hp":  50,
        "attack":  50
    },
    {
        "id":  925,
        "name":  "Maushold",
        "type":  "Normal",
        "hp":  74,
        "attack":  75
    },
    {
        "id":  926,
        "name":  "Fidough",
        "type":  "Fairy",
        "hp":  37,
        "attack":  55
    },
    {
        "id":  927,
        "name":  "Dachsbun",
        "type":  "Fairy",
        "hp":  57,
        "attack":  80
    },
    {
        "id":  928,
        "name":  "Smoliv",
        "type":  "Grass",
        "hp":  41,
        "attack":  35
    },
    {
        "id":  929,
        "name":  "Dolliv",
        "type":  "Grass",
        "hp":  52,
        "attack":  53
    },
    {
        "id":  930,
        "name":  "Arboliva",
        "type":  "Grass",
        "hp":  78,
        "attack":  69
    },
    {
        "id":  931,
        "name":  "Squawkabilly",
        "type":  "Normal",
        "hp":  82,
        "attack":  96
    },
    {
        "id":  932,
        "name":  "Nacli",
        "type":  "Rock",
        "hp":  55,
        "attack":  55
    },
    {
        "id":  933,
        "name":  "Naclstack",
        "type":  "Rock",
        "hp":  60,
        "attack":  60
    },
    {
        "id":  934,
        "name":  "Garganacl",
        "type":  "Rock",
        "hp":  100,
        "attack":  100
    },
    {
        "id":  935,
        "name":  "Charcadet",
        "type":  "Fire",
        "hp":  40,
        "attack":  50
    },
    {
        "id":  936,
        "name":  "Armarouge",
        "type":  "Fire",
        "hp":  85,
        "attack":  60
    },
    {
        "id":  937,
        "name":  "Ceruledge",
        "type":  "Fire",
        "hp":  75,
        "attack":  125
    },
    {
        "id":  938,
        "name":  "Tadbulb",
        "type":  "Electric",
        "hp":  61,
        "attack":  31
    },
    {
        "id":  939,
        "name":  "Bellibolt",
        "type":  "Electric",
        "hp":  109,
        "attack":  64
    },
    {
        "id":  940,
        "name":  "Wattrel",
        "type":  "Electric",
        "hp":  40,
        "attack":  40
    },
    {
        "id":  941,
        "name":  "Kilowattrel",
        "type":  "Electric",
        "hp":  70,
        "attack":  70
    },
    {
        "id":  942,
        "name":  "Maschiff",
        "type":  "Dark",
        "hp":  60,
        "attack":  78
    },
    {
        "id":  943,
        "name":  "Mabosstiff",
        "type":  "Dark",
        "hp":  80,
        "attack":  120
    },
    {
        "id":  944,
        "name":  "Shroodle",
        "type":  "Poison",
        "hp":  40,
        "attack":  65
    },
    {
        "id":  945,
        "name":  "Grafaiai",
        "type":  "Poison",
        "hp":  63,
        "attack":  95
    },
    {
        "id":  946,
        "name":  "Bramblin",
        "type":  "Grass",
        "hp":  40,
        "attack":  65
    },
    {
        "id":  947,
        "name":  "Brambleghast",
        "type":  "Grass",
        "hp":  55,
        "attack":  115
    },
    {
        "id":  948,
        "name":  "Toedscool",
        "type":  "Ground",
        "hp":  40,
        "attack":  40
    },
    {
        "id":  949,
        "name":  "Toedscruel",
        "type":  "Ground",
        "hp":  80,
        "attack":  70
    },
    {
        "id":  950,
        "name":  "Klawf",
        "type":  "Rock",
        "hp":  70,
        "attack":  100
    },
    {
        "id":  951,
        "name":  "Capsakid",
        "type":  "Grass",
        "hp":  50,
        "attack":  62
    },
    {
        "id":  952,
        "name":  "Scovillain",
        "type":  "Grass",
        "hp":  65,
        "attack":  108
    },
    {
        "id":  953,
        "name":  "Rellor",
        "type":  "Bug",
        "hp":  41,
        "attack":  50
    },
    {
        "id":  954,
        "name":  "Rabsca",
        "type":  "Bug",
        "hp":  75,
        "attack":  50
    },
    {
        "id":  955,
        "name":  "Flittle",
        "type":  "Psychic",
        "hp":  30,
        "attack":  35
    },
    {
        "id":  956,
        "name":  "Espathra",
        "type":  "Psychic",
        "hp":  95,
        "attack":  60
    },
    {
        "id":  957,
        "name":  "Tinkatink",
        "type":  "Fairy",
        "hp":  50,
        "attack":  45
    },
    {
        "id":  958,
        "name":  "Tinkatuff",
        "type":  "Fairy",
        "hp":  65,
        "attack":  55
    },
    {
        "id":  959,
        "name":  "Tinkaton",
        "type":  "Fairy",
        "hp":  85,
        "attack":  75
    },
    {
        "id":  960,
        "name":  "Wiglett",
        "type":  "Water",
        "hp":  10,
        "attack":  55
    },
    {
        "id":  961,
        "name":  "Wugtrio",
        "type":  "Water",
        "hp":  35,
        "attack":  100
    },
    {
        "id":  962,
        "name":  "Bombirdier",
        "type":  "Flying",
        "hp":  70,
        "attack":  103
    },
    {
        "id":  963,
        "name":  "Finizen",
        "type":  "Water",
        "hp":  70,
        "attack":  45
    },
    {
        "id":  964,
        "name":  "Palafin",
        "type":  "Water",
        "hp":  100,
        "attack":  70
    },
    {
        "id":  965,
        "name":  "Varoom",
        "type":  "Steel",
        "hp":  45,
        "attack":  70
    },
    {
        "id":  966,
        "name":  "Revavroom",
        "type":  "Steel",
        "hp":  80,
        "attack":  119
    },
    {
        "id":  967,
        "name":  "Cyclizar",
        "type":  "Dragon",
        "hp":  70,
        "attack":  95
    },
    {
        "id":  968,
        "name":  "Orthworm",
        "type":  "Steel",
        "hp":  70,
        "attack":  85
    },
    {
        "id":  969,
        "name":  "Glimmet",
        "type":  "Rock",
        "hp":  48,
        "attack":  35
    },
    {
        "id":  970,
        "name":  "Glimmora",
        "type":  "Rock",
        "hp":  83,
        "attack":  55
    },
    {
        "id":  971,
        "name":  "Greavard",
        "type":  "Ghost",
        "hp":  50,
        "attack":  61
    },
    {
        "id":  972,
        "name":  "Houndstone",
        "type":  "Ghost",
        "hp":  72,
        "attack":  101
    },
    {
        "id":  973,
        "name":  "Flamigo",
        "type":  "Flying",
        "hp":  82,
        "attack":  115
    },
    {
        "id":  974,
        "name":  "Cetoddle",
        "type":  "Ice",
        "hp":  108,
        "attack":  68
    },
    {
        "id":  975,
        "name":  "Cetitan",
        "type":  "Ice",
        "hp":  170,
        "attack":  113
    },
    {
        "id":  976,
        "name":  "Veluza",
        "type":  "Water",
        "hp":  90,
        "attack":  102
    },
    {
        "id":  977,
        "name":  "Dondozo",
        "type":  "Water",
        "hp":  150,
        "attack":  100
    },
    {
        "id":  978,
        "name":  "Tatsugiri",
        "type":  "Dragon",
        "hp":  68,
        "attack":  50
    },
    {
        "id":  979,
        "name":  "Annihilape",
        "type":  "Fighting",
        "hp":  110,
        "attack":  115
    },
    {
        "id":  980,
        "name":  "Clodsire",
        "type":  "Poison",
        "hp":  130,
        "attack":  75
    },
    {
        "id":  981,
        "name":  "Farigiraf",
        "type":  "Normal",
        "hp":  120,
        "attack":  90
    },
    {
        "id":  982,
        "name":  "Dudunsparce",
        "type":  "Normal",
        "hp":  125,
        "attack":  100
    },
    {
        "id":  983,
        "name":  "Kingambit",
        "type":  "Dark",
        "hp":  100,
        "attack":  135
    },
    {
        "id":  984,
        "name":  "Great Tusk",
        "type":  "Ground",
        "hp":  115,
        "attack":  131
    },
    {
        "id":  985,
        "name":  "Scream Tail",
        "type":  "Fairy",
        "hp":  115,
        "attack":  65
    },
    {
        "id":  986,
        "name":  "Brute Bonnet",
        "type":  "Grass",
        "hp":  111,
        "attack":  127
    },
    {
        "id":  987,
        "name":  "Flutter Mane",
        "type":  "Ghost",
        "hp":  55,
        "attack":  55
    },
    {
        "id":  988,
        "name":  "Slither Wing",
        "type":  "Bug",
        "hp":  85,
        "attack":  135
    },
    {
        "id":  989,
        "name":  "Sandy Shocks",
        "type":  "Electric",
        "hp":  85,
        "attack":  81
    },
    {
        "id":  990,
        "name":  "Iron Treads",
        "type":  "Ground",
        "hp":  90,
        "attack":  112
    },
    {
        "id":  991,
        "name":  "Iron Bundle",
        "type":  "Ice",
        "hp":  56,
        "attack":  80
    },
    {
        "id":  992,
        "name":  "Iron Hands",
        "type":  "Fighting",
        "hp":  154,
        "attack":  140
    },
    {
        "id":  993,
        "name":  "Iron Jugulis",
        "type":  "Dark",
        "hp":  94,
        "attack":  80
    },
    {
        "id":  994,
        "name":  "Iron Moth",
        "type":  "Fire",
        "hp":  80,
        "attack":  70
    },
    {
        "id":  995,
        "name":  "Iron Thorns",
        "type":  "Rock",
        "hp":  100,
        "attack":  134
    },
    {
        "id":  996,
        "name":  "Frigibax",
        "type":  "Dragon",
        "hp":  65,
        "attack":  75
    },
    {
        "id":  997,
        "name":  "Arctibax",
        "type":  "Dragon",
        "hp":  90,
        "attack":  95
    },
    {
        "id":  998,
        "name":  "Baxcalibur",
        "type":  "Dragon",
        "hp":  115,
        "attack":  145
    },
    {
        "id":  999,
        "name":  "Gimmighoul",
        "type":  "Ghost",
        "hp":  45,
        "attack":  30
    },
    {
        "id":  1000,
        "name":  "Gholdengo",
        "type":  "Steel",
        "hp":  87,
        "attack":  60
    },
    {
        "id":  1001,
        "name":  "Wo-Chien",
        "type":  "Dark",
        "hp":  85,
        "attack":  85
    },
    {
        "id":  1002,
        "name":  "Chien-Pao",
        "type":  "Dark",
        "hp":  80,
        "attack":  120
    },
    {
        "id":  1003,
        "name":  "Ting-Lu",
        "type":  "Dark",
        "hp":  155,
        "attack":  110
    },
    {
        "id":  1004,
        "name":  "Chi-Yu",
        "type":  "Dark",
        "hp":  55,
        "attack":  80
    },
    {
        "id":  1005,
        "name":  "Roaring Moon",
        "type":  "Dragon",
        "hp":  105,
        "attack":  139
    },
    {
        "id":  1006,
        "name":  "Iron Valiant",
        "type":  "Fairy",
        "hp":  74,
        "attack":  130
    },
    {
        "id":  1007,
        "name":  "Koraidon",
        "type":  "Fighting",
        "hp":  100,
        "attack":  135
    },
    {
        "id":  1008,
        "name":  "Miraidon",
        "type":  "Electric",
        "hp":  100,
        "attack":  85
    },
    {
        "id":  1009,
        "name":  "Walking Wake",
        "type":  "Water",
        "hp":  99,
        "attack":  83
    },
    {
        "id":  1010,
        "name":  "Iron Leaves",
        "type":  "Grass",
        "hp":  90,
        "attack":  130
    },
    {
        "id":  1011,
        "name":  "Dipplin",
        "type":  "Grass",
        "hp":  80,
        "attack":  80
    },
    {
        "id":  1012,
        "name":  "Poltchageist",
        "type":  "Grass",
        "hp":  40,
        "attack":  45
    },
    {
        "id":  1013,
        "name":  "Sinistcha",
        "type":  "Grass",
        "hp":  71,
        "attack":  60
    },
    {
        "id":  1014,
        "name":  "Okidogi",
        "type":  "Poison",
        "hp":  88,
        "attack":  128
    },
    {
        "id":  1015,
        "name":  "Munkidori",
        "type":  "Poison",
        "hp":  88,
        "attack":  75
    },
    {
        "id":  1016,
        "name":  "Fezandipiti",
        "type":  "Poison",
        "hp":  88,
        "attack":  91
    },
    {
        "id":  1017,
        "name":  "Ogerpon",
        "type":  "Grass",
        "hp":  80,
        "attack":  120
    },
    {
        "id":  1018,
        "name":  "Archaludon",
        "type":  "Steel",
        "hp":  90,
        "attack":  105
    },
    {
        "id":  1019,
        "name":  "Hydrapple",
        "type":  "Grass",
        "hp":  106,
        "attack":  80
    },
    {
        "id":  1020,
        "name":  "Gouging Fire",
        "type":  "Fire",
        "hp":  105,
        "attack":  115
    },
    {
        "id":  1021,
        "name":  "Raging Bolt",
        "type":  "Electric",
        "hp":  125,
        "attack":  73
    },
    {
        "id":  1022,
        "name":  "Iron Boulder",
        "type":  "Rock",
        "hp":  90,
        "attack":  120
    },
    {
        "id":  1023,
        "name":  "Iron Crown",
        "type":  "Steel",
        "hp":  90,
        "attack":  72
    },
    {
        "id":  1024,
        "name":  "Terapagos",
        "type":  "Normal",
        "hp":  90,
        "attack":  65
    },
    {
        "id":  1025,
        "name":  "Pecharunt",
        "type":  "Poison",
        "hp":  88,
        "attack":  88
    }
];

export default pokemons;
