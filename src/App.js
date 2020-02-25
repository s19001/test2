import React from 'react'
// import { List, ListItem, ListItemText } from '@material-ui/core'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      locate: '',
      zip_code: ''
      //item: {
      // prefecture: '',
      // city: '',
      // suburb: ''
      //zipcode: '',
      //address1: '',
      //address2: '',
      //address3: ''
      //}
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

  // var xhr = new XMLHttpRequest();

  //xhr.open('GET','https://zip-cloud.appspot.com/api/search?zipcode=7830060');
  //xhr.send()
  // componentDidMount () {
  // return fetch('https://zip-cloud.appspot.com/api/search?zipcode=7830060')
  // .then((response)=>response.json())
  //.then((responseJson) => {
  // this.setState({
  //    loading: true,
  //  data: responseJson,
  //    })
  // })
  //     xhr.open('GET','https://zip-cloud.appspot.com/api/search?zipcode=7830060');
  //     xhr.send()
  //     xhr.onreadystatechange = function() {
  //       if (xhr.readyState === 4 && xhr.status === 200)
  //         A(json)
  //   }
  //   console.log(data)
  //}

  // function A(json){
  //console.log(json.results)
  // }
  //   async getAddress (id) {
  //     const getJSON = (uri, options) =>
  //       window
  //         .fetch(uri, options)
  //         .then(res => res.json())
  //         .then(json => ({
  //           zipcode: json.zipcode,
  //           address1: json.address1,
  //           address2: json.address2,
  //           address3: json.address3
  //           // prefecture: json.prefecture,
  //           // city: json.city,
  //           // suburb: json.suburb
  //         }))
  //
  //     const options = { method: 'get' }
  //     // const uri = 'https://postcode.teraren.com/postcodes.json?'
  //     // const params = `s={text}`
  //     const uri = 'https://zip-cloud.appspot.com/api/'
  //     const params = `search?=zipcode={zipcode}`
  //     const data = await getJSON(uri + params, options)
  //     this.setState({ data: data })
  //   }
  //
  //   handleUpdate (event) {
  //     const index = event.target.dataset.optionIndex
  //     const item = this.state.data[index]
  //     this.getData(item.text)
  //     this.setState({ item: item })
  //   }
  //
  //   async componentDidMount () {
  //     this.getData()
  //   }

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
