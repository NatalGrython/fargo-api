pragma solidity >=0.5.0 <0.6.0;

//Подключение файлов
import "./SafeMath.sol";
import "./Ownable.sol";

//Контракт для баллов
contract Balls is Ownable{
    using SafeMath for uint256;
    
    //Общее кол-во баллов в системе
    uint public totalSupply = 0;
    
    //Переменная для хранения кол-во учебных баллов у определенного студента
    mapping(address => uint) public  balances;
    
    //Переменная для хранения суммы баллов
    uint internal results;

    //Функция вывода кол-ва баллов у оперделенного студента
    function balanceOf(address owner) external view returns (uint balance) {
        return balances[owner];
    }
    
    //Функция передачи баллов оперделенному студенту
    function transferBalls(address to, uint value) internal returns (bool success) {
        if (balances[owner] >= value && to != owner){
            balances[owner] -= value; 
            balances[to] = value;
            emit TransferBall(owner, to, value);
            return true;
        } else {
            return false;
        }
       
    }
    
    //Событие передачи баллов оперделенному студенту
    event TransferBall(address indexed _from, address indexed _to, uint _value);
    
}