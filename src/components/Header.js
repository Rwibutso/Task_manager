import Button from "./Button"

const Header = ({ tittle, onAddbutton, showAdd }) => {
   
  return (
    <header className="header">
        <h1>{tittle}</h1>
        <Button color={showAdd ? "red" : "green"} text={showAdd ? "Close" : "Add"} onClick={onAddbutton}/>
    </header>
  )
}

export default Header