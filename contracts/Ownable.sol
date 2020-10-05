pragma solidity >=0.4.20;

//Контракт для обозначения создателя(администратора) и студентов
contract Ownable {
    
    //Адрес создателя
    address public owner;
   
    //Конструктор контракта присваивающий адрес создателя
    constructor() public {
        owner = msg.sender;
    }
  
    //Модификатор доступа (только для создателя)
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }
   
   //Модификатор доступа для всех, кроме создателя 
    modifier dontOwner(){
        require(msg.sender != owner);
        _;
    }

}