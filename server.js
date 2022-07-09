let express = require("express");

let server = express();

server.get("",(req,res) =>{
   res.send("hello")
//    return;
})
server.get("/books",(req,res)=>{
    res.send([
        {
            name : " Anna Karenina",
            content : "Anna Karenina tells of the doomed love affair between the sensuous and rebellious Anna and the dashing officer, Count Vronsky. Tragedy unfolds as Anna rejects her passionless marriage and must endu..."
        },
        {
            name : "Madame Bovary",
            content : "For daring to peer into the heart of an adulteress and enumerate its contents with profound dispassion, the author of Madame Bovary was tried for offenses against morality and religion."
        },
        {
            name : " Anna Karenina",
            content : "Anna Karenina tells of the doomed love affair between the sensuous and rebellious Anna and the dashing officer, Count Vronsky. Tragedy unfolds as Anna rejects her passionless marriage and must endu..."
        },
        {
            name : "Madame Bovary",
            content : "For daring to peer into the heart of an adulteress and enumerate its contents with profound dispassion, the author of Madame Bovary was tried for offenses against morality and religion."
        },
    ])
})

server.listen(3000);