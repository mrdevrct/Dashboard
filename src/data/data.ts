import { AxisDataType } from "../utils/Axis.types";
import { UsersType } from "../utils/Users.types";

const xAxisData: AxisDataType = [
  { name: "Jan", sale: 112_000 },
  { name: "Feb", sale: 99_000 },
  { name: "Mar", sale: 12_090 },
  { name: "Apr", sale: 99_900 },
  { name: "May", sale: 54_000 },
  { name: "Jun", sale: 85_000 },
  { name: "July", sale: 34_000 },
  { name: "Agu", sale: 18_594 },
  { name: "Sep", sale: 0 },
  { name: "Oct", sale: 73_000 },
  { name: "Nov", sale: 12_090 },
  { name: "Des", sale: 97_000 },
];

const users:UsersType = [
  {
    id: 1,
    firstname: "Mahdi",
    lastname: "Salehi",
    skill: "Front-end Developer",
    img: "images/IMG_20240909_145706.jpg"
  },
  {
    id: 2,
    firstname: "Mohammad",
    lastname: "Abdolahzadeh",
    skill: "Front-end Developer",
    img: "images/IMG_20240909_145706.jpg"
  },
  {
    id: 3,
    firstname: "Seyed Rasool",
    lastname: "Hosseini",
    skill: "Front-end Developer",
    img: "images/IMG_20240909_145706.jpg"
  }
];

export { xAxisData , users };
