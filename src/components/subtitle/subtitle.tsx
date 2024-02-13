import "./style.css";

interface PropsSubtitle {
  title: string;
}

export default function Subtitle(props: PropsSubtitle) {
  return <h3 className="title">{props.title}</h3>;
}
