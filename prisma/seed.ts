// Prisma seed script
// https://www.prisma.io/docs/guides/database/seed-database
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const items = [
  {
    nome: 'Hambúrguer de carne',
    preco: 15.5,
    descricao_pt: 'Hambúrguer de carne com queijo, tomate, alface e maionese',
    descricao_en: 'Beef burger with cheese, tomato, lettuce and mayonnaise',
    categoria: 'Hambúrgueres',
  },
  {
    nome: 'Hambúrguer vegetariano',
    preco: 12.0,
    descricao_pt:
      'Hambúrguer vegetariano com queijo, tomate, alface e maionese',
    descricao_en:
      'Vegetarian burger with cheese, tomato, lettuce and mayonnaise',
    categoria: 'Hambúrgueres',
  },
  {
    nome: 'Pizza margherita',
    preco: 25.0,
    descricao_pt: 'Pizza de tomate, mussarela e manjericão',
    descricao_en: 'Tomato, mozzarella and basil pizza',
    categoria: 'Pizzas',
  },
  {
    nome: 'Pizza pepperoni',
    preco: 30.0,
    descricao_pt: 'Pizza de pepperoni, mussarela e tomate',
    descricao_en: 'Pepperoni, mozzarella and tomato pizza',
    categoria: 'Pizzas',
  },
  {
    nome: 'Arroz com frango',
    preco: 18.0,
    descricao_pt: 'Arroz com frango, feijão, batata e salada',
    descricao_en: 'Rice with chicken, beans, potato and salad',
    categoria: 'Pratos executivos',
  },
  {
    nome: 'Feijoada',
    preco: 22.0,
    descricao_pt: 'Feijoada com arroz, farofa e couve',
    descricao_en: 'Feijoada with rice, farofa and collard greens',
    categoria: 'Pratos executivos',
  },
  {
    nome: 'Sopa de legumes',
    preco: 12.0,
    descricao_pt: 'Sopa de legumes com caldo de galinha',
    descricao_en: 'Vegetable soup with chicken broth',
    categoria: 'Sopas',
  },
  {
    nome: 'Sopa de feijão',
    preco: 10.0,
    descricao_pt: 'Sopa de feijão com caldo de carne',
    descricao_en: 'Bean soup with beef broth',
    categoria: 'Sopas',
  },
  {
    nome: 'Salada Caesar',
    preco: 18.0,
    descricao_pt: 'Salada Caesar com frango',
    descricao_en: 'Caesar salad with chicken',
    categoria: 'Saladas',
  },
  {
    nome: 'Salada de frutas',
    preco: 15.0,
    descricao_pt: 'Salada de frutas com iogurte',
    descricao_en: 'Fruit salad with yogurt',
    categoria: 'Saladas',
  },
  {
    nome: 'Suco de laranja',
    preco: 8.0,
    descricao_pt: 'Suco de laranja natural',
    descricao_en: 'Natural orange juice',
    categoria: 'Bebidas',
  },
  {
    nome: 'Suco de abacaxi',
    preco: 8.0,
    descricao_pt: 'Suco de abacaxi natural',
    descricao_en: 'Natural pineapple juice',
    categoria: 'Bebidas',
  },
  {
    nome: 'Coca-cola',
    preco: 6.0,
    descricao_pt: 'Refrigerante Coca-cola',
    descricao_en: 'Coca-cola soft drink',
    categoria: 'Bebidas',
  },
  {
    nome: 'Fanta',
    preco: 6.0,
    descricao_pt: 'Refrigerante Fanta',
    descricao_en: 'Fanta soft drink',
    categoria: 'Bebidas',
  },
  {
    nome: 'Água mineral',
    preco: 5.0,
    descricao_pt: 'Água mineral sem gás',
    descricao_en: 'Still mineral water',
    categoria: 'Bebidas',
  },
  {
    nome: 'Carne assada',
    preco: 25.0,
    descricao_pt: 'Carne assada com batata e salada',
    descricao_en: 'Roasted meat with potato and salad',
    categoria: 'Pratos executivos',
  },
  {
    nome: 'Bife à milanesa',
    preco: 25.0,
    descricao_pt: 'Bife à milanesa com batata e salada',
    descricao_en: 'Milanese steak with potato and salad',
    categoria: 'Pratos executivos',
  },
  {
    nome: 'Lasanha',
    preco: 25.0,
    descricao_pt: 'Lasanha com molho de tomate',
    descricao_en: 'Lasagna with tomato sauce',
    categoria: 'Pratos executivos',
  },
  {
    nome: 'Macarrão à bolonhesa',
    preco: 25.0,
    descricao_pt: 'Macarrão à bolonhesa com molho de tomate',
    descricao_en: 'Bolognese pasta with tomato sauce',
    categoria: 'Pratos executivos',
  },
  {
    nome: 'Macarrão com frango',
    preco: 25.0,
    descricao_pt: 'Macarrão com frango e molho de tomate',
    descricao_en: 'Pasta with chicken and tomato sauce',
    categoria: 'Pratos executivos',
  },
];

async function main() {
  await prisma.item.createMany({
    data: items,
  });
}

main()
  .then(() => {
    console.log('Done!');
  })
  .catch((e) => {
    console.error(e);
  });
