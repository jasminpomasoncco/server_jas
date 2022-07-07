const Contenedor = require('./Contenedor');
const contenedor = new Contenedor('./productos.txt');

(async () => {
    console.log(await contenedor.save(
    {   
        title: 'mesa',
        price: 50,
        thumbnail:'https://th.bing.com/th/id/OIP.aY9ojoXlENp78FwKT1bTxwHaF2?pid=ImgDet&rs=1'
    }
),
);

console.log(await contenedor.save(
    {   
        title: 'estante',
        price: 90,
        thumbnail:'https://th.bing.com/th/id/R.bed989ec0755b0ba166f3a80a4d2272a?rik=fRl4xRSJmgQ77w&pid=ImgRaw&r=0'
    }
),
);

console.log(await contenedor.save(
    {   
        title: 'ropero',
        price: 140,
        thumbnail:'https://th.bing.com/th/id/R.759693eb42cbaf6012d38e6d5b3b5ce0?rik=%2f4jKx2mNDeYzAw&riu=http%3a%2f%2fst.houzz.com%2fsimgs%2f7a4162130fab9be6_4-0359%2fcontemporary-closet.jpg&ehk=DywLarpNFYcAj0Pp1fMfYTkBDjF5V9OTafUeqftWhPM%3d&risl=&pid=ImgRaw&r=0'
    }
)
);

})();