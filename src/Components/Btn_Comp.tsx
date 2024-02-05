type Props = {
    message: string,
    handleClick: (name: string ) => void;

}


export default function Btn (props: Props) {
   
    return (
    <>
    <button onClick={() => props.handleClick('Button Name')}> Klick Me</button>
    </>
    )
}