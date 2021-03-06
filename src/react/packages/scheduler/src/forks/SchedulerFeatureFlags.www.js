/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export const {
  enableIsInputPending,
  enableSchedulerDebugging,
  requestIdleCallbackBeforeFirstFrame,
  requestTimerEventBeforeFirstFrame,
  enableMessageLoopImplementation,
} = require('SchedulerFeatureFlags');

export const enableProfiling = __PROFILE__;
