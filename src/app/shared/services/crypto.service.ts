import { Injectable } from '@angular/core';
import path from 'node:path';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  private cards = [
    {
      title: 'AES',
      description: '1997 - The Advanced Encryption Standard (AES) is a symmetric block cipher with 128 bits block size and key sizes of 128, 192 and 256 bits. Not a pure implementation is provided.', 
      path: '/aes', 
      gistUrl: 'https://gist.github.com/Feliperojas2601/012ddf02460e8495b90d2e4c9e3021b8.js'
    },
    {
      title: 'Caesars',
      description: '50 BC - The Caesar cipher is a substitution monoalphabetic unilateral technique.',
      path: '/caesars',
      gistUrl: 'https://gist.github.com/Feliperojas2601/509f7d463fd4b7b33d88d9992ace83d5.js'
    }, 
    {
      title: 'DES',
      description: '1970 - The Data Encryption Standard (DES) is a block cipher invented in the early 1970s by IBM and the U.S. government (US patent 3,962,539). Not a pure implementation is provided.',
      path: '/des',
      gistUrl: 'https://gist.github.com/Feliperojas2601/bc5aae7fb01e5875cca153cedd932cda.js'
    }, 
    {
      title: 'Grille',
      description: '1881 - The Grille cipher is a transposition technique.',
      path: '/grille',
      gistUrl: 'https://gist.github.com/Feliperojas2601/3e7f16ca7df2407d24a99aa05bdf1135.js'
    }, 
    {
      title: 'Hill',
      description: '1929 - The Hill cipher is a substitution polyalphabetic technique.', 
      path: '/hill',
      gistUrl: 'https://gist.github.com/Feliperojas2601/92d11e20883bef841e35ef4e9c14336a.js'
    }, 
    {
      title: 'Lucifer',
      description: '1971 - The Lucifer cipher is a product (substitution-transposition) technique. Not a pure implementation is provided.',
      path: '/lucifer',
      gistUrl: 'https://gist.github.com/Feliperojas2601/7b68a1d8933611ebc8be559358ee0aa5.js'
    },
    {
      title: 'Playfair',
      description: '1854 - The Playfair cipher is a substitution monoalphabetic polygraphic technique.', 
      path: '/playfair',
      gistUrl: 'https://gist.github.com/Feliperojas2601/72c6d23ba123212880cfd9efcaf5a640.js'
    }, 
    {
      title: 'Vigenère',
      description: '16-th century - The Vigenère cipher is a substitution polyalphabetic based on a table technique.', 
      path: '/vigenere',
      gistUrl: 'https://gist.github.com/Feliperojas2601/1ceb6f3d531a5eb5c63609970e421087.js'
    }, 
    {
      title: 'DSA', 
      description: '1991 - The Digital Signature Algorithm (DSA) is a digital signature standard (DSS) for digital signatures.',
      path: '/dsa',
      gistUrl: 'https://gist.github.com/Feliperojas2601/ffa584820b207aeab9cc09eca5aa4b78.js'
    }
  ];

  constructor() { }

  public getCryptoList() {
    return this.cards;
  }

  public getCryptoByPath(path: string) {
    return this.cards.find(card => card.path === path);
  }
}
