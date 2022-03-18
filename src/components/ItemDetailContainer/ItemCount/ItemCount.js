export const ItemCount = ({max, min = 0, count, setCount}) => {

    const handleIncrement = () => {
        count < max && setCount(count + 1)
    }

    const handleDecrement = () => {
        count > min && setCount(count - 1)
    }

    return (
        <div className="counterGroup">
            <button onClick={ handleDecrement } className="circlebuttons"> - </button>
            <button disabled className="countertot">{count}</button>
            <button onClick={ handleIncrement } className="circlebuttons"> + </button>
        </div>
    )
}
