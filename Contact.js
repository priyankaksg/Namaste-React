
const Contact=()=>{
  return(
    <div>
      <h1 className="font-bold text-2xl p-4 m-4">Contact Us</h1>
      <form>
        <input placeholder="name" className="p-2 m-2 border border-black"></input>
         <input placeholder="message" className="p-2 m-2 border border-black"></input>
         <button className="p-2 m-2 border border-black rounded-lg bg-gray-100 cursor-pointer">Submit</button>
      </form>
    </div>

  )
}
export default Contact;