// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TraceState } from "@opentelemetry/api";

/**
 * @hidden
 * @internal
 */
export class OpenCensusTraceStateWrapper implements TraceState {
  private readonly _state?: string;

  constructor(state?: string) {
    this._state = state;
  }

  get(_key: string): string | undefined {
    throw new Error("Method not implemented.");
  }

  set(_key: string, _value: string): void {
    throw new Error("Method not implemented.");
  }

  unset(_key: string): void {
    throw new Error("Method not implemented");
  }

  serialize(): string {
    return this._state || "";
  }
}
