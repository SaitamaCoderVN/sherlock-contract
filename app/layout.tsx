"use client";
import { Orbitron } from "next/font/google";
import "./globals.css";
import "./layout.css";
import { useEffect, useState } from "react";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const chars = [
      "REENTRANCY", "OVERFLOW", "UNDERFLOW", "FRONTRUNNING", "FLASHLOAN",
      "ORACLE", "SIGNATURE", "DELEGATE", "TIMELOCK", "PROXY",
      
      "THEdao", "POLYNETWORK", "RONIN", "WORMHOLE", "NOMAD",
      "HARMONY", "WINTERMUTE", "CREAM", "COMPOUND", "BADGER",
      
      "ETHEREUM", "BITCOIN", "BLOCKCHAIN", "CONSENSUS", "MINING",
      "SATOSHI", "NAKAMOTO", "VITALIK", "BUTERIN", "DEFI",
      
      "SOLIDITY", "VYPER", "METAMASK", "HARDHAT", "TRUFFLE",
      "OPENZEPPELIN", "CHAINLINK", "AAVE", "UNISWAP", "CURVE",
      
      "ACCESSCONTROL", "DOS", "ARITHMETIC", "UNCHECKED", "SELFDESTRUCT",
      "DELEGATECALL", "STORAGE", "COLLISION", "GRIEFING", "SANDWICH"
    ];
    const keywords = ['SHERLOC', 'CONTRACT'];
    let currentKeywordIndex = 0;
    
    const createMatrixColumn = () => {
      const columnLeft = document.createElement('div');
      columnLeft.className = 'matrix-column blue-matrix';
      columnLeft.style.left = `${Math.random() * 30}%`;
      columnLeft.style.top = `${Math.random() * 100}%`;
      columnLeft.style.animationDuration = `${3 + Math.random() * 2}s`;
      
      const randomWord = chars[Math.floor(Math.random() * chars.length)];
      columnLeft.textContent = randomWord;
      
      const columnRight = document.createElement('div');
      columnRight.className = 'matrix-column red-matrix';
      columnRight.style.right = `${Math.random() * 30}%`;
      columnRight.style.top = `${Math.random() * 100}%`;
      columnRight.style.animationDuration = `${3 + Math.random() * 2}s`;
      
      const randomWordRight = chars[Math.floor(Math.random() * chars.length)];
      columnRight.textContent = randomWordRight;
      
      document.querySelector('.matrix-container')?.appendChild(columnLeft);
      document.querySelector('.matrix-container')?.appendChild(columnRight);
      
      setTimeout(() => {
        columnLeft.remove();
        columnRight.remove();
      }, 5000);
    };

    const typeKeyword = async (keyword: string) => {
      const keyPart = document.createElement('div');
      keyPart.className = 'key-part';
      if (currentKeywordIndex === 0) {
        keyPart.classList.add('blue-matrix');
      } else {
        keyPart.classList.add('red-matrix');
      }
      keyPart.textContent = keyword;
      document.querySelector('.key-container')?.appendChild(keyPart);

      keyPart.style.animation = `typeKey 1s forwards`;
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (currentKeywordIndex === keywords.length - 1) {
        keyPart.classList.add('key-complete');
        setTimeout(() => {
          document.querySelector('.matrix-container')?.classList.add('unlock-screen');
          setTimeout(() => setLoading(false), 2000);
        }, 1000);
      }
    };

    const startKeywordSequence = async () => {
      for (const keyword of keywords) {
        await typeKeyword(keyword);
        currentKeywordIndex++;
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    };

    const interval = setInterval(createMatrixColumn, 50);
    startKeywordSequence();

    return () => clearInterval(interval);
  }, []);

  return (
    <html lang="en">
      <body className={orbitron.className}>
        {loading && (
          <div className="matrix-container">
            <div className="key-container" />
          </div>
        )}
        {children}
      </body>
    </html>
  );
}
