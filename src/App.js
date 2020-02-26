import React from 'react'
import {
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Button,
  TextField
} from '@material-ui/core'

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
      <Card>
        <CardHeader title='郵便番号から住所を検索' />
        <CardActions>
          <TextField
            type='number'
            value={this.state.zip_code}
            onChange={e => this.setState({ zip_code: e.target.value })}
          />
          <Button variant='outlined' onClick={this.handleClick} color='primary'>
            住所を検索
          </Button>
        </CardActions>
        <CardContent>
          <p>住所: {this.state.locate}</p>
        </CardContent>
      </Card>
    )
  }
}

export default App
