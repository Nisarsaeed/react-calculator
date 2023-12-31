import {Key} from "./Key";
import "./keypannel.css"

export const KeysPannel = ({ onKeyClick }) => {
  const numericKeys = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];
  const operatorKeys = ['+', '-', 'x', '/'];
  const specialKeys = ['AC', '='];

  return (
    <div  className="key-panel">
      {numericKeys.map((value) => (
        <Key key={value+1} value={value} onclick={onKeyClick} />
      ))}
      {specialKeys.map((value) => (
        <Key key={value+1} value={value} onclick={onKeyClick} />
      ))}
      {operatorKeys.map((value) => (
        <Key key={value+1} value={value} onclick={onKeyClick} />
      ))}
    </div>
  );
};