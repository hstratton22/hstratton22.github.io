const options= {year:"numeric"};
document.getElementById('currentDate').textContent=new Date().toLocaleDateString("en-US", options);