import "./Header.css";
import { NavLink } from "react-router-dom";
import SearchImg from "../../../public/search.png";
import HeartImg from "../../../public/heart.png";
import BasketImg from "../../../public/basket.png";

export default function Header() {
  return (
    <>
      <header>
        <NavLink to="/">
          <div className="logo">
            <p>INFERNO</p>
          </div>
        </NavLink>

        <nav>
          <a href="/">Главная</a>
          <NavLink to="/catalog">
            <a href="">Каталог</a>
          </NavLink>
          <a href="/">Акции</a>
          <a href="/">Контакты</a>
        </nav>
        <div className="icons">
          <img src={SearchImg} alt="" />
          <img src={HeartImg} alt="" />
          <img src={BasketImg} alt="" />
        </div>
      </header>
    </>
  );
}
