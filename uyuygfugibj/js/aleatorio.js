const nomes = ["Daniel Craig", "Sean Connery", "Roger Moore", "Pierce Brosnan", "Timothy Dalton", "George Lazenby", "Tom Cruise"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)