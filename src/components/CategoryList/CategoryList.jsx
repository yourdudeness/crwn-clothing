import CategoryItem from '../CategoryItem/CategoryItem';
import './CategoryList.scss'

const CategoryList = ({data}) => {
    return (
        <div className="categories-container">
        {data.map((category) => (
          <CategoryItem key={category.id} category={category}/>
        ))}
      </div>
    );
};

export default CategoryList;