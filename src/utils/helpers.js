export const normalize = list => list
  .reduce((res, item) => {
    res[item.id] = item
    return res
  }, {})

export const denormalize = list => Object.keys(list)
  .map(key => list[key])