export const ProductCard = ({ product, addProduct }) => {


    return(
        <li className="card">
            <div id="img">
                <img src={product.img} alt={product.name} />
            </div>
            <div id="info">
                <h3 className="title3">{product.name}</h3>
                <span className="caption">{product.category}</span>
                <span className="body">{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                <button className="button medium" onClick={() => addProduct(product)} >Adicionar</button>
            </div>
        </li>
    )
}