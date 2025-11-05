import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import GameImg from "../../Assets/about/RD2.webp";
import ThaiImg from "../../Assets/about/Thai.webp";
import AnimeImg from "../../Assets/about/luffy.gif";
import TravelImg from "../../Assets/about/farellones.webp";
import GymImg from "../../Assets/about/gym.webp";
import MusicImg from "../../Assets/about/Thai.webp";
import TeamImg from "../../Assets/about/Corinthians.webp";

function BasicExample() {
  return (
    <Container className="my-5"> 
      {/* O componente Row permite que os itens sejam dispostos em linha */}
      <Row className="g-4 justify-content-center"> 

        {/* GAMES */}
        <Col xs={12} md={6} lg={4} xl={3} className="d-flex">
          <Card className="flex-fill">
            <Card.Img variant="top" src={GameImg} />
            <Card.Body>
              <Card.Title>Games</Card.Title>
              <Card.Text>
                I love games — they improve my logical thinking, introduced me to amazing stories, and helped me make great friends. The GOAT is Red Dead Redemption 2!!!
              </Card.Text>
              <Button variant="primary">Ver mais</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* MARTIAL ARTS */}
        <Col xs={12} md={6} lg={4} xl={3} className="d-flex">
          <Card className="flex-fill">
            <Card.Img variant="top" src={ThaiImg} />
            <Card.Body>
              <Card.Title>Martial Arts</Card.Title>
              <Card.Text>
                I practice Muay Thai and Brazilian Jiu Jitsu, which taught me discipline and respect. My idol is the Poatan
              </Card.Text>
              <Button variant="primary">Ver mais</Button>
            </Card.Body>
          </Card>
        </Col>
        
        {/* ANIMES */}
        <Col xs={12} md={6} lg={4} xl={3} className="d-flex">
          <Card className="flex-fill">
            <Card.Img variant="top" src={AnimeImg} />
            <Card.Body>
              <Card.Title>Animes and Manga</Card.Title>
              <Card.Text>
                I love anime and manga, because I have been taught a lot since I was a kid! (Example: One Piece, Hunter x Hunter, Death Note, Kimetsu no Yaiba and many others too)
              </Card.Text>
              <Button variant="primary">Ver mais</Button>
            </Card.Body>
          </Card>
        </Col>
        
        {/* TRAVEL */}
        <Col xs={12} md={6} lg={4} xl={3} className="d-flex">
          <Card className="flex-fill">
            <Card.Img variant="top" src={TravelImg} />
            <Card.Body>
              <Card.Title>Travel</Card.Title>
              <Card.Text>
                I'm passionate about traveling and discovering new cultures — I love talking to people and learning their customs.
              </Card.Text>
              <Button variant="primary">Ver mais</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* GYM */}
        <Col xs={12} md={6} lg={4} xl={3} className="d-flex">
          <Card className="flex-fill">
            <Card.Img variant="top" src={GymImg} />
            <Card.Body>
              <Card.Title>Gym</Card.Title>
              <Card.Text>
                The gym keeps me physically and mentally strong — it has always helped me a lot.
              </Card.Text>
              <Button variant="primary">Ver mais</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* MUSIC */}
        <Col xs={12} md={6} lg={4} xl={3} className="d-flex">
          <Card className="flex-fill">
            <Card.Img variant="top" src={ThaiImg} />
            <Card.Body>
              <Card.Title>Music</Card.Title>
              <Card.Text>
                I love listening to music, I basically have it on all day. My taste is mixed — classical music, pagode, trap, and more. My favorite song is “Tá Escrito” by Grupo Revelação.
              </Card.Text>
              <Button variant="primary">Ver mais</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* MY TEAM */}
        <Col xs={12} md={6} lg={4} xl={3} className="d-flex">
          <Card className="flex-fill">
            <Card.Img variant="top" src={TeamImg} />
            <Card.Body>
              <Card.Title>My Team</Card.Title>
              <Card.Text>
                Of course, I have my team. Corinthians since I was born — thanks to my hero, MY DAD!
              </Card.Text>
              <Button variant="primary">Ver mais</Button>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>
  );
}

export default BasicExample;