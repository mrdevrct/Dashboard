import { AxisDataType } from "../utils/Axis.types";
import { TransactionsType } from "../utils/Transaction.types";
import { UserRowsType } from "../utils/UserRows.types";
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

const users: UsersType = [
  {
    id: 1,
    firstname: "Mahdi",
    lastname: "Salehi",
    skill: "Front-end Developer",
    img: "images/IMG_20240909_145706.jpg",
  },
  {
    id: 2,
    firstname: "Mohammad",
    lastname: "Abdolahzadeh",
    skill: "Front-end Developer",
    img: "images/IMG_20240909_145706.jpg",
  },
  {
    id: 3,
    firstname: "Seyed Rasool",
    lastname: "Hosseini",
    skill: "Front-end Developer",
    img: "images/IMG_20240909_145706.jpg",
  },
];

const transactions: TransactionsType = [
  {
    id: 1,
    customer: "Mahdi Salehi",
    userImg: "images/IMG_20240909_145706.jpg",
    date: "2 May 2024",
    amount: 195.5,
    status: "Declined",
  },
  {
    id: 2,
    customer: "Mohammad Abdolahzadeh",
    userImg: "images/IMG_20240909_145706.jpg",
    date: "22 Sep 2024",
    amount: 199,
    status: "Approved",
  },
  {
    id: 3,
    customer: "Seyed Rasool Hosseini",
    userImg: "images/IMG_20240909_145706.jpg",
    date: "14 Feb 2024",
    amount: 189,
    status: "Pending",
  },
];

const userRows: UserRowsType = [
  {
    id: 1,
    username: "Mahdi Salehi",
    status: "non-active",
    transactions: 12,
    img: "images/IMG_20240909_145706.jpg",
    email : "mahdisalehi@gmail.com"
  },
  {
    id: 2,
    username: "Mohammad Abdolahzadeh",
    status: "active",
    transactions: 100,
    img: "images/IMG_20240909_145706.jpg",
    email : "mohammadabdolahzadeh@gmail.com"
  },
  {
    id: 3,
    username: "Seyed Rasool Hosseini",
    status: "active",
    transactions: 21,
    img: "images/IMG_20240909_145706.jpg",
    email : "seyedrasoolhosseini@gmail.com"
  },
  {
    id: 4,
    username: "Amin Saeedi",
    status: "active",
    transactions: 201,
    img: "images/IMG_20240909_145706.jpg",
    email : "aminsaeedi@gmail.com"
  },
  {
    id: 5,
    username: "Hamid Rasooli",
    status: "non-active",
    transactions: 210,
    img: "images/IMG_20240909_145706.jpg",
    email : "hamidrasooli@gmail.com"
  },
];

export { xAxisData, users, transactions, userRows };
