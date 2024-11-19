// const s1 = "hello";
// console.log(typeof s1);

// const s2 = new String("Hello");
// console.log(typeof s2);

// console.log(window);
// alert(1);
// console.log(navigator.appVersion);

//Object literal
const book1 = {
  title: "book1",
  author: "john doe",
  year: "2013",
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year} `;
  },
};

const book2 = {
  title: "book2",
  author: "jane doe",
  year: "2019",
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year} `;
  },
};
//console.log(book2.getSummary());

// console.log(Object.values(book1));
// console.log(Object.keys(book1));
