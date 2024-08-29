import React, { useState } from 'react';
import { walletAddressStyles } from '../styles/WalletAddressStyle';

/**
 * WalletAddress component displays the wallet address and provides a button to copy it to the clipboard.
 * @param {Object} props - Component props.
 * @param {string} props.address - The wallet address to display.
 * @param {Function} props.handleDisconnect - Function to handle disconnecting the wallet (not used in this component but passed in).
 * @returns {JSX.Element} The rendered WalletAddress component.
 */
function WalletAddress({ address, handleDisconnect }) {
    const [copied, setCopied] = useState(false);

    function copyAddress() {
        navigator.clipboard.writeText(address).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
        });
    }

    return (
        <div className={walletAddressStyles.container}>
            <div className={walletAddressStyles.addressSection}>
                <h1 className={walletAddressStyles.title}>
                    Wallet Address:
                    <button
                        onClick={copyAddress}
                        className={walletAddressStyles.copyButton}
                        title="Copy Address"
                    >
                        {copied ? (
                            <span className={walletAddressStyles.copiedIcon}>✔</span>
                        ) : (
                            <span>📋</span>
                        )}
                        <span>{copied ? 'Copied!' : 'Copy'}</span>
                    </button>
                </h1>
                <div className={walletAddressStyles.addressWrapper}>
                    <p className={walletAddressStyles.addressText}>
                        {address}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default WalletAddress;