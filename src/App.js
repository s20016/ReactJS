import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import './App.css'


/* 作りながら学ぶ REACT (p. 125-130) R1 */
/*
const MoneyBook = () => {
  const books = [
    { date: '1/1', item: 'お年玉', amount: 10000 },
    { date: '1/3', item: 'ケーキ', amount: -500 },
    { date: '2/1', item: '小遣い', amount: 3000 },
    { date: '2/5', item: 'マンガ', amount: -600 }
  ]
  return (
    <div>
      <Title>小遣い帳</Title>
      <table className='book'>
        <thead>
          <tr>
            <th>日付</th>
            <th>項目</th>
            <th>入金</th>
            <th>出金</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <MoneyBookItem book={book} key={book.date + book.item} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
const MoneyBookItem = props => {
  const { date, item, amount } = props.book
  return (
    <tr>
      <td>date</td>
      <td>item</td>
      <td>{amount >= 0 ? amount : null}</td>
      <td>{amount < 0 ? -amount : null}</td>
    </tr>
  )
}
MoneyBookItem.propTypes = {
  book: PropTypes.object.isRequired
}
const Title = props => {
  return <h1>{props.children}</h1>
}
Title.propTypes = {
  children: PropTypes.string
}
ReactDOM.render(<MoneyBook />, document.getElementById('root'))
export default MoneyBook
*/


/* 作りながら学ぶ REACT (p. 125-130) R2 */

class MoneyBook extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      // books = []
    }
    this.URL = 'http://localhost:3000/books.json'
  }

  componentDidMount() {
    window
      .fetch(this.URL)
      .then(res => res.json())
      .then(books => this.setState(books))
  }

  render() {
    const header = [ '日付', '項目', '入金', '出金' ]
    return (
      <>
        <h1>MoneyBook</h1>
        <table>
          <tr>
            <th>{header[0]}</th>
            <th>{header[1]}</th>
            <th>{header[2]}</th>
            <th>{header[3]}</th>
          </tr>
        </table>
      </>
    )
  }
}

const ListView = props => {

}

const EntryView = props => {

}

export default MoneyBook