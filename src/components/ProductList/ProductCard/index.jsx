export const ProductCard = ({ product }) => {
    return(
        <li className="card">
            <img src={product.img} alt={product.name} />
            <div>
                <h3 className="title3">{product.name}</h3>
                <span className="caption">{product.category}</span>
                <span className="body">{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                <button className="button medium" >Adicionar</button>
            </div>
        </li>
    )
}