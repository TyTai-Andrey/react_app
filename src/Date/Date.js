

// Новости
export const arrNews = [
    {id: "b6", bg_img: null, bg_color: "#34AADD", title:'Цветок, который стоит на столе, такой загадочный.', description: 'А тут описание цветка, придающее ему загадочности и вызывающее интерес пользователя'},
    {id: "b7", bg_img: "url('http://bigpicture.ru/wp-content/uploads/2014/12/5-aula_medica3.jpg')", bg_color: "rgba(167, 80, 123, .8)", title:'Длинный заголовок большой новости', description: 'А тут описание цветка, придающее ему загадочности и вызывающее интерес пользователя'},
    {id: "b8", bg_img: "url('http://bigpicture.ru/wp-content/uploads/2014/12/5-aula_medica3.jpg')", bg_color: "rgba(102, 128, 174, .8)", title:'Длинный заголовок большой новости', description: 'А тут описание цветка, придающее ему загадочности и вызывающее интерес пользователя'},
    {id: "b9", bg_img: null, bg_color: "#F95A59", title:'Цветок, который стоит на столе, такой загадочный.', description: 'А тут описание цветка, придающее ему загадочности и вызывающее интерес пользователя'},
]

// Партнёры внизу страницы

export const arrParthers = [
    {id: "par6", URL: '/img/logo_1.jpg', alt: 'logo_1'}, 
    {id: "par7", URL: '/img/logo_2.jpg', alt: 'logo_2'}, 
    {id: "par8", URL: '/img/logo_3.jpg', alt: 'logo_3'}, 
    {id: "par9", URL: '/img/logo_4.jpg', alt: 'logo_4'}, 
    {id: "par10", URL: '/img/logo_5.jpg', alt: 'logo_5'}
]


// Products_extraOption:
//id: string - id товара
//iconAction: true/false - отображать/скрыть иконку "Акция"
//iconHit: true/false - отображать/скрыть иконку "Хит"
//iconBestPrice: true/false - отображать/скрыть иконку "Лучшая цена"
//oldPrice: string/null - старая цена товара (не обязательный параметр)

export const Products_extraOption = [
        {id: "p1", iconAction: true,  iconHit: true,  iconBestPrice: true,   oldPrice: '1 499 '},
        {id: "p2", iconAction: true,  iconHit: false, iconBestPrice: false,  oldPrice: null},
        {id: "p3", iconAction: false, iconHit: true,  iconBestPrice: false,  oldPrice: '2 699 '},
        {id: "p4", iconAction: true,  iconHit: true,  iconBestPrice: false,  oldPrice: '2 199 '},
    ]

// Products_Option:
//id: string - id товара
//productPhoto: string - ссылка на изображение
//title: string - название товара
//description: string - описание товара
//newPrice: string - новая цена товара

export const Products_Option = [
        {id: "p1", productPhoto: "https://www.ejin.ru/wp-content/uploads/2017/09/14-890.jpg", title:'Цветок, который стоит на столе, такой загадочный.', description: 'А тут описание цветка, придающее ему загадочности и вызывающее интерес пользователя', price: '799 '},
        {id: "p2", productPhoto: "https://doseng.org/uploads/posts/2018-06/1528416202_11.jpg", title:'Набор юного инстаблогера', description: 'Посмотрите на него. Он покажет всем какой вы классный и творческий. Главное не забыть посидеть на подоконнике с бокаль...', price: '13 666 '},
        {id: "p3", productPhoto: "https://get.wallhere.com/photo/2560x1600-px-landscape-river-rock-waterfall-1105857.jpg", title:'Лампа. Просто лампа.', description: 'В паре с загадочным цветком добавит загадочности вашему интерьеру', price: '1 789 '},
        {id: "p4", productPhoto: "https://i.pinimg.com/736x/59/17/5b/59175b1f980587cd8aa4c800835c9dec.jpg", title:'Классные деревянные минималистичные часы с...', description: 'Все в ту же копилку загдочности вашего интерьера и вашей натуры', price: '1 899 '},
    ]