import ProductCard from "./components/ProductCard";
import billGates from "./img/bill-gates.jpg";
import { useSelector } from "react-redux";

function App() {

  const products = useSelector(state => state.products.items)
  const wallet = useSelector(state => state.products.wallet)
  const basket = useSelector(state => state.products.basket)
  const total = useSelector(state => state.products.total)

  return (
    <div className="app">
      <header>
        <nav id="navbar">
          <img src={billGates} alt="Bill Gates" />
          <h1>Spend Bill Gates' Money</h1>
        </nav>
      </header>

      <div className="money">${wallet.toLocaleString()}</div>

      <section>

        {
          products.map(product => {
            return <ProductCard key={product.id} product={product} />
          })
        }



      </section>

      <div className="basket">

        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Piece</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody>
            {
              basket.map(product => {
                return <tr key={product.id}>
                  <td>{product.productName}</td>
                  <td>x{product.count}</td>
                  <td className="basket-price">${Number(product.count) * Number(product.productPrice)}</td>
                </tr>
              })
            }
          </tbody>
          <tfoot>
            <tr>
              <td><strong>TOTAL</strong></td>
              <td></td>
              <td>${total}</td>
            </tr>
          </tfoot>
        </table>

      </div>
    </div>
  );
}

export default App;
