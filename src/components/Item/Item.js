
const Item = ({id, name, price, img, stock}) => {

    return(
        <article>
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name}></img>
            </picture>
            <section>
                <p>
                  Precio: ${price} 
                </p>
                <p>
                  Stock Disponible: {stock}
                </p>
            </section>
            <footer>
                <button>
                    Ver Detalle
                </button>
            </footer>
        </article>
    )
}

export default Item;