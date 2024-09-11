export function Recipe({ dishes }) {
  return (
    <div>
      <img src={dishes.img} alt={dishes.title} />
      <div>
        <h3>{dishes?.title}</h3>
        <p>{dishes?.description.slice(0, 100)}...</p>
        <div>
          <span>
            {dishes?.stock === 0 || dishes?.stock === null ? "Out of stock" : dishes.stock}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
