import React from 'react'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      locate: '',
      zip_code: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    fetch('https://api.zipaddress.net/?zipcode=' + this.state.zip_code, {
      mode: 'cors'
    })
      .then(res => {
        return res.json()
      })
      .then(json => {
        this.setState({ locate: json.data.fullAddress })
      })
  }

  render () {
    return (
      <div>
        <p>郵便番号から住所を検索</p>
        <input
          type='text'
          value={this.state.zip_code}
          onChange={e => this.setState({ zip_code: e.target.value })}
        />
        <button onClick={this.handleClick}>住所を検索</button>
        <p>住所: {this.state.locate}</p>
      </div>
    )
  }
}

export default App

