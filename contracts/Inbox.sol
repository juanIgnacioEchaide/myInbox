pragma solidity ^0.4.17;

contract Inbox{

    string public message;

    function Inbox(string initialMessage)public{
        message=initialMessage;
    }

    function setMessage(string newMessage)public{
        message=newMessage;
    }
}

/* https://infura.io/ */
/* rinkeby.infura.io/v3/cb206ebee3434caca3eb17d07eed1464 */


/* https://rinkeby.etherscan.io/ */

/* https://faucet.rinkeby.io/ */