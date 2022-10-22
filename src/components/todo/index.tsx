import { Row } from "../row"
import { data } from "../../mock/todo"

export const Todo = () => {
    return (
        <>
        {data.map(item => <Row key={item.id} {...item}/>)}
        </>
    )
}