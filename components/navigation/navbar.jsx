import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<h2 style={{ fontSize: "8px" }}>deployed by: Djiwandou 26-May-2023</h2>
			<a href="https://alchemy.com/?a=create-web3-dapp" target={"_blank"}>
				<img
					className={styles.alchemy_logo}
					src="/alchemy_logo.svg"
				></img>
			</a>
			<ConnectButton></ConnectButton>
		</nav>
	);
}
