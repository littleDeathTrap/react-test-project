import "./Card.css";
const Card = (props) => {
  const percentOfProgress =
    (props.cource.finishedModules / props.cource.modules) * 100;
  return (
    <div className="card">
      <div className="image__container">
        <img src={props.cource.image} alt={props.cource.title} />
        <div className="level">{props.cource.level}</div>
      </div>
      <h3 className="card__title">{props.cource.title}</h3>

      <div className="card__info">
        <div className="user">
          <img src={props.cource.user.avatar} alt={props.cource.user.name} />
          <p>{props.cource.user.name}</p>
        </div>
        <div className="rating">
          <p>{props.cource.rating}</p>
        </div>
      </div>
      {props.cource.isMyCource ? (
        <div>
          <progress value={percentOfProgress} max="100">
            {percentOfProgress}%
          </progress>
          <div className="card__info">
            <p>
              {props.cource.finishedModules} / {props.cource.modules} Modules
            </p>
            <div>{percentOfProgress} %</div>
          </div>
        </div>
      ) : (
        <div className="card__info">
          <div>{props.cource.student} Student</div>
          <div>{props.cource.modules} Modules</div>
          <div>{props.cource.duration} sec</div>
        </div>
      )}
    </div>
  );
};
export default Card;
