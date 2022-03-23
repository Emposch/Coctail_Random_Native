export const API = 'https://randomuser.me/api/?results=15';

const APU = 'https://www.thecocktaildb.com/api/json/v1/1/'

export const GET_ALL_COCKTAILS = APU + 'filter.php?c=Cocktail'
export const SEARCH_COCKTAIL_BY_NAME = APU + 'search.php?s='
export const FILTER_COCKTAIL_BY_ALCO = APU + 'filter.php?a='
export const GET_INFO_COCKTAIL_BY_ID = APU + 'lookup.php?i='
export const GET_INGREDIENT_BY_NAME = APU + 'search.php?i='