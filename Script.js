function isPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

function compute() {
  const input = document.getElementById("evenInput").value;
  const E = parseInt(input);
  const output = document.getElementById("output");
  output.innerHTML = "";

  if (E % 2 !== 0 || E < 4) {
    output.innerHTML = "Please enter an even number ≥ 4.";
    return;
  }

  for (let p = 2; p <= E / 2; p++) {
    const q = E - p;
    if (isPrime(p) && isPrime(q)) {
      const O = E / (2 ** Math.floor(Math.log2(E)));
      output.innerHTML = `Found: ${p} + ${q} = ${E}<br>→ One factor of O = E / 2ⁿ is ${p}`;
      return;
    }
  }

  output.innerHTML = "No Goldbach pair found.";
}
