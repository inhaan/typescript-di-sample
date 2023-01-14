import { constructor } from "./types";

export const typeInfo = new Map<any, constructor>();

export class Injector {
  static resolve<T>(target: constructor<T>): T {
    const paramTypes = Reflect.getMetadata("design:paramtypes", target) || [];
    const injections = paramTypes.map((paramType: any) => {
      return Injector.resolveParam(paramType);
    });
    return new target(...injections);
  }

  private static resolveParam(key: any) {
    const param = typeInfo.get(key);
    if (param) {
      return new param();
    }
    throw new Error(`알 수 없는 타입입니다 ${key}`);
  }
}
