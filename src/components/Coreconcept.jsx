function Coreconcept({ data }) {
  return (
    <>
      {data.map((item, index) => {
        const { title, description, image } = item;
        return (
          <li key={index}>
            <img src={image} alt="" />
            <h3>{title}</h3>
            <p>{description}</p>
          </li>
        );
      })}
    </>
  );
}

export default Coreconcept;
