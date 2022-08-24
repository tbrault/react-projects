export default class Person {
  id: number;
  name: string;
  age: number;
  image: string;

  constructor(id: number, name: string, age: number, image: string) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.image = image;
  }
}
