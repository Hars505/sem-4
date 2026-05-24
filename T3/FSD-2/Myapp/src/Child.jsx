function Child(props) {
  function New() {
    //temporary
  }
  return (
    <>
      {props.data.map((item) => (
        <div>
          <br />
          <h2>{item.title}</h2>
          <h2>{item.price}</h2>
          <h2>{item.rating}</h2>
          <h2>{item.seller}</h2>
          <br />
        </div>
      ))}
    </>
  );
}
export default Child;
