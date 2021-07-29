import 'font-awesome/css/font-awesome.css'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
     <div className={styles.container}>
        <img id={styles.logo} src='/logo.png'/>
        
        <div className={styles.sign_in_container}>

            <div className={styles.connect_wallet_wrapper}>
               <button>
               <i className="fa fa-angle-left fa-1x" aria-hidden="true"></i>
               </button>
               <h1>Connect Wallet</h1>
            </div>
            <div className={styles.instruction_text}>
               <h3>You need an Etherium wallet to use Mint Gold Dust.</h3>
               <p>Please connect with one of the available wallets below.</p>
           </div>
           
           <div className={styles.metamask_portis_container}>
              
               <div className={styles.metamask}>
                 <div className={styles.metamask_logo}>
                    <img src='/metamask.png' />
                    <h4>Metamask</h4>
                  </div>
                 <div className={styles.metamask_desc}>
                    <p>A browser extension with great flexibility. The web’s most popular wallet.</p>
                  </div>
              </div>
              
               <div className={styles.portis}>
                  <div className={styles.portis_logo}>
                     <img src='/portis.png' />
                     <h4>Portis</h4>
                  </div>
                 <div className={styles.portis_desc}>
                    <p>A cloud-hosted wallet that’s easily accessible from any device.</p>
               </div>
               </div>
           </div>

         <div className={styles.select_provider_wrapper}>
            <button id={styles.select_provider}>Select a wallet provider</button>
         </div>
           
       </div>

      
    </div>
  )
}
