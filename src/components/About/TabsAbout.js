import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import CardHobbies from './CardHobbies';

function TabsAbout() {
  return (
    <Card>
      <Card.Header>
        <Nav variant="tabs" defaultActiveKey="#first">
          <Nav.Item>
            <Nav.Link href="#first">Hobbies</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#first">Hobbies</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#first">Hobbies</Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>
        <Card.Title>It's me!</Card.Title>
        <CardHobbies />
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default TabsAbout;