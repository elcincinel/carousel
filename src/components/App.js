import { useState } from "react";

const imageData = [
  {
    id: 1,
    url: "https://media.istockphoto.com/id/1158374575/tr/foto%C4%9Fraf/bunun-m%C3%BCmk%C3%BCn-olaca%C4%9F%C4%B1n%C4%B1-hi%C3%A7-d%C3%BC%C5%9F%C3%BCnmemi%C5%9Ftim.jpg?s=612x612&w=0&k=20&c=QOgZrCdaArrTls-pFG5V6NJvQiOXWjac0pUFaWXVZsc=",
  },
  {
    id: 2,
    url: "https://media.istockphoto.com/id/1952428830/tr/foto%C4%9Fraf/rear-view-of-woman-swinging-against-trees-in-forest-in-bali.jpg?s=612x612&w=0&k=20&c=k2g2ll2l2b4KvFeIzcKS1qZ7Jk_cNZa_IftvT20cThs=",
  },
  {
    id: 3,
    url: "https://media.istockphoto.com/id/483629297/tr/foto%C4%9Fraf/spanish-woman-1.jpg?s=612x612&w=0&k=20&c=zEyOCKZxB6oQfC7CUs3cVfBjLzbdIuiBhbwu0m_FQxM=",
  },
];

const App = () => {
  const [image, setImage] = useState(imageData);
  const [index, setIndex] = useState(0);

  function handleRight() {
    const newRightIndex = index + 1;
    if (newRightIndex <= image.length - 1) {
      setIndex(newRightIndex);
    } else {
      setIndex(0);
    }
  }
  function handleLeft() {
    const newLeftIndex = index - 1;
    if (newLeftIndex >= 0) {
      setIndex(newLeftIndex);
    } else {
      setIndex(image.length - 1);
    }
  }

  return (
    <div>
      <img width="450" height="500" src={image[index].url} alt="bali" />
      <div>
        <button onClick={handleLeft}>Geri</button>
        <button onClick={handleRight}>İleri</button>
      </div>
    </div>
  );
};
export default App;
