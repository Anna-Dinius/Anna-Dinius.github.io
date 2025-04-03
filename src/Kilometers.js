function Kilometers({flipped, onChange, distance}) {
  const kmInMi = 0.621371; // number of km in 1 mi
  
  return (
    <div>
      <label htmlFor="kilometers">Kilometers</label>

      <input 
        value={flipped ? distance/kmInMi : distance}
        id="kilometers" 
        placeholder="Kilometers"
        type="number" 
        onChange={onChange}
        disabled={flipped === true}
      />
    </div>
  )
}
export default Kilometers;