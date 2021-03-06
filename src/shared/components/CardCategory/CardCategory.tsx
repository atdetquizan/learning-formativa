import './CardCategory.css';
import CategoryType from "../../../core/enum/category-type.enum";

function CardCategory({ category }: {┬ácategory: CategoryType }) {
    return <label className="card-category">{category}</label>
}

export default CardCategory;