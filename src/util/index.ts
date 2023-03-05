//价格类的数据,前端展示除100
export const priceToPresentation = (
  data: number | { [x: string]: number } | undefined,
  code: string | string[] = "price"
) => {
  if (typeof data === "number") {
    return Number((data / 100).toFixed(2));
  }

  if (typeof data === "object") {
    if (typeof code === "string") {
      return Object.assign({}, data, {
        [code]: Number((data[code] / 100).toFixed(2)),
      });
    }

    if (code instanceof Array) {
      let newData: any = {};
      code.forEach((codeKey) => {
        newData[codeKey] = Number((data[codeKey] / 100).toFixed(2));
      });
      return Object.assign({}, data, newData);
    }
  }
  return data;
};

//价格类的数据，传给后端乘100

export const priceToDatabase = (data: number | string) => {
  if (isNaN(Number(data))) throw new Error("priceToDatabase:请传入数字");
  return Number((Number(data) * 100).toFixed(0));
};
