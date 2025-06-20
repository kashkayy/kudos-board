export default function Category({selected, onCategoryClick}){
  return(
    <>
      <div className="category-btns">
        <button onClick={() => onCategoryClick("All")}>All</button>
        <button onClick={() => onCategoryClick("Recent")}>Recent</button>
        <button onClick={() => onCategoryClick("Celebration")}>Celebration</button>
        <button onClick={() => onCategoryClick("Inspiration")}>Inspiration</button>
        <button onClick={() => onCategoryClick("Thank you")}>Thank You</button>
      </div>
    </>
  )
}