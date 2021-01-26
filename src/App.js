import React from 'react'
// import ReactDOM from 'react-dom'
// import PropTypes from 'prop-types'
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


class MoneyBook extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      books: []
    }
    this.URI = "http://localhost:3000/ReactJS/budget.json"
  }

  componentDidMount () {
    window
      .fetch(this.URI)
      .then(res => res.json())
      .then(books => this.setState({ books }))
  }

  render () {
    const books = this.state.books
    // if (!books.length) return <div>Now Loading...</div>
    return (
      <>
        <h1>MoneyBook</h1>
        <TableView books={books} />
        <EntryView />
      </>
    )
  }
}

const TableView = props => {
  const { books } = props
  const headings = ['date', 'item', 'income', 'expenses']
  return (
    <table className='book'>
      <MatrixHeader headings={headings} />
      <MatrixBody books={books} />
    </table>
  )
}

const MatrixHeader = props => (
  <thead data-type='ok'>
    <tr>
      {props.headings.map(heading => (
        <th key={heading}>{heading}</th>
      ))}
    </tr>
  </thead>
)

const MatrixBody = props => (
  <tbody>
    {props.books.map(book => (
      <BookItem book={book} key={book.date + book.item} />
    ))}
  </tbody>
)

const BookItem = props => {
  const { date, item, amount } = props.book
  const isNegative = amount => amount < 0
  return (
    <tr>
      <td>{date}</td>
      <td>{item}</td>
      <td>{isNegative(amount) ? null : amount}</td>
      <td>{isNegative(amount) ? Math.abs(amount) : null}</td>
    </tr>
  )
}

class EntryView extends React.Component {
  render () {
    return (
      <div className='entry'>
        <fieldset>
          <legend>記帳</legend>
          <fieldset>
            <legend>入出金</legend>
            <label>
              <input type='radio' value='on' name='cash' />
              入金
            </label>
            <label>
              <input type='radio' value='off' name='cash' />
              出金
            </label>
          </fieldset>
          <label className='box'>
            日付
            <input type='text' />
          </label>
          <label className='box'>
            項目
            <input type='text' />
          </label>
          <label className='box'>
            金額
            <input type='text' />
          </label>
          <button>追加</button>
        </fieldset>
      </div>
    )
  }
}
export default MoneyBook