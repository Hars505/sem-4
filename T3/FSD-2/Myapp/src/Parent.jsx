import Child from "./Child";

function Parent() {

  const details=[{title:"T.V." , price:90000 , rating:"5", seller:"Amazon"},
                {title:"Fan" , price:11000 , rating:"3", seller:"Flipkart"},
                {title:"Refrigerator" , price:80000 , rating:"4", seller:"Amazon"},
                {title:"Desktop" , price:40000 , rating:"5", seller:"blinkit"},
                {title:"camera" , price:400000 , rating:"4", seller:"Amazon"}
  ]
  return (
    <>
      <h1>Parent component</h1>
      <Child data={details}/>
    </>
  );
}
export default Parent;
