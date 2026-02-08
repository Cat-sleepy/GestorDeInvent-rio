const inventario = [
{ id: 1, nome: "Teclado Mecânico RGB", preco: 85, categoria: ["Informática", "Periféricos"], emStock: true },
{ id: 2, nome: "Frigideira a Ar (Air Fryer)", preco: 110, categoria: ["Eletrodomésticos", "Cozinha"], emStock: true },
{ id: 3, nome: "Cadeira de Escritório Ergonómica", preco: 180, categoria: ["Escritório", "Mobiliário"], emStock: false },
{ id: 4, nome: "Ecrã Curvo 27' 144Hz", preco: 250, categoria: ["Informática", "Ecrãs"], emStock: true },
{ id: 5, nome: "Máquina de Café de Cápsulas", preco: 75, categoria: ["Eletrodomésticos", "Cozinha"], emStock: true },
{ id: 6, nome: "Caderno Inteligente A5", preco: 30, categoria: ["Escritório", "Papelaria"], emStock: true },
{ id: 7, nome: "Trotinete Elétrica", preco: 450, categoria: ["Lazer", "Mobilidade"], emStock: false },
{ id: 8, nome: "Rato Sem Fios Vertical", preco: 55, categoria: ["Informática", "Periféricos"], emStock: true }
];



// const filterInventario = inventario.filter((produto) => {
//     return produto.emStock === true && produto.preco <100
// })

// console.log(filterInventario)




//----------------------------------------------------------------------------




// const produtosSemStock = inventario.filter(produto => !produto.emStock);

// const nomesSemStock = produtosSemStock.map(produto => produto.nome);

// console.log(nomesSemStock);




//------------------------------------------------------------------------





const existeSemStock = inventario.some(produto => !produto.emStock);

if (existeSemStock) {
  const produtosSemStock = inventario.filter(produto => !produto.emStock);

  console.log("Existem produtos sem stock:");
  produtosSemStock.forEach(produto =>
    console.log(`- ${produto.nome}`)
  );
} else {
  console.log("Todos os produtos estão em stock.");
}







