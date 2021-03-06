import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from 'next/app'

import withReduxStore from '../utils/withReduxStore'
import {Provider} from 'react-redux'

class MyApp extends App {
  constructor(props){
    super(props)
  }
  
  componentDidMount = () => {}

  render(){
    const { Component, pageProps, reduxStore} = this.props

    return(
      <Provider store={reduxStore}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}

export default withReduxStore(MyApp)
