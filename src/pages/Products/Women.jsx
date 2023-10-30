import { useProducts } from '../../contexts/productsContext.jsx';
import { Item } from '../../components/itemListContainer/item/Item.jsx';
import { Loading } from '../../components/loading/Loading.jsx';
const WomensClothing = () => {
    const { products, loading } = useProducts();

    const filteredProducts = products.filter(item => {
        return item.category === "women's clothing";
    });

    return (
        <div className="item-list">
            {loading ? (
                <Loading />
            ) : (
                filteredProducts.map(item => (
                    <Item key={item.id} item={item} />
                ))
            )}
        </div>
    );
}

export { WomensClothing };