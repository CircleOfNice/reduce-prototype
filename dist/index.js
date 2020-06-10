"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducePrototypeChain = reducePrototypeChain;
exports.reduceInheritanceChain = reduceInheritanceChain;

/*
 * This file is part of ReducePrototype.
 *
 * ReducePrototype is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ReducePrototype is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with ReducePrototype.  If not, see <http://www.gnu.org/licenses/>.
 *
 * Copyright 2017 CRCL UG (haftungsbeschränkt)
 */

/**
 * takes an object and reduces its prototype chain with
 * a given callback fn
 *
 * @param  {Object}    instance to be reduced
 * @param  {Reducer}   reducer  function
 * @param  {*}         carry    to be reduced into
 * @param  {Function?} stop     constructor to break reducer
 * @return {*}
 */
// eslint-disable-next-line
function reducePrototypeChain(instance, reducer, carry, stop = Object) {
  var _repeat = true;

  var _instance, _reducer, _carry, _stop;

  while (_repeat) {
    _repeat = false;
    const proto = Object.getPrototypeOf(instance);
    if (!proto || proto === stop.prototype) return carry;
    const result = reducer(carry, proto, instance);
    _instance = proto;
    _reducer = reducer;
    _carry = result;
    _stop = stop;
    instance = _instance;
    reducer = _reducer;
    carry = _carry;
    stop = _stop;
    _repeat = true;
    continue;
  }
}
/**
 * takes a class and reduces its prototype chain with
 * a given callback
 *
 * @param  {Function}  constr  constructor function of class
 * @param  {Reducer}   reducer function
 * @param  {*}         carry   to be reduced into
 * @param  {Function?} stop    constructor to break reducer
 * @return {*}
 */
// eslint-disable-next-line


function reduceInheritanceChain(constr, reducer, carry, stop = Object) {
  return reducePrototypeChain(Object.create(constr.prototype, {}), reducer, carry, stop);
}
