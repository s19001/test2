import React from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: {},
      item: {
        prefecture: '',
        city: '',
        suburb: ''
        // zipcode: '',
        // prefcode: '',
        // address1: '',
        // address2: '',
        // address3: ''
      }
    }
  }

  async getAddress (address) {
    const getJSON = (uri, options) =>
      window
        .fetch(uri, options)
        .then(res => res.json())
        .then(json => ({
          prefecture: json.prefecture,
          city: json.city,
          suburb: json.suburb
        }))

    const options = { method: 'get' }
    const uri = 'https://postcode.teraren.com/postcodes.json?'
    const params = `s={text}`
    // const uri = 'https://zip-cloud.appspot.com/api/'
    // const params = `search?=zipcode={zipcode}`
    const data = await getJSON(uri + params, options)
    this.setState({ data: data })
  }

  handleUpdate (event) {
    const index = event.target.dataset.optionIndex
    const item = this.state.data[index]
    const { prefecture, city, suburb } = props.item
    const address = `${item.pregecture}${item.city}${item.suburb}`
    this.getData(item.text)
    this.setState({ item: item })
  }

  async componentDidMount () {
    this.getData()
  }

  render () {
    return (
      <div>
        <p>郵便番号から住所を検索</p>
        <input
          name='num'
          type='number'
          value={this.state.text}
          onChange={this.handleChange}
        />
        <input type='submit' value='送信' />
        <p>住所: {this.state.item}</p>
      </div>
    )
  }
}
// const SelectrView = props => (
// )
//
// const ListView = props => {
//   const { prefecture, city, suburb } = props.item
//   const address = `${item.pregecture}${item.city}${item.suburb}`
//   console.log('props', props)
//   return (
//     <List>
//       <ListItem>
//         <ListItemText primary={address} />
//       </ListItem>
//     </List>
//   )
// }

export default App
