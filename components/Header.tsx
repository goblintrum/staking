/* eslint-disable @next/next/no-img-element */
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Header() {
  // Helpful thirdweb hooks to connect and manage the wallet from metamask.
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();

  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <div>
          <Link href="/" passHref role="button">
            <img
              src={`/logo.png`}
              alt="Goblintrum Logo"
              width={60}
              style={{ cursor: "pointer" }}
            />
          </Link>
        </div>
      </div>
      <div className={styles.right}>
        <div>
          <Link href="https://t.me/goblintrum" passHref role="button">
          <button
          className={styles.secondaryButton}
          >
            Telegram
          </button>
          </Link>
        </div>
        
        <div>
          <Link href="https://twitter.com/goblintrum" passHref role="button">
          <button
          className={styles.secondaryButton}
          >
            Twitter
          </button>
          </Link>
        </div>

        <div>
          <Link href="https://goblintrum.com/mint" passHref role="button">
          <button
          className={styles.secondaryButton}
          >
            Mint NFT
          </button>
          </Link>
        </div>
      </div>
      
    </div>
  );
}