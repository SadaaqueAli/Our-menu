import Head from './components/Head/Head';
import Recipe from './components/Recipe/Recipe';
import Order from './components/Order/Order';
import './App.css';

function App() {
  const recipes = [
    {
      id: 1,
      title: "Chicken Biryani",
      img: "https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.jpg?s=612x612&w=0&k=20&c=adU_N0P-1SKMQLZu5yu7aPknfLLgbViI8XILqLP92A4=",
      description: "Aromatic and flavorful chicken biryani cooked with fragrant basmati rice, spices, and tender chicken pieces.",
      stock: 5,
    },
    {
      id: 2,
      title: "Beef Nihari",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNboeupuKaxNBPAXC8JuBPWp3NFVmO5K9IAA&s",
      description: "A rich and spicy slow-cooked beef stew, traditionally enjoyed as a breakfast dish, with a deep and complex flavor.",
      stock: null,
    },
    {
      id: 3,
      title: "Daal Chawal",
      img: "https://www.masala.tv/wp-content/uploads/2019/11/Daal-Chawal.jpg",
      description: "A comforting and nutritious combination of lentil curry (daal) served with steamed rice (chawal), popular in South Asian cuisine.",
      stock: 20,
    },
    {
      id: 4,
      title: "Chinese Stir-Fry",
      img: "https://i.ytimg.com/vi/nDGBYktRSKQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA9kJxMKMem_-p2X9y4ooPltI_cwg",
      description: "A savory and vibrant stir-fry with a mix of fresh vegetables and choice of meat, tossed in a flavorful sauce.",
      stock: 0,
    },
    {
      id: 5,
      title: "Mutton Mandi",
      img: "https://i0.wp.com/kabsaexpress.com/wp-content/uploads/2023/06/Mutton-Mandi-%D9%85%D9%B9%D9%86-%D9%85%D9%86%D8%AF%DB%8C.jpg?fit=1800%2C1232&ssl=1",
      description: "A traditional Middle Eastern dish featuring spiced mutton and rice, cooked together with a blend of aromatic spices and herbs.",
      stock: 2,
    },
    {
      id: 6,
      title: "Chicken Karahi",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0mkNvgBKVcWLgHUxleKosq6Qd5m8x5zMGJQ&s",
      description: "A spicy and tangy chicken curry cooked in a wok-like pan (karahi) with tomatoes, green chilies, and a variety of spices.",
      stock: 4,
    },
  ];
  

  return (
    <div>
      <Head />
      <div className="parent-container">
        {recipes?.map((dishes) => (
          <Recipe key={dishes.id} dishes={dishes} />
        ))}
      </div>
      <Order />
    </div>
  );
}

export default App;
