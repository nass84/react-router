import { useLocation } from "react-router-dom";

export default function Contact() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
    const name = queryParams.get("name");

  return (
    <div>
      <h2>Hey {name} Contact us here</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum rerum,
        explicabo voluptates ad, dolor eveniet eligendi vitae similique, dicta
        molestias tempore provident id sed doloribus ducimus autem corrupti?
        Facilis, fuga.
      </p>
    </div>
  );
}
