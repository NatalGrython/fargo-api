pragma solidity >=0.5.0 <0.6.0;

//Покдлючение файлов 
import "./Diplom.sol";
import "./Balls.sol";

//Основной контракт
contract Main is Diplom, Balls{
    
    //Функция контракта для передачи общего кол-ва баллов администратору 
    function ballToAdmin(uint value) public{
        balances[owner] = value;
        totalSupply = value;
        emit Mint(owner, value);
    }
    
    //Переменная для хранения суммы баллов
     mapping(address => uint) private results;
    
    //Функция начисления баллов за заслуги
    function giveBall(address to) public dontOwner {
      
        uint count = OwnerDiplomsCount[to];
        results[to] = results[to] / 10;
        count = count**2;
        results[to] = results[to] + count;
        transferBalls(to, results[to]);
        
    }
    
    //Функция проверки диплома
    function giveDiploms(address to, uint tokenId) public dontOwner {
        for (uint i = 0; i < diploms.length; i++){
            if(diploms[i].number == tokenId){
              transferDiplom(to, tokenId);
              OwnerDiplomsCount[to]++;
            }
        }
    } 
    
    //Функция передачи баллов в блокчейн
    function givetData(address owner, uint grade) public dontOwner {
       {
           results[owner] += grade;
           emit Data(owner, grade);
       }
    }
    
    //Событие о передачи оценок в блокчейн
    event Data(address indexed owner, uint grade);
    
    //Событие о создании кол-ва всех баллов
    event Mint(address indexed _from, uint _value);
    
}