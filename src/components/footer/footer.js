import "./footer.css";

export default function Footer({url, title, weekday, date}) {
        return (
        <footer>
          <div className="footer-poster">
            <img src={url}/>
          </div>
          <p>{title}</p>
          {weekday != undefined ? <h2>{weekday} - {date}</h2> : <></>}
        </footer>
        );
}