import React, { useState } from 'react';
import DisconnectBtn from './DisconnectBtn';

function WalletAddress({ address, handleDisconnect }) {
    const [copied, setCopied] = useState(false);

    function copyAddress() {
        navigator.clipboard.writeText(address).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
        });
    }

    return (
        <div className="flex flex-col items-center p-4 sm:p-6 dark:bg-gray-800 rounded-lg shadow-lg dark:text-gray-50 max-w-lg mx-auto">
            <div className="flex flex-col w-full space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4">
                <div className="flex justify-center sm:justify-start space-x-4">
                    <DisconnectBtn handleDisconnect={handleDisconnect} />
                </div>
                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full">
                    <div className="flex flex-col items-center sm:items-start w-full">
                        <h1 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-300">
                            Wallet Address:
                        </h1>
                        <div className="flex items-center space-x-2 w-full">
                            <p className="text-base sm:text-lg font-medium text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-700 py-2 px-4 rounded-md border border-gray-200 dark:border-gray-600 flex-grow">
                                {address}
                            </p>
                            <button
                                onClick={copyAddress}
                                className="flex items-center space-x-2 text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 focus:outline-none"
                                title="Copy Address"
                            >
                                {copied ? (
                                    <span className="text-green-500 dark:text-green-400">✔</span>
                                ) : (
                                    <span>📋</span>
                                )}
                                <span>{copied ? 'Copied!' : 'Copy'}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WalletAddress;
