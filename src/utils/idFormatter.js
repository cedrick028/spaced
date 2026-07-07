export const trimId = (id, criteria, index = 0) => {
  return id?.split(criteria)?.[index]?.toUpperCase() ?? "--";
}