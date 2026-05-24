import Child from "./Child2";

function Parent2() {
  function New() {
    //temporary
  }
  const employees=[{name:"Harshil" , salary:90000 , id:5, rating:"Good"},
    {name:"Shrey" , salary:10000 , id:5, rating:"Good"},
    {name:"Vrutik" , salary:5000 , id:5, rating:"Good"},
    {name:"Dhairya" , salary:60000 , id:5, rating:"Good"},
    {name:"Dharm" , salary:4000 , id:5, rating:"Good"},
  ]
  return (
    <>
      <h1>Employee Details</h1>
      {
        employees.filter((b)=>salary==10000).map((a)=>(
            <div>
                <br />
                <h2>{item.name}</h2>
                <h2>{item.id}</h2>
                <h2>{item.ratzing}</h2>
                <h2>{item.seller4}</h2>
          <br />
            </div>
        ))
      }
    </>
  );
}
export default Parent2;
