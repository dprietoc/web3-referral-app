# Fuul Frontend Code Challenge

Fuul provides an SDK for clients to implement on their React websites. 

To increase the number of referrers, a modal appears right after users convert on the app, encouraging them to refer others and earn commissions.

## Objective

The task is to build an SDK and a website that uses it, where users connect their wallet, mint an NFT and are then shown the modal.

The objective of the modal is to encourage users to refer others. So it should include the necessary information and tools to convince users to share, including their personalized tracking link.

## Deliverables

The code should:
* Be written in Typescript
* Be structured using all best-practices you know
* Be easy to evolve and add new functionality

### SDK package
A stand-alone package that can be imported in any React project (for the purposes of this challenge there is no need to host it anywhere).

It should include:
* An export named `Fuul` which exposes only an `init`  method
* The `init` method takes an `apiKey` argument that identifies the `project` and calls a mocked API to get the project information from Fuul

  
### Website
The website will import the SDK package locally (`npm install ./sdk` or whatever directory you decide to put it in)

It should include:
* A "connect wallet" button (you can use any type of wallet or provider)
* A dynamic list of NFTs to mint 
* The mint button should prompt the user to sign a message (not actually minting!) using their wallet
* After minting (signing the message) the referral modal should be triggered

Minting conditions:
* Each NFT is an [ERC1155](https://docs.openzeppelin.com/contracts/3.x/erc1155), which has a limited number of editions (number of mints)
* NFTs have different category (Art, Gaming, PFPs, Music)
* The user cannot mint more than 2 NFTs from the same category

The modal should include:
* A tracking link identifying the user. Something like `{hostedURL}/?referrer={connectedAddress}` (using the hosted URL from your site and the address that is connected)
* The project information obtained from the mocked API call