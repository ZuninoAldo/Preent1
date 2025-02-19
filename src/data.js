const listaProductos = [
{
    "id": 1,
    "title": "NETMAK NM-W90",
    "price": 9.349,
    "description": "MOUSE INALAMBRICO 1600 DPI RGB USB 2.4GHZ RECARGABLE LED RGB",
    "stock": 10,
    "img": "http://http2.mlstatic.com/D_830218-MLA80329427624_112024-F.jpg",
    "type": "mouse",
},
{
    "id": 2,
    "title": "T-DAGGER CORPORAL T-TGWM100",
    "price": 8.773,
    "description": "MOUSE INALAMBRICO USB 2.4GHZ 2400 DPI 6D T-DAGGER CORPORAL T-TGWM100",
    "stock": 11,
    "img": "http://http2.mlstatic.com/D_635304-MLA51369769181_092022-F.jpg",
    "type": "mouse",
},
{
    "id": 3,
    "title": "SHENLONG KB8700",
    "price": 15.724,
    "description": "ESPAÑOL MEMBRANA RAINBOW ANTIGHOSTING TECLADO SHENLONG KB8700",
    "stock": 8,
    "img": "http://http2.mlstatic.com/D_870231-MLA43675271099_102020-F.jpg",
    "type": "teclado",
},
{
    "id": 4,
    "title": "NISUTA NS-KBG5RL",
    "price": 20.399,
    "description": "TECLADO NISUTA NS-KBG5RL MEMBRANA GAMER RGB RAINBOW ESPAÑOL ANTIGHOSTING 19 TECLAS",
    "stock": 18,
    "img": "http://http2.mlstatic.com/D_799057-MLA49521872948_032022-F.jpg",
    "type": "teclado",
},
{
    "id": 5,
    "title": "REDRAGON ARES RGB H120",
    "price": 19.379,
    "description": "REDRAGON ARES RGB H120-RGB AURICULARES GAMER MICROFONO RGB",
    "stock": 5,
    "img": "http://http2.mlstatic.com/D_811990-MLA81513903787_122024-F.jpg",
    "type": "auricular",
},
{
    "id": 6,
    "title": "NS-AUG300LV",
    "price": 27.199,
    "description": "AURICULAR NS-AUG300LV GAMER CON MICROFONO CON VINCHA VERDE",
    "stock": 8,
    "img": "http://http2.mlstatic.com/D_724109-MLA80756181688_112024-F.jpg",
    "type": "auricular",
}
];


export const getProductos = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(listaProductos)
        },1000)
        })
}

export const getProductosByType = (typeId) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(listaProductos.filter(prod=>prod.type === typeId))
        },1000)
        })
}

export const getProductosById = (productosId) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(listaProductos.find(prod=>prod.id === productosId))
        },1000)
        })
}

