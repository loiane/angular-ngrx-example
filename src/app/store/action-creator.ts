import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

@Injectable()
export class ActionCreator {
  static create?<T>(type: string, defaultPayloadValue?: any) {
    return (payload?: T): Action => {
      return <Action>{
        type: type,
        payload: payload || defaultPayloadValue
      };
    };
  }

  create?<T>(type: string, defaultPayloadValue?: any) {
    return ActionCreator.create<T>(type, defaultPayloadValue);
  }
}