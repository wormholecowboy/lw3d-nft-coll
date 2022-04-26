import { Contract, providers, utils } from 'ethers';
import Head from 'next/head';
import React, { useEffect, useState, UseRef } from 'react';
import Web3Modal from 'web3modal';
import { abi, NFT_CONTRACT_ADDRESS } from '../constants';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [presaleStarted, setPresaleStarted] = useState(false);
  const [presaleEnded, setPresaleEnded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isOwner, setIsOwner] = useState(false);
  const [tokenIdsMinted, setTokenIdsMinted] = useState('0');
  const web3ModalRef = useRef();

  const presaleMint = async () => {
    try {
      const signer = await getProviderOrSigner(true);
      const whitelistContract = new Contract(NFT_CONTRACT_ADDRESS, abi, signer);

      const tx = await whitelistContract.presaleMint({
        value: utils.parseEther('0.01'),
      });
      setLoading(true);
      await tx.wait();
      setLoading(false);
      window.alert('You successfully minted a Crypto Dev! Holy Shnikes!!');
    } catch (err) {
      console.error(err);
    }
  };

  const publicMint = async () => {
    try {
      const signer = await getProviderOrSigner(true);
      const whitelistContract = new Contract(NFT_CONTRACT_ADDRESS, abi, signer);
      const tx = await whitelistContract.mint({
        value: utils.parseEther('0.01'),
      });
      setLoading(true);
      await tx.wait();
      setLoading(false);
      window.alert('You successfully minted a Crypto Dev!');
    } catch (err) {
      console.error(err);
    }
  };
}

// things I'm learning
/*
-separate out the conditional logic from the mint functions
-use try and catch for all your function as well as async/await

*/
