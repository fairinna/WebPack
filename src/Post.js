export default class Post {
  constructor(title, img) {
    this.title = title;
    this.date = new Date();
    this.img = img;
  }

  toString1() {
    return JSON.stringify(
      {
        title: this.title,
        img: this.img,
        date: this.date.toJSON(),
      },
      null,
      10
    );
  }
  get showUpperCase() {
    return this.title.toUpperCase();
  }
}
