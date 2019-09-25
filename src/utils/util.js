/**
 * Created by Administrator on 2017/9/21 0021.
 * 封装常用工具函数,包含对原生基本类型的扩展
 */

export const isEmptyObject = (e) => {
  let t;
  for (t in e) {
    return !1;
  }
  return !0;
};
