export interface CryptoAlgorithm {
    name: string;
    title: string;
    description: string;
    gistUrl: string;
}

export enum CryptoAlgorithmName {
    AES = 'aes',
    CAESARS = 'caesars',
    DES = 'des',
    GRILLE = 'grille',
    HILL = 'hill',
    LUCIFER = 'lucifer',
    PLAYFAIR = 'playfair',
    VIGENERE = 'vigenere',
    DSA = 'dsa',
    RSA = 'rsa',
    SOLIDITY = 'solidity',
}