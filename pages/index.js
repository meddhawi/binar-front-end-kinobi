import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from './components/layout'
import Navbars from './components/navbar'
// import { Card, Button } from 'reactstrap'
import { Card, Button } from 'react-bootstrap'

export default function Home() {

  return (
    <Layout title="Dashboard">
      <Navbars />

      <div className='container p-5 m-5'>
        <Card style={{ width: '18rem' }}>
          <Card.Img 
          variant="top" 
          src="http://www.acacia-wood.com/themes/jtherczeg-multi//assets/images/acacia/empty-img.png" 
          />
          <Card.ImgOverlay>
          <div className={`${styles.column}`}>
            <button className={`${styles.btncard}`}>
              <Image src="/edit.svg" 
                alt='edit'
                width={20}
                height={20}
              />
            </button>
            <button className={`${styles.btncard}`}>
            <Image src="/trash.svg" 
            alt='edit'
            width={20}
            height={20}
            />
            </button>

          </div>  

          </Card.ImgOverlay>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the cards content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

      </div>
    </Layout>
  )
}
