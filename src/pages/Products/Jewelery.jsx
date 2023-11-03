import { useProducts } from '../../contexts/fakeStoreApiContext.jsx';
import { Item } from '../../components/itemListContainer/item/Item.jsx';
import { Loading } from '../../components/loading/Loading.jsx';
const Jewelery = () => {
    const { products, loading } = useProducts();

    const filteredProducts = products.filter(item => {
        return item.category === 'jewelery';
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

export { Jewelery };
