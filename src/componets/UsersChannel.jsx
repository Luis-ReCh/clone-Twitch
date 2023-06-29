export default function UsersChannel(props) {
  const image = props.image;
  const name = props.name;
  const title = props.title;
  const viewers = props.viewers;

  return (
    <div className="channels">
      <div>
        <img src={image} alt="" className="channelsImg" />
      </div>
      <div>
        <h5>{name}</h5>
        <p className="conversation">{title}</p>
      </div>
      <div>
        <div className="Online">
          <span className="onlineRed">🔴</span>
          <p>{viewers}</p>
        </div>
      </div>
    </div>
  );
}
