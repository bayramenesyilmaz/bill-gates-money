import { useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { sellButton, buyButton } from "../redux/productsSlice";

function ProductCard({ product }) {

  const dispatch = useDispatch();
  const wallet = useSelector(state => state.products.wallet)

  const [piece, setPiece] = useState(0)

  function handleChange(e) {
    setPiece(e.target.value)
  }

  function handleSell() {
    setPiece(Number(piece) - 1)
    dispatch(sellButton({ id: product.id, piece: piece }))

  }
  function handleBuy() {
    setPiece(Number(piece) + 1)
    dispatch(buyButton({ id: product.id, piece: piece }))

  }

  return (
    <div className='product'>
      <div className='image-container'>
        <img className='product-image' src={product.image} alt={product.productName}/>
      </div>

      <h2 className='product-title'>{product.productName}</h2>
      <p className='product-price'>${product.productPrice}</p>

      <div className='product-buttons'>
        <button
          onClick={handleSell}
          className='sell-btn'
          disabled={product.count < 1 ? true : false}
        >Sell</button>

        <input className='price-input' type="text" value={piece} onChange={handleChange} />

        <button
          onClick={handleBuy}
          className='buy-btn'
          disabled={Number(product.productPrice) > Number(wallet) ? true : false}
        >Buy</button>
      </div>
    </div>
  )
}

export default ProductCard