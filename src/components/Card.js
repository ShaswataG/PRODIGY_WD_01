import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Card1(props) {
    return (
        <Card className={props.darkMode ? "card-dark" : "card-light"} style={{ width: '18rem' }}>
            <Card.Img className="card-image" variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
                <Button className={props.darkMode ? "card-button-dark" : "card-button-light"} variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}