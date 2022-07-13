import _ from "lodash";

/* 处理读取 .env 的变量出来的字符串数据类型转化为原数据类型 */
export const parseEnv = function (env: Record<string, any>): ImportMetaEnv {
  const typeEnv: any = _.cloneDeep(env);

  Object.entries(env).forEach(([key, value]) => {
    if (value == "true" || value == "false") {
      typeEnv[key] = value == "true" ? true : false;
    } else if (/^\d+$/.test(value)) {
      typeEnv[key] = Number(value);
    } else if (value == "null") {
      typeEnv[key] = null;
    } else if (value == "undefined") {
      typeEnv[key] = undefined;
    }
  });

  return typeEnv;
};
