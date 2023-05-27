import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<h2 style={{ fontSize: "8px" }}>deployed by: Djiwandou 27-May-2023 19.40WIB</h2>
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
