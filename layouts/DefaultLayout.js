import Head from 'next/head'

import Sidebar from '../components/sidebar/Sidebar'
import styles from '../styles/Home.module.css'

function DefaultLayout({children}) {
    
    return (
        <div className={styles.container}>
      
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div style={{ height: '100hv', display:"flex" }}>
                <Sidebar></Sidebar>
                
                <main >
                    {children}

                    <footer className={styles.footer}>
                       <h5>Este es el otro pie de página</h5>
                    </footer>
                </main>

               
            </div>
        </div>
    )
}

export default DefaultLayout
