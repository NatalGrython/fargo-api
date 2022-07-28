pragma solidity >=0.5.0 <0.6.0;

import "./Ownable.sol";
import "./SafeMath.sol";

//Контракт для обозначения уникального диплома или грамоты
contract Diplom is Ownable{
    using SafeMath for uint256;
    
    //Переменная для хранения кол-ва дипломов у оперделенного студента
    mapping(address => uint) OwnerDiplomsCount;
    
    //Переменная проверки наличия диплома у оперделенного студента
    mapping(uint => address) DiplomsToOwner;
    
    //Структура диплома
    struct diplom {
        
        //Уникальный номер
        uint number;
        
        //Владелец
        address owner;
    }
    
    //Массив дипломов для хранения
    diplom [] diploms;
    
    //Функция вывода кол-ва дипломов у оперделенного студента
    function balanceOf(address owner) external view returns (uint) {
        return OwnerDiplomsCount[owner];
    }
    
    //Функция вывода владельца диплома по уникальному номеру 
    function ownerOf(uint tokenId) external view returns (address) {
        return DiplomsToOwner[tokenId];
    }
    
    //Функция передачи диплома оперделенному студенту
    function transferDiplom(address to, uint tokenId) internal {
        OwnerDiplomsCount[to] = OwnerDiplomsCount[to]+1;
        OwnerDiplomsCount[msg.sender] = OwnerDiplomsCount[msg.sender]-1;
        DiplomsToOwner[tokenId] = to;
        emit TransferDip(msg.sender, to, tokenId);
    }
    
    //Функция занесения дипломов 
    function setDiploms(uint tokenId) onlyOwner public {
        diploms.push(diplom(tokenId, owner));
        DiplomsToOwner[tokenId] = owner;
        OwnerDiplomsCount[owner] = OwnerDiplomsCount[owner]+1;
        emit SetDiploms(owner, tokenId);
    }
  
    //Событие отправки диплома
    event TransferDip(address indexed _from, address indexed to, uint tokenId);
    
    //Событие занесение диплома
    event SetDiploms(address indexed _from, uint tokenId);
}