const columns = 10;
const rows = 5;
for(let i = 1; i <= rows; i++ ) {
    
    for (let q = 1; q <= columns; q++) {
      console.log(`${i} x ${q} = ${i * q}`);
    }
 console.log(rows, columns);
}

