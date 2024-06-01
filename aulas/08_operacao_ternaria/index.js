// (condição) ? 'Valor verdadeiro' : 'Valor falso.

const pontuacaoUsuario = 500;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário vip' : 'Usuário normal';

const corUsuario = null;
const corPadrão = corUsuario || 'Preto';

console.log(nivelUsuario, corPadrão);