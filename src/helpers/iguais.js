
function iguais(arr1, arr2) {
    let arrtam;
    if ((arrtam = arr1.length) !== arr2.length) return false;
    for (let i = 0; i < arrtam; i++) if (arr1[i] !== arr2[i]) return false;
    return true;
  }

export default iguais;