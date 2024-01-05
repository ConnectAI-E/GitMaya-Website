export const isProd = process.env.NODE_ENV === 'production';


export const ifInIndex = (routeName:string) => {
  console.log(routeName);
  return routeName.startsWith('/index')
}
