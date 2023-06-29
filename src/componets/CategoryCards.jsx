export default function CategoryCards(props) {
  const title = props.title;
  const image = props.url;
  const spectator = props.spectator;
  const isNew = props.isNew;
  const tag = props.tag;

  return (
    <div className="card">
      <div className="newAbsolute">
        {isNew && <p className="new">New</p>}
        <img src={image} alt="" className="imgCard" />
      </div>
      <h2>{title}</h2>
      <p>{spectator}</p>
      <button>{tag}</button>
    </div>
  );
}
