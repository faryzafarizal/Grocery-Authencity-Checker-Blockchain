// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ProductOrigin {
    struct Product {
        string name;
        string country;
    }

    mapping(string => Product) private products;

    // Add product (admin only in real deployment)
    function addProduct(string memory barcode, string memory name, string memory country) public {
        products[barcode] = Product(name, country);
    }

    // Check if it's made in Malaysia
    function isMadeInMalaysia(string memory barcode) public view returns (bool) {
        return keccak256(bytes(products[barcode].country)) == keccak256(bytes("Malaysia"));
    }

    // Get full product details (optional)
    function getProduct(string memory barcode) public view returns (string memory name, string memory country) {
        Product memory p = products[barcode];
        return (p.name, p.country);
    }
}
