var idade = 89
if (idade<16){
    console.log('Não vota')
}else if (idade<18 || idade>65){
    console.log('Voto opcional')
}else if (18<=idade<65){
    console.log('voto obrigatório')
}