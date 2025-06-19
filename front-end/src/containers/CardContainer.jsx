import Card from '../components/Card'
import { fetchCards } from "../api.js";
export default function CardContainer(){
  const [cards, setCards] = useState([]);
  useEffect(() => {
      fetchCards().then((data) => setCards(data.results));
    }, []);
    const cardElements = cards.map((card, id) => (
      <Card key={id} card={card}/>))
  return(
    <>
      
    </>
  )
}