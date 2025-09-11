import ResourceCard from "./ResourceCard"; 
import "./DSA.css";
const resources = [
  {
    title: "C++ Basics",
    img: "https://img.youtube.com/vi/0bHoB32fuj0/0.jpg",
    link: "https://www.youtube.com/watch?v=0bHoB32fuj0&list=PLioQGwJpz056tdsT0ngciIdfuSk7NXSds&pp=gAQB"
  },
  {
    title: "Recursion Basic",
    img: "https://img.youtube.com/vi/yVdKa8dnKiE/0.jpg",
    link: "https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLioQGwJpz0570sgQdHU_T_U78d4bECyHM&pp=gAQB"
  },
  {
    title: "Sorting",
    img: "https://img.youtube.com/vi/HGk_ypEuS24/0.jpg",
    link: "https://www.youtube.com/watch?v=HGk_ypEuS24&list=PLioQGwJpz054IGn9t7Gu2SpxODk-3HnUX&pp=gAQB"
  },
  {
    title: "Array Easy",
    img: "https://img.youtube.com/vi/37E9ckMDdTk/0.jpg",
    link: "https://www.youtube.com/watch?v=37E9ckMDdTk&list=PLioQGwJpz055xOz3S5ID8ZU4LaUnvUgJy&pp=gAQB"
  },
  {
    title: "Array Medium",
    img: "https://img.youtube.com/vi/JDOXKqF60RQ/0.jpg",
    link: "https://www.youtube.com/watch?v=JDOXKqF60RQ&list=PLioQGwJpz055Nsj0uTfCLu3-Rl2eZYkde&pp=gAQB"
  },
  {
    title: "Array Hard",
    img: "https://img.youtube.com/vi/JDOXKqF60RQ/0.jpg",
    link: "https://www.youtube.com/watch?v=JDOXKqF60RQ&list=PLioQGwJpz055JhBVvWH7yjR6qEZA3wKgL&pp=gAQB"
  },
  {
    title: "Linked List Easy",
    img: "https://img.youtube.com/vi/Nq7ok-OyEpg/0.jpg",
    link: "https://www.youtube.com/watch?v=Nq7ok-OyEpg&list=PLioQGwJpz054s5dNn5dxXEvdMc8QTL3rD&pp=gAQB"
  },
  {
    title: "Linked List Medium",
    img: "https://img.youtube.com/vi/Nq7ok-OyEpg/0.jpg",
    link: "https://www.youtube.com/watch?v=Nq7ok-OyEpg&list=PLioQGwJpz054uuf2fyBGhZ5-dW9UtFUDo&pp=gAQB"
  },
  {
    title: "Linked List Hard ",
    img: "https://img.youtube.com/vi/lIar1skcQYI/0.jpg",
    link: "https://www.youtube.com/watch?v=lIar1skcQYI&list=PLioQGwJpz054BK21u1XTcPxvDo21ki9Ig&pp=gAQB"
  },
  {
    title: "Doubly LiknedList",
    img: "https://img.youtube.com/vi/D2vI2DNJGd8/0.jpg",
    link: "https://www.youtube.com/watch?v=D2vI2DNJGd8&list=PLioQGwJpz055PvQVWIgqj80v34nibOl3X&pp=gAQB"
  },
  {
    title: "Stack/Queue Easy",
    img: "https://img.youtube.com/vi/tqQ5fTamIN4/0.jpg",
    link: "https://www.youtube.com/watch?v=tqQ5fTamIN4&list=PLioQGwJpz054r7M8YsH7AWavI9ONUEiQU&pp=gAQB"
  },
  {
    title: "Stack/Queue Medium",
    img: "https://img.youtube.com/vi/7PrncD7v9YQ/0.jpg",
    link: "https://www.youtube.com/watch?v=7PrncD7v9YQ&list=PLioQGwJpz057TzpY6i5xIOt2N1uKTtT1n&pp=gAQB"
  },
  {
    title: "Tree Easy",
    img: "https://img.youtube.com/vi/_ANrF3FJm7I/0.jpg",
    link: "https://www.youtube.com/watch?v=_ANrF3FJm7I&list=PLioQGwJpz0572Ggwbzma16hEyQ7oEM3SM&pp=gAQB"
  },
  {
    title: "Tree Medium",
    img: "https://img.youtube.com/vi/eD3tmO66aBA/0.jpg",
    link: "https://www.youtube.com/watch?v=eD3tmO66aBA&list=PLioQGwJpz055ZlXG3oQ_R7-jqiiGNDZZX&pp=gAQB"
  },
  {
    title: "Tree Hard",
    img: "https://img.youtube.com/vi/fnmisPM6cVo/0.jpg",
    link: "https://www.youtube.com/watch?v=fnmisPM6cVo&list=PLioQGwJpz054rxpSxpGpDd1eyrAANXs0_&pp=gAQB"
  },
  {
    title: "Binary Search Tree",
    img: "https://img.youtube.com/vi/p7-9UvDQZ3w/0.jpg",
    link: "https://www.youtube.com/watch?v=p7-9UvDQZ3w&list=PLioQGwJpz057-HSfcxfohpOVGmPLspuLm&pp=gAQB"
  },
  {
    title: "BST Medium",
    img: "https://img.youtube.com/vi/ssL3sHwPeb4/0.jpg",
    link: "https://www.youtube.com/watch?v=ssL3sHwPeb4&list=PLioQGwJpz057LoX_3T0K2jaQlaG79tLVa&pp=gAQB"
  }
];
export default function Dsa() {
  return (
    <>
    <div className="Ds">Data Structure</div>
    <div className="dsa-grid">
      {resources.map((res, index) => (
        <ResourceCard key={index} {...res} />
      ))}
    </div>
    </>
  );
}