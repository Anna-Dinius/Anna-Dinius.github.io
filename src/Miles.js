function Miles({flipped, onChange, distance}) {
  const kmInMi = 0.621371; // number of km in 1 mi

  return (
    <div>
      <label htmlFor="miles">Miles</label>

      <input 
        value={flipped ? distance: distance * kmInMi}
        id="miles" 
        placeholder="Miles"
        type="number"
        onChange={onChange}
        disabled={flipped === false}
      />          
    </div>
  )
}
export default Miles;