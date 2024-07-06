// Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.

const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
    }

const arr = Object.values(numbers);

for (i = 0; i < arr.length; i++) {
    if (arr[i] >= 3){
        console.log(arr[i]);
    }
}

// Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.

const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
    {
    userId: 10,
    userName: "Alex",
    text: "lorem ipsum",
    rating: {
    likes: 10,
    dislikes: 2, // вывести это число
    },
    },
    {
    userId: 5, // вывести это число
    userName: "Jane",
    text: "lorem ipsum 2", // вывести этот текст
    rating: {
    likes: 3,
    dislikes: 1,
    },
    },
    ],
    };

console.log(post.author, post.comments[0].rating.dislikes, post.comments[1].userId, post.comments[1].text);

// Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя метод forEach.

const products = [
    {
    id: 3,
    price: 200,
    },
    {
    id: 4,
    price: 900,
    },
    {
    id: 1,
    price: 1000,
    },
    ];

products.forEach((product) => {
    product.price = product.price * 0.75;
});

console.log(products);

// 1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter. Исходные данные - массив products.
// 2. Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.

const products2 = [
    {
    id: 3,
    price: 127,
    photos: [
    "1.jpg",
    "2.jpg",
    ],
    },
    {
    id: 5,
    price: 499,
    photos: [],
    },
    {
    id: 10,
    price: 26,
    photos: [
    "3.jpg",
    ],
    },
    {
    id: 8,
    price: 78,
    },
];

const filtered = products2.filter((product) => {
    if (product.photos && product.photos.length != 0) return true
    return false
});

const sorted = products2.sort((product1, product2) => {
    if (product1.price > product2.price) {
        return 1;
    } 
    else if (product1.price < product2.price) {
        return -1;
    }
    else return 0;
});

console.log(filtered);
console.log(sorted);