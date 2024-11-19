import Header from "../components/header";
import Card from "../components/card";
import "../styles/cardstyles.css"
import {Link} from "react-router-dom";

const mockData = [
    {
        id: 1,
        title: 'День рождения кошки бабушки',
        img_url: '',
        time: '2024-12-25 18:00',
        location: 'Квартира №5',
        description: 'Отметим за чаем с тортом!',
    },
    {
        id: 2,
        title: 'Концерт в парке',
        img_url: "../images/img.png",
        time: '2024-12-20 19:00',
        location: 'Центральный парк',
        description: 'Музыка, танцы и хорошее настроение.',
    },
    {
        id: 3,
        title: 'Семинар по программированию',
        img_url: '',
        time: '2024-11-30 14:00',
        location: 'Онлайн',
        description: 'Разбираем основы React и TypeScript!',
    },
    {
        id: 4,
        title: 'Фестиваль уличной еды',
        img_url: "../images/img.png",
        time: '2024-12-10 12:00',
        location: 'Площадь Согласия',
        description: 'Попробуйте кухни мира прямо в центре города!',
    },
    {
        id: 5,
        title: 'Выставка современного искусства',
        img_url: '',
        time: '2024-12-18 10:00',
        location: 'Галерея XXI века',
        description: 'Новые перспективы и яркие впечатления.',
    },
];


const MainPage = () => {
    return (<>
        <Header/>
        <div className="card-list">
            {mockData.map(event => (
                <Link to={`/current-event/${event.id}`}>
                    <Card
                        key={event.id}
                        title={event.title}
                        img_url={event.img_url}
                        time={event.time}
                        location={event.location}
                        description={event.description}
                    />
                </Link>
            ))}
        </div>
    </>)
}

export default MainPage;