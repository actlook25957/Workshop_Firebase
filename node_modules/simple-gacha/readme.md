# simple-gacha
A very simple gacha function that picks an element based off a loot table.

## Example
```javascript
const gacha = require("simple-gacha");

const lootTable = [
    {
        "name" : "Golden Knife",
        "weight" : 10
    },
    {
        "name" : "Diamond Pickaxe",
        "weight" : 5
    },
    {
        "name" : "Invisibility Cap",
        "weight" : 2
    }
]

const { pick } = gacha.simple(lootTable);
console.log(pick);
```
Since `Golden Knife` has the biggest weight, there's a higher chance that it will return Golden Knife.
```json
{
    "name" : "Golden Knife",
    "weight" : 10
}
```

## Contributing
Pull requests are very welcomed. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)