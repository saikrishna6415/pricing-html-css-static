const switchAnnualMonthly = ()=>{
  if (slider.checked) {
      document.getElementById('basicPrice').innerHTML = `&dollar; 19.99`;
      document.getElementById('professionalPrice').innerHTML = `&dollar; 24.99`;
      document.getElementById('masterPrice').innerHTML = `&dollar;39.99`;
    } else {
      document.getElementById('basicPrice').innerHTML = `&dollar; 199.99`;
      document.getElementById('professionalPrice').innerHTML = `&dollar;249.99`;
      document.getElementById('masterPrice').innerHTML =`&dollar; 399.99`;
    }    
}