

export default class BookstoreService {

    data = [
        {
            id: 1,
            title: 'Гарри Поттер и узник Азкабана',
            author: 'Кэтлин Джоан Роулинг  ',
            price: 32,
            coverImage: 'https://cdn1.ozone.ru/multimedia/1011027243.jpg'
        },
        {
            id: 2,
            title: 'Властелин колец: Хранители кольца',
            author: 'Джон Р.Р. Толкин',
            price: 45,
            coverImage: 'https://s1.livelib.ru/boocover/1000499615/o/328a/Tolkin_Dzh.R.R.__Vlastelin_kolets._Trilogiya._Kn._1._Hraniteli_koltsa.jpeg'
        },
    ];

    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.75) {
                    reject(new Error('Smtng bad happened'))
                } else resolve(this.data)
            }, 700);
        })
    }
}