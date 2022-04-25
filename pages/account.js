import Image from 'next/image'
import styles from '../styles/account.module.css'
import Header from './components/Header'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className={styles.body}>
        <Header/>
        <main className={styles.main}>
        <div className={styles.account}>
            <div className={styles.settings}>

            </div>
            <h2 className={styles.account_name}>Account 1</h2>
            <p className={styles.account_address}>0xb3gh3548937jmghfhffg433d</p>
            <div className={styles.activity}>
                <p>Send</p>
                <p>Receive</p>
                <p>Swap</p>
            </div>
            <div className={styles.token}>
                <p className={styles.name}>ETH</p>
                <p className={styles.balance}>0.01</p>
            </div>
            <p className={styles.add}>+</p>
        </div>
        <div className={styles.transactions}>
            <h2>Recent transactions</h2>
            <div className={styles.transaction}>
                <div className={styles.title}>
                    <h3 className={styles.tx_title}>Tx title</h3>
                    <p className={styles.tx_value}>0.05</p>
                </div>
                <div className={styles.details}>
                    <p className={styles.tx_from}>from Hexdee</p>
                    <p className={styles.tx_time}>5 mins</p>
                </div>
            </div>
            <div className={styles.transaction}>
                <div className={styles.title}>
                    <h3 className={styles.tx_title}>Tx title</h3>
                    <p className={styles.tx_value}>0.05</p>
                </div>
                <div className={styles.details}>
                    <p className={styles.tx_from}>from Hexdee</p>
                    <p className={styles.tx_time}>5 mins</p>
                </div>
            </div>
            <div className={styles.transaction}>
                <div className={styles.title}>
                    <h3 className={styles.tx_title}>Tx title</h3>
                    <p className={styles.tx_value}>0.05</p>
                </div>
                <div className={styles.details}>
                    <p className={styles.tx_from}>from Hexdee</p>
                    <p className={styles.tx_time}>5 mins</p>
                </div>
            </div>
            <div className={styles.transaction}>
                <div className={styles.title}>
                    <h3 className={styles.tx_title}>Tx title</h3>
                    <p className={styles.tx_value}>0.05</p>
                </div>
                <div className={styles.details}>
                    <p className={styles.tx_from}>from Hexdee</p>
                    <p className={styles.tx_time}>5 mins</p>
                </div>
            </div>
            <div className={styles.transaction}>
                <div className={styles.title}>
                    <h3 className={styles.tx_title}>Tx title</h3>
                    <p className={styles.tx_value}>0.05</p>
                </div>
                <div className={styles.details}>
                    <p className={styles.tx_from}>from Hexdee</p>
                    <p className={styles.tx_time}>5 mins</p>
                </div>
            </div>
            <div className={styles.transaction}>
                <div className={styles.title}>
                    <h3 className={styles.tx_title}>Tx title</h3>
                    <p className={styles.tx_value}>0.05</p>
                </div>
                <div className={styles.details}>
                    <p className={styles.tx_from}>from Hexdee</p>
                    <p className={styles.tx_time}>5 mins</p>
                </div>
            </div>
            
        </div>
        </main>
        <Footer/>
    </div>
  )
}